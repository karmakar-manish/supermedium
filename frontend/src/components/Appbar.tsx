import { Link } from "react-router-dom"
import Icon from "./Icon"

interface AppbarProps{
    username: string
}

export default function Appbar(props: AppbarProps){
    
    return <div className="border-b border-slate-300 px-4 py-2 items-center">
        <div className="flex justify-between items-center">
            <Link to={"/blogs"}>
                <div className="font-semibold text-slate-700 flex-col flex justify-center cursor-pointer text-center">
                    Medium
                </div>
            </Link>
            <div className="flex gap-2">
                <Link to={"/publish"}>
                    <button className="text-white bg-green-700 hover:bg-green-800 font-semibold rounded-full text-sm px-5 py-2 text-center me-2 cursor-pointer">
                        New
                    </button>
                </Link>
                <Icon author={props.username}/>
            </div>
        </div>
    </div>
}