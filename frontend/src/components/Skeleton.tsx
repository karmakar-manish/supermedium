function AllBlogSkeleton(){
    return <div className="flex justify-center">
            <div role="status" className="max-w-lg animate-pulse">
                <div className="flex justify-center pr-7">
                    <div className="flex flex-col justify-center max-w-xl">
                        <div className="border-b border-b-slate-300  p-4 cursor-pointer">
                            <div className="w-lg max-w-screen-md flex items-center gap-x-2 py-2 ">
                                <div className="h-7 w-7 bg-slate-300 flex justify-center rounded-full mt-1 mr-2"></div>
                                <div className="flex items-center pt-3">
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-35 mb-4 mr-2"></div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4   "></div>
                                </div>
                                
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-md mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-lg mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-50 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-30 mb-4"></div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
}

function SingleBlogSkeleton(){
    return <div className="h-lg w-full mt-2">
        <div className="py-2 px-10">
            <div className="grid grid-cols-12 w-full h-fit">
                <div className=" grid col-span-8 p-10">
                    <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-160 mb-4"></div>   
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-50 mb-4   "></div>
                    
                    {[...Array(14)].map((_, index) => (
                        <Skeleton key={index} />
                    ))}
                    
                </div>
                <div className=" grid col-span-4 h-fit p-10">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4   "></div>
                    <div className="flex gap-1">
                        <div className="h-7 w-7 bg-slate-300 flex justify-center rounded-full mt-1 mr-2"></div>
                        <div className="">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-30 mt-3"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mt-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function Skeleton()
{
   return <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-170 mb-4"></div>
}

export {AllBlogSkeleton, SingleBlogSkeleton}