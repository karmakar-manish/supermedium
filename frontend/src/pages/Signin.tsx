import Quotes from "../components/Quote";
import SigninAuth from "../components/SigninAuth";

function Signin(){
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-screen flex justify-center flex-col">
            <SigninAuth/>
        </div>
        <div className="">
            <Quotes/>
        </div>
    </div>
}

export default Signin;