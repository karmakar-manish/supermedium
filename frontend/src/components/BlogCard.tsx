import { Link } from "react-router-dom"

interface BlogCardProps{
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
    id: string
}

export default function BlogCard(props: BlogCardProps){
    return <Link to={`/${props.id}`}>
        <div className="border-b border-b-slate-300  p-4 cursor-pointer">
            <div className="w-lg max-w-screen-md flex items-center gap-x-2 py-2 ">
                <div className="h-7 w-7 bg-slate-300 flex justify-center rounded-full mt-1 mr-2">
                    <div className="flex flex-col justify-center">
                        {props.authorName[0]}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center font-medium ">
                        {props.authorName}
                    </div>
                    <div className="font-extralight text-sm pl-2">
                        . {props.publishedDate}
                    </div>
                </div>
            </div>
            <div className="font-bold text-lg">
                {props.title}
            </div>
            <div className="font-medium text-md text-slate-600">
                {props.content.slice(0,100) + "..."}
            </div>
            <div className="text-slate-400">
                {`${Math.ceil(props.content.length / 100)} minute(s)`}
            </div>
            
        </div>
    </Link>
}