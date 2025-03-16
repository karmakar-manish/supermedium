import { ChangeEvent, useState } from "react"
import { signupSchema } from "@manish_iitg/medium-commonfiles"
import { Link } from "react-router-dom"
import Button from "./Button"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"


function SignupAuth(){
    const navigate = useNavigate()  //for navigating to different route

    //state variable, strict type checking
    const [postInputs, setPostInputs] = useState<signupSchema>({
        username: "",
        password: "",
        name: ""
    })

    //function to send request to the backend
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
                username: postInputs.username,
                password: postInputs.password,
                name: postInputs.name
            })

            const jwt = response.data;
           
            //store the jwt in localstorage
            localStorage.setItem("token", JSON.stringify(jwt))

            //take the user to different page
            navigate("/blogs")

        }catch(err){
            //alert the user that request has failed
            alert("Incorrect Credentials!")
            console.log("Error: ", err)
        }
    }

    return <div className="flex justify-center">
        <div className="flex justify-center flex-col ">
            <div className="pb-2">
                <div className="text-3xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-400">
                    Already have an account?  
                    <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                </div>
            </div>
                <InputComponent label="Name" placeholder="Manish" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,   //give all existing values
                        name: e.target.value //overwrite name
                    })
                }}/>
                <InputComponent label="Email" placeholder="manish@gmail.com" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        username: e.target.value
                    })
                }}/>
                <InputComponent label="Password" placeholder="123456" type="password" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }}/>
                <div className="mt-5">
                    <Button onClick={sendRequest} label="Signup"/>
                </div>
        </div>
    </div>
}

interface InputComponentProps {
    label: string,
    placeholder: string,
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void
    type?: string   //for passwords
}

function InputComponent(props: InputComponentProps){
    return <div className="w-80">
        <div className="text-sm font-semibold text-left py-2">
            {props.label}
        </div>
        {/* any time the input changes  */}
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange}
        className="w-full px-2 py-1 border border-gray-300 rounded-sm"/>
    </div>
}
export default SignupAuth
