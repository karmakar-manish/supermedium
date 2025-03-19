import Appbar from "../components/Appbar";
import Button from "../components/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Publish(){
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const username = JSON.parse(localStorage.getItem("token") || "").username

    return <div>
        <Appbar username={username}/>
        
        <div className="flex justify-center">
            <div className="flex flex-col justify-center py-10 w-2xl items-center gap-5">
                <TitleComponent onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
                <TextAreaComponent onChange={(e)=>{
                    setDescription(e.target.value)
                }}/>
                <div className="w-full flex justify-start">
                    <Button onClick={()=>{
                        axios.post(`${BACKEND_URL}/api/v1/blog/postblog`,{
                            title: title,
                            content: description
                        }, {
                            headers: {
                                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")||"").jwt
                            }
                        })
                        .then(response=>{
                            //navigate to /blog page
                            navigate(`/${response.data.id}`)
                        })
                        .catch(err=>{
                            alert("Error posting blog")
                            console.log(`Error posting blog: ${err}`)
                        })

                    }} label="Publish blog" />
                </div>
            </div>
        </div>
        
    </div>
}

function TitleComponent(props: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return <div className="max-w-screen-lg w-full">
        <input type="text" className="border bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-1 focus:ring-gray-500 focus:outline-none" placeholder="Title"
        onChange={props.onChange}/>
    </div>
}

function TextAreaComponent(props: {onChange:(e:React.ChangeEvent<HTMLTextAreaElement>) => void}){
    return <div className="w-full mx-auto p-1 rounded-lg shadow-lg bg-white">
        <textarea
            className="resize-none block w-full h-60 p-3 rounded-md focus:outline-none text-sm font-medium focus:ring-1 focus:ring-gray-500"
            placeholder="Start typing here..."
            rows={8}
            onChange={props.onChange}
        />
    </div>
}