import zod, { ParseStatus } from "zod"

//signup schema
export const signupSchema = zod.object({
  email: zod.string().email("Invalid email format"),
  password: zod.string().min(6, "Password must be at least 6 characters"),
  name: zod.string().trim().optional(),
})

//signin schema
export const signinSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6)
})

//blog schema
export const blogSchema = zod.object({
  title: zod.string(),
  content: zod.string()
})

//update blog schema
export const updateBlogSchema = zod.object({
  title: zod.string(),
  content: zod.string(),
  id: zod.string()
})
//type inference in zod for using the same schema in frontend and backend
export type signupSchema = zod.infer<typeof signupSchema>
export type signinSchema = zod.infer<typeof signinSchema>
export type blogSchema = zod.infer<typeof blogSchema>
export type updateBlogSchema = zod.infer<typeof updateBlogSchema>