import Logo from "../../assets/logo.png"
function Login() {
    return (<>

        <div className=" App  mx-auto sm:px-20 py-20 flex justify-center items-center">
            <div className=" bg-white max-w-xl 2xl:w-1/3 lg:w-1/2 sm:w-4/5  rounded-md p-6 px-10">
                <div className="py-4">
                    <img className="w-52 mx-auto" src={Logo} />
                </div>
                <div>
                    <h2 className="text-center font-bold text-2xl">Log in</h2>
                    <p className="text-center ">Please log in to continue.</p>

                    <div className="flex flex-col gap-4 py-3">
                        <label className=" font-normal text-lg w-full" htmlFor="username">
                            User Name
                        </label>
                        <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5" id="username" placeholder="Enter you email" />
                    </div>
                    <div  className="flex flex-col gap-4 py-3 pt-0">
                    <label className=" font-normal text-lg w-full"  htmlFor="password">
                        User Name
                    </label>
                    <input type="password" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5" id="password" placeholder="Enter you email" />
                    
                    </div>
                    <div className="p-3 flex items-center justify-between">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="w-5" />
                            Remember me!
                        </label>
                        <a href="javaScript:void(0)" className="text-cus-red">Forgot Password?</a>
                    </div>
                    <button className="bg-cus-blue rounded-md text-white p-3 w-full ">Log in</button>
                    <p className="text-center py-6 pt-10">Don’t have an account?<a className="text-cus-blue" href="javaScript:void(0)">Sign Up</a> </p>
                </div>

            </div>

        </div>
    </>);
}

export default Login;