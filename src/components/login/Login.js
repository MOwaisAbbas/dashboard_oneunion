import Logo from "../../assets/logo.png"
import { CiUser } from "react-icons/ci"
import { PiEyeThin } from "react-icons/pi"
function Login() {
    return (<>

        <div className=" App  mx-auto py-20 px-1 flex justify-center items-center">
            <div className=" bg-white max-w-sm   rounded-md p-4 px-5">
                <div className="py-3">
                    <img className="w-32 mx-auto" src={Logo} />
                </div>
                <div>
                    <h2 className="text-center p-2 font-bold text-xl">Log in</h2>
                    <p className="text-center text-sm">Please log in to continue.</p>

                    <div className=" flex flex-col gap-4 py-3">
                        <label className="font-normal text-sm w-full" htmlFor="username">
                            User Name
                        </label>
                        <div className="relative">
                            <span className="absolute text-cus-lblue px-1  py-2"><CiUser /></span>

                            <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8  px-6" id="username" placeholder="Enter you email" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-3 pt-0">
                        <label className="font-normal text-sm w-full" htmlFor="password">
                            User Name
                        </label>
                        <div className="relative">
                            <span className="absolute text-cus-lblue px-1  py-2"><PiEyeThin /></span>

                            <input type="password" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8  px-6" id="password" placeholder="Enter you email" />
                        </div>

                    </div>
                    <div className="py-3 gap-2 text-xs flex items-center justify-between">
                        <label className="flex items-center   gap-2">
                            <input type="checkbox" className="w-5" />
                            Remember me!
                        </label>
                        <a href="javaScript:void(0)" className="text-cus-red ">Forgot Password?</a>
                    </div>
                    <button className="bg-cus-blue rounded-md text-white p-2 w-full ">Log in</button>
                    <p className="text-center text-sm py-4 pt-6">Don’t have an account?<a className="text-cus-blue" href="javaScript:void(0)">Sign Up</a> </p>
                </div>

            </div>

        </div>
    </>);
}

export default Login;