import Logo from "../../assets/logo.png"
import icon1 from "../../assets/file.png"
import icon2 from "../../assets/customer-support (1).png"
import icon3 from "../../assets/trade.png"
import icon4 from "../../assets/approvalfsssssssssssss.png"

function SideBar() {
    return (
        <>
            <div className="bg-white  h-full ">
                <div className="border grid place-items-center h-24">
                    <img className="w-3/5 " src={Logo} />
                </div>
                <ul className="list-none">
                    <li className="flex items-center justify-start p-5 gap-3 ">
                        <img src={icon1} />
                        <p>New Qoutes</p>
                    </li>
                    <li className="flex items-center justify-start p-5 gap-3 ">
                        <img src={icon1} />
                        <p>My Qoutes</p>
                    </li>
                    <li className="flex items-center justify-start p-5 gap-3 bg-cus-blue text-white">
                        <img className="" src={icon4} />
                        <p>Book Shipment</p>
                    </li>
                    <li className="flex items-center justify-start p-5 gap-3 ">
                        <img src={icon3} />
                        <p>Track Shipments</p>
                    </li>
                    <li className="flex items-center justify-start p-5 gap-3 ">
                        <img src={icon1} />
                        <p>Shipment History</p>
                    </li>
                    <li className="flex items-center justify-start p-5 gap-3 ">
                        <img src={icon2} />
                        <p>Support & Help</p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SideBar;