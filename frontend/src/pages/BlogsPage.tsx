import { __unstable__loadDesignSystem } from "tailwindcss";
import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import {useBlogs} from "../hooks/index";
import {AllBlogSkeleton} from "../components/Skeleton";

function Blogs(){
    const {loading, blogs} = useBlogs()
    const username = JSON.parse(localStorage.getItem("token") || "").username
    
    return <div>
        <Appbar username = {username}/>
        {loading?(
            <div><AllBlogSkeleton/><AllBlogSkeleton/><AllBlogSkeleton/><AllBlogSkeleton/></div>
        ): (
            <div className="">
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center max-w-xl">
                    {(blogs || []).map(blog=>{
                        return <BlogCard 
                                    key={blog.id}
                                    id = {blog.id}
                                    authorName={blog.author.name} 
                                    title={blog.title}
                                    content={blog.content}
                                    publishedDate="12 March 2025"
                                />
                    })}
                </div>
            </div>
        </div>
        )}
    </div>
    
}

export default Blogs;