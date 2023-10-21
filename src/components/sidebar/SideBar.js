import Logo from "../../assets/logo.png"
import icon1 from "../../assets/file.svg"
import icon2 from "../../assets/customer-support (1).svg"
import icon3 from "../../assets/trade.svg"
import icon4 from "../../assets/approvalfsssssssssssss.svg"
import { NavLink, useLocation } from "react-router-dom"
import { useState } from "react"

function SideBar() {

    return (
        <>
            <div className=" sidebar w-[245px] bg-white  h-full ">
                <NavLink to="/login">
                    <div className="border grid place-items-center h-16">
                        <img className="w-28 " src={Logo} />
                    </div>
                </NavLink>
                <ul className="list-none">
                    <li className="flex items-center justify-start p-2 text-sm gap-3 ">
                        <img src={icon1} />
                        <p>New Qoutes</p>
                    </li>
                    <NavLink to="/myqoutes">
                        <li className="flex items-center justify-start p-2 text-sm gap-3 ">
                            <img className="" src={icon1} />
                            <p>My Qoutes</p>
                        </li>
                    </NavLink>
                    <NavLink to="/form">
                        <li className="flex items-center justify-start p-2 text-sm gap-3 bg-cus-blue text-white">
                            <img className="fill-white" src={icon4} />
                            <p>Book Shipment</p>
                        </li>
                    </NavLink>
                    <li className="flex items-center justify-start p-2 text-sm gap-3 ">
                        <img src={icon3} />
                        <p>Track Shipments</p>
                    </li>
                    <li className="flex items-center justify-start p-2 text-sm gap-3 ">
                        <img src={icon1} />
                        <p>Shipment History</p>
                    </li>
                    <NavLink to="/">
                        <li className="flex items-center justify-start p-2 text-sm gap-3 ">
                            <img src={icon2} />
                            <p>Support & Help</p>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    );
}

export default SideBar;