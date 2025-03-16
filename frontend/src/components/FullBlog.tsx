import Icon from "./Icon"

interface fullBlogProp{
    title: string,
    content: string,
    id: string,
    author: string
}

function FullBlog(props: fullBlogProp){
    return <div>
        <div className="py-2 px-10">
            <div className="grid grid-cols-12 w-full h-fit">
                <div className=" grid col-span-8 p-10">
                    <div className="font-extrabold text-4xl my-2">
                        {props.title}
                    </div>
                    <div className="font-medium text-slate-400">
                        Posted on March 12, 2025
                    </div>
                    <div className="my-2 text-slate-700 font-serif">
                        {props.content}
                    </div>
                </div>
                <div className=" grid col-span-4 h-fit p-10">
                    <div className="font-mono text-slate-700 my-2">
                        Author
                    </div>
                    <div className="flex gap-1">
                        <div>
                            <Icon author={props.author}/>
                        </div>
                        <div className="">
                            <div className="font-bold text-xl mb-1">
                                {props.author}
                            </div>
                            <div className="text-slate-600 font-extralight">
                                This is the detail about the author.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export {FullBlog}