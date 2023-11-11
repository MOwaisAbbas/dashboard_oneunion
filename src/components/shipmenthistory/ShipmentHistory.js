import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import { PiDotsThreeVerticalBold } from "react-icons/pi"
import "../../App.css"

function ShipmentHistory() {
   
    return (
        <>
           
                        <div className="bg-white rounded-md md:p-5 p-3 flex lg:flex-row flex-col items-center gap-2 justify-between">
                            <div className="flex md:flex-row flex-col gap-1">
                                <select className="border w-32 border-cus-red  text-cus-red bg-[#fae4e1]   p-2 text-sm rounded-md">

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
                            <input type="text" className="w-32 rounded-md border border-cus-red text-sm text-center p-2" id="name" placeholder="Search Here" />



                        </div>
                        <div className="bg-white rounded-md md:py-5 py-3 px-0 flex items-center mt-4 justify-between">
                            <div className="overflow-x-scroll w-full">

                                <table className="w-full text-sm text-center ">
                                    <thead className=" font-normal">
                                        <tr className="border-b-2 ">
                                            <th className="p-1">#</th>
                                            <th className="p-1">Ready Date/Time</th>
                                            <th className="p-1">Shipment ID</th>
                                            <th className="p-1">Status</th>
                                            <th className="p-1">Ship Carrier Ship Via</th>
                                            <th className="p-1">Recipient Company Name</th>
                                            <th className="p-1">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Paid</button></td>
                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Unpaaid</button></td>
                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Paid</button></td>
                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>

                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Unpaaid</button></td>

                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Paid</button></td>
                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Unpaaid</button></td>

                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>

                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Paid</button></td>
                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Unpaaid</button></td>

                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Paid</button></td>
                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>

                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Unpaaid</button></td>

                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Paid</button></td>
                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Unpaaid</button></td>

                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>

                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Paid</button></td>
                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa] ">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Unpaaid</button></td>

                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1"><input type="checkbox" /></td>
                                            <td className="p-1">12 Oct, 2023</td>
                                            <td className="p-1">PK14570000</td>
                                            <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Paid</button></td>
                                            <td className="p-1">Type the Name of Carrier</td>
                                            <td className="p-1">Name Here</td>
                                            <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>


                   
        </>
    );
}

export default ShipmentHistory;