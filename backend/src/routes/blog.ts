import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from "hono";
//jwt library
import {verify} from "hono/jwt"

export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL : string,
      JWT_SECRET : string
    };
    Variables: {
      userId: string
    }
  }>()
  


//middleware
blogRouter.use("/*", async(c, next)=>{
  //get the header
  //verify the header
  // if the header is correct, proceed
  //else we send an error message

  const header = c.req.header("authorization") || "";

  //Bearer token
  const token = header.split(" ")[1]

  try{
    const response = await verify(token, c.env.JWT_SECRET)

    if(!response)
    {
      c.status(403)
      return c.json({error: "Unauthorized"})
    }
    //@ts-ignore
    c.set("userId", response.id)
    await next(); //everything is correct
  }catch(err)
  {
    return c.json({
      message: "Error verifying token!",
      error: err
    })
  }

})
  
//------route to post a blog
blogRouter.post("/postblog", async(c)=>{

  //extract the body
  const body = await c.req.json()
  const authorId = c.get("userId")  //got from the middleware

  //prisma client
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try{
      //push the blog in database from the body
      const blog = await prisma.blog.create({
          data:{
              title: body.title,
              content: body.content,
              authorId: authorId,   //got from the middleware
          }
      })
      return c.json({
        message: "Blog posted successfully!!",
        id: blog.id,
      })
  }catch(err)
  {
      return c.json({
          message: "Error posting blog!",
          error: err
      })
  }

})

//update blog route
blogRouter.put("/updateblog", async(c)=>{
  const body = await c.req.json()
  const authorId = c.get("userId")

  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try{
      prisma.blog.update({
        where: {
          id: authorId
        },
        data: {
          title: body.title,
          content: body.content
        }
      })
    
      return c.json({
        message: "Blog updated successfully!",
        id: body.id
      })
  }catch(err)
  {
    return c.json({
      message: "Error updating blog!",
      error: err
    })  
  }

})


//route to get all the id of the blogs
blogRouter.get("/bulk", async(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try{
    const blog = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: { //select the author name from author table
          select: {
            name: true
          }
        }
      }
    })

    return c.json({
      blogs: blog
    })

  }catch(err)
  {
    c.status(411)
    c.json({
      message: "Error fetching all blogs!",
      error: err
    })
  }
})

//route to display the blog of given id in params
blogRouter.get("/:id", async(c)=>{
  
  const id = c.req.param("id")
  
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try{
    const blog = await prisma.blog.findFirst({
      where: {
        id: id
      },
      select:{
        title: true,
        content: true,
        id: true,
        author:{
          select: {
            name: true
          }
        }
      }
    })
   
    return c.json({
      blogs: blog
    })
  }catch(err)
  {
    c.status(411)
    return c.json({
      message: "Error getting blogs !",
      error: err
    })
  }
})

