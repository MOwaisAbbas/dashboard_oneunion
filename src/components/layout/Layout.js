import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import "../../App.css"
import { Outlet } from "react-router-dom";

function Layout() {

    const obj = {
        ative: true,
        content: "New Qoutes"
    }

    return (
        <>
            <div className="flex">
                <div className=" sm:block hidden border border-red" >
                    <SideBar />
                </div>
                <div className="w-full" >
                    <Header title="New Qoutes" />
                    <div className="p-2  bg-cus-gray ">

                        <Outlet />


                    </div>

                </div>

            </div>
        </>
    );
}

export default Layout;