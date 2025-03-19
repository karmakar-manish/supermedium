import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks/index";
import Appbar from "../components/Appbar";
import {SingleBlogSkeleton} from "../components/Skeleton";

export default function Blog() {
    const { id } = useParams();

    // Custom hook
    const { loading, blog } = useBlog({
        id: id || "",
    });

    const username = JSON.parse(localStorage.getItem("token") || "").username
   
    return (
        <div>
            <Appbar username={username} />
            {loading ? (
                <SingleBlogSkeleton/>
            ) : (
                blog && (
                    <FullBlog
                        id={blog.id}
                        author={blog.author?.name} // ✅ Optional chaining for safety
                        title={blog.title}
                        content={blog.content}
                    />
                )
            )}
        </div>
    );
}
