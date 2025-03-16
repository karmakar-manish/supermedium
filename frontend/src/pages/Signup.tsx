import Quotes from "../components/Quote";
import SignupAuth from "../components/SignupAuth";

function Signup(){
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-screen flex justify-center flex-col">
            <SignupAuth/>
        </div>
        <div className="">
            <Quotes/>
        </div>
    </div>
}

export default Signup;