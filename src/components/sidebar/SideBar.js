import Logo from "../../assets/logo.png"
import icon1 from "../../assets/file.svg"
import icon2 from "../../assets/customer-support (1).svg"
import icon3 from "../../assets/trade.svg"
import icon4 from "../../assets/approvalfsssssssssssss.svg"
import { NavLink, useLocation } from "react-router-dom"
import { useState } from "react"
import { PiTarget } from "react-icons/pi"

function SideBar({ obj }) {
    const items = [
        { content: "New Qoutes", src: icon1, path: "/" },
        { content: "My Qoutes", src: icon1, path: "/myqoutes" },
        { content: "Book Shipment", src: icon4, path: "/bookshipment" },
        { content: "Track Shipments", src: icon3, path: "/trackshipment" },
        { content: "Shipment History", src: icon1, path: "/shipmenthistory" },
        { content: "Support & Help", src: icon2, path: "/support&help" }
    ]

    return (
        <>
            <div className="sm:translate-x-0 -translate-x-full  w-[160px] bg-white  h-full ">
                <NavLink to="/login">
                    <div className="border grid place-items-center h-16">
                        <img className="w-28 " src={Logo} />
                    </div>
                </NavLink>
                <ul className="list-none">
                    {items.map((v, i) =>
                        <li key={i}>
                            <NavLink to={v.path}
                                //     `flex hover:bg-cus-blue hover:text-white transition-all items-center justify-start p-2 text-xs gap-3 `
                                className={({ isActive }) =>
                                `flex ${isActive ? "bg-cus-blue text-white" : " bg-white "}  hover:bg-cus-blue hover:text-white transition-all items-center justify-start p-2 text-xs gap-3 duration-200 `
                                    
                                }
                            >
                                <img className="fill-white" src={v.src} />
                                <p>{v.content}</p>
                            </NavLink>
                        </li>
                    )}

                </ul>

            </div>
        </>
    );
}

export default SideBar;