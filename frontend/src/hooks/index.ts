import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";


interface Blog{
    "id": string,
    "title": string,
    "content": string,
    "author": {
        "name": string
    }
}
//custom hook to get all the blogs
function useBlogs()
{
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])  //will store the blogs fetched from backend here
   
    //fetch the blog first time the page loads
    useEffect(()=>{
       
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token") || "").jwt
            }     
        })
            .then(response=>{
                setBlogs(response.data.blogs)
                setLoading(false)
            })
            .catch(err=>{
                console.log("Error fetching blogs : ", err);
                alert("Error fetching blogs!")
                setLoading(true)
            })
    }, [])

    return {
        loading, blogs
    }
}


//custom hook to get the blog of the given id
function useBlog({id} : {id: string})
{
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog | null>(null)

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token") || "").jwt
            }
        })
        .then(response=>{
            setBlog(response.data.blogs)
            setLoading(false)
        })
        .catch(err=>{
            console.log(`Error while fetching blog id : ${err}`);
            alert("Error fetching blog of given id")
        })
    }, [id])

    return {
        loading, blog
    }
}

export {useBlogs, useBlog}