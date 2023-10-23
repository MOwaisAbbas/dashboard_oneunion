import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import { PiDotsThreeVerticalBold } from "react-icons/pi"
import "../../App.css"

function Myqoutes() {
    const obj = {
        ative: true,
        content: "My Qoutes"
    }

    return (
        <>
            <div className="flex">
                <div className=" sm:block hidden border border-red" >
                    <SideBar obj={obj}  />
                </div>
                <div className="w-full" >
                    <Header title="My Qoutes" />
                    <div className="p-2  bg-cus-gray ">
                        <div className="bg-white rounded-md md:p-5 p-3 flex items-center justify-between">
                            <select className=" outline-none active:border-cus-red focus:border-cus-red border  p-2 text-sm rounded-md">

                                <option>This Month</option>
                                <option></option>
                                <option></option>
                            </select>
                            <button className="bg-cus-red text-white p-2 rounded-md text-sm">
                                <span className="bg-white text-cus-red rounded-full px-1 me-1">+</span>
                                Create Qoute
                            </button>

                        </div>
                        <div className="bg-white rounded-md md:py-5 py-3 px-0 flex items-center mt-4 justify-between">
                            <div className="overflow-x-scroll w-full">
                                
                            <table className="w-full text-sm text-center ">
                                <thead className=" font-normal">
                                    <tr className="border-b-2 ">
                                        <th className="p-1">#</th>
                                        <th className="p-1">Qoute</th>
                                        <th className="p-1">Date</th>
                                        <th className="p-1">Qoute Request Status</th>
                                        <th className="p-1">Amount</th>
                                        <th className="p-1">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr className="border-b-2 ">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-blue rounded-md p-1 text-cus-blue bg-[#e5edfb] w-28">In Process</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    <tr className="border-b-2 bg-[#fefafa]">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Accepted</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    <tr className="border-b-2 ">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Rejected</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    
                                    <tr className="border-b-2 bg-[#fefafa]">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-blue rounded-md p-1 text-cus-blue bg-[#e5edfb] w-28">In Process</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    <tr className="border-b-2 ">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Accepted</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    <tr className="border-b-2 bg-[#fefafa]">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Rejected</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    
                                    <tr className="border-b-2 ">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-blue rounded-md p-1 text-cus-blue bg-[#e5edfb] w-28">In Process</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    <tr className="border-b-2 bg-[#fefafa]">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Accepted</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    <tr className="border-b-2 ">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Rejected</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    
                                    <tr className="border-b-2 bg-[#fefafa]">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-blue rounded-md p-1 text-cus-blue bg-[#e5edfb] w-28">In Process</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    <tr className="border-b-2 ">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Accepted</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    <tr className="border-b-2 bg-[#fefafa]">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Rejected</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    
                                    <tr className="border-b-2 ">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-blue rounded-md p-1 text-cus-blue bg-[#e5edfb] w-28">In Process</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    <tr className="border-b-2 bg-[#fefafa] ">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-green rounded-md p-1 text-cus-green bg-[#e2f8d5] w-28">Accepted</button></td>
                                        <td className="p-1">$ 567.00</td>
                                        <td className="p-1"><button className="border p-1 rounded-md border-[#053F92]"><PiDotsThreeVerticalBold size={20} /></button></td>
                                    </tr>
                                    <tr className="border-b-2 ">

                                        <td className="p-1">01</td>
                                        <td className="p-1">PK76666666</td>
                                        <td className="p-1">12 Aug, 2023</td>
                                        <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Rejected</button></td>
                                        <td className="p-1">$ 567.00</td>
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

export default Myqoutes;