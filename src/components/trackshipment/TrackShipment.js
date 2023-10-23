import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import { PiDotsThreeVerticalBold } from "react-icons/pi"
import "../../App.css"

function TrackShipment() {
    const obj = {
        ative: true,
        content: "Track Shipments"
    }

    return (
        <>
            <div className="flex">
                <div className=" sm:block hidden border border-red" >
                    <SideBar obj={obj} />
                </div>
                <div className="w-full" >
                    <Header title="Track Shipments" />
                    <div className="p-2  bg-cus-gray ">
                        <div className="bg-white rounded-md md:p-5 p-3 flex lg:flex-row flex-col items-center justify-between gap-3">
                            <div className="flex md:flex-row flex-col gap-1">
                                <select className="border w-32  border-cus-red  text-cus-red bg-[#fae4e1]   p-2 text-sm rounded-md">

                                    <option>All Shipments</option>
                                    <option></option>
                                    <option></option>
                                </select>
                                <select className="border w-32 bg-cus-red text-[#fae4e1]  p-2 text-sm rounded-md">

                                    <option>This Provider</option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="flex md:flex-row flex-col gap-2">
                                <input type="text" className="w-32 rounded-md border border-cus-red text-sm text-center p-2" id="name" placeholder="Track Shipments" />
                                <input type="text" className="w-32 rounded-md border border-cus-red text-sm text-center p-2" id="name" placeholder="Search Here" />

                            </div>

                        </div>
                        <div className="bg-white rounded-md md:py-5 py-3 px-0 flex items-center mt-4 justify-between">
                            <div className="overflow-x-scroll w-full">

                                <table className="w-full text-sm text-center ">
                                    <thead className=" font-normal">
                                        <tr className="border-b-2 ">
                                            <th className="p-1">#</th>
                                            <th className="p-1">Shipping Date</th>
                                            <th className="p-1">Tracking Number</th>
                                            <th className="p-1">Shipping Carier</th>
                                            <th className="p-1">Shipping Status</th>
                                            <th className="p-1">Ship To</th>
                                            <th className="p-1">Delivery Date</th>
                                            <th className="p-1">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-blue rounded-md p-1 text-cus-blue bg-[#e5edfb] w-28">Pending</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Delivered</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Rejected</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>

                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-blue rounded-md p-1 text-cus-blue bg-[#e5edfb] w-28">Pending</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Delivered</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Rejected</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>

                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-blue rounded-md p-1 text-cus-blue bg-[#e5edfb] w-28">Pending</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Delivered</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Rejected</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>

                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-blue rounded-md p-1 text-cus-blue bg-[#e5edfb] w-28">Pending</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Delivered</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Rejected</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>

                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-blue rounded-md p-1 text-cus-blue bg-[#e5edfb] w-28">Pending</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa] ">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Delivered</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox"/></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1">Type Here</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Rejected</button></td>
                                            <td className="p-1">USA</td>
                                            <td className="p-1">14 Oct, 2023</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </>
    );
}

export default TrackShipment;