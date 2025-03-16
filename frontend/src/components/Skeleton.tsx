function AllBlogSkeleton(){
    return <div className="h-lg w-full m-10 flex justify-center items-start">
        <Skeleton/>
    </div>
}

function SingleBlogSkeleton(){
    return <div className="h-lg w-full m-16">
        <Skeleton/>
    </div>
}

function Skeleton()
{
    return <div role="status" className="max-w-lg animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-lg mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[430px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>
        <span className="sr-only">Loading...</span>
    </div>
}

export {AllBlogSkeleton, SingleBlogSkeleton}