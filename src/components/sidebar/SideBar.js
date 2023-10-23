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
        { content: "New Qoutes", src: icon1, path: "/", active: false },
        { content: "My Qoutes", src: icon1, path: "/myqoutes", active: false },
        { content: "Book Shipment", src: icon4, path: "/bookshipment", active: false },
        { content: "Track Shipments", src: icon3, path: "/trackshipment", active: false },
        { content: "Shipment History", src: icon1, path: "/shipmenthistory", active: false },
        { content: "Support & Help", src: icon2, path: "/support&help", active: false }
    ]
    const findValue = items.filter(item => item.content === obj.content);
    const loc = useLocation()
    let classs = " bg-cus-blue text-white "
    let bool = true

    const foo = (e) => {
        e.target.parentNode.className += classs

    }
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
                        <li onClick={foo} key={i}>
                            <NavLink to={v.path} className={`flex hover:bg-cus-blue hover:text-white transition-all items-center justify-start p-2 text-xs gap-3 `}>
                                {/* <NavLink to={v.path} className={`flex ${Index === i && " bg-cus-blue text-white "}  hover:bg-cus-blue hover:text-white transition-all items-center justify-start p-2 text-xs gap-3 `}> */}
                                <img className="" src={v.src} />
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