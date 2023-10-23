import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import { PiDotsThreeVerticalBold } from "react-icons/pi"
import "../../App.css"

function NewQoutes() {

    const obj = {
        ative: true,
        content: "New Qoutes"
    }

    return (
        <>
            <div className="flex">
                <div className=" sm:block hidden border border-red" >
                    <SideBar obj={obj}/>
                </div>
                <div className="w-full" >
                    <Header title="New Qoutes" />
                    <div className="p-2  bg-cus-gray ">

                        <div className="bg-white rounded-md md:py-5 py-3 px-0 flex items-center mt-4 justify-between">
                            <div className="overflow-x-scroll w-full">

                                <table className="w-full text-sm text-center ">
                                    <thead className=" font-normal">
                                        <tr className="border-b-2 ">
                                            <th className="p-1">#</th>
                                            <th className="p-1">Qoute</th>
                                            <th className="p-1">Date</th>
                                            <th className="p-1">Amount</th>
                                            <th className="p-1"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        <tr className="border-b-2 ">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>

                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>

                                        <tr className="border-b-2 ">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>

                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa]">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>

                                        <tr className="border-b-2 ">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>
                                        <tr className="border-b-2 bg-[#fefafa] ">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

                                        </tr>
                                        <tr className="border-b-2 ">

                                            <td className="p-1">01</td>
                                            <td className="p-1">PK76666666</td>
                                            <td className="p-1">12 Aug, 2023</td>
                                            <td className="p-1">$ 567.00</td>
                                            <td className="p-1"><button className="border border-cus-red rounded-md p-1 text-cus-red bg-[#fae4e1] w-28">Decline</button><button className="border border-cus-green rounded-md p-1 ms-2 text-cus-green bg-[#e2f8d5] w-28">Accept</button></td>

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

export default NewQoutes;