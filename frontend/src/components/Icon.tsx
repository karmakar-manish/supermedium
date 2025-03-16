
export default function Icon(props: {author: string}){
    return <div className="h-7 w-7 bg-slate-400 flex justify-center rounded-full mt-1 mr-2">
        <div className="flex flex-col justify-center">
            {props.author[0]}
        </div>
    </div>
}