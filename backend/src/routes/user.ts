import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
//jwt library
import {sign} from "hono/jwt"
import { signupSchema, signinSchema } from "@manish_iitg/medium-commonfiles";

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL : string,
      JWT_SECRET : string
    }
  }>()
  


//-----Signup route--------
userRouter.post("/signup", async(c)=>{

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
  
    //get data from body
    const body = await c.req.json()
    
    //do zod validation
    const response = signupSchema.safeParse(body)

    if(!response.success)
    {
      c.status(411)
      return c.json({
        message: "Inputs are not correct",
      })
    }
    try{
      //insert data in database
      const user = await prisma.users.create({
        data:{
          email: body.username,
          password: body.password,
          name: body.name
        }
      })
      
      //create jwt token 
      const token = await sign({id: user.id}, c.env.JWT_SECRET)
      
      return c.json({
        jwt: token,
        username: user.name
      })
    }catch(err)
    {
      return c.json({
        message: "Error while inserting data in Users table!",
        error: err
      })
    }
    
  })
  
  //---signin route
  userRouter.post("/signin", async(c)=>{
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
  
    //take data from the body
    const body = await c.req.json();
    
    const response = signinSchema.safeParse(body)
    //zod validation
    if(!response.success)
    {
      c.status(411)
      return c.json({
        message: "Inputs are not correct"
      })
    }
    //check if user is present in database or not
    const user = await prisma.users.findUnique({
      where: {
        email: body.username,
        password: body.password
      }
    })
  
    //incase of no user present
    if(!user)
    {
      c.status(403);
      return c.json({
        error: "User not found!"
      })
    }
  
    //return the jwt token
    const token = await sign({id: user.id}, c.env.JWT_SECRET)
    
    //send the jwt token and username in the response to frontend
    return c.json({
      jwt: token,
      username: user.name
    })
  })
  