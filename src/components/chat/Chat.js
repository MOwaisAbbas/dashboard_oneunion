import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import Profile from "../../assets/Ellipse 3.png"

function Chat() {
    const obj = {
        ative: true,
        content: "Support & Help"
    }
    return (<>
        <div className="flex">
            <div className=" sm:block hidden border border-red" >
                <SideBar obj={obj} />
            </div>
            <div className="w-full" >
                <Header title="Help and Support" />
                <div className="p-2  bg-cus-gray ">
                    <div className="bg-white rounded-md md:p-5 p-3">
                        <div className="flex items-center justify-start gap-4  px-6 pb-4 border-b-2">
                            <div>
                                <img className="scale-125" src={Profile} />

                            </div>
                            <div>
                                <p className="text-md font-normal">
                                    Saul Goodmate
                                </p>
                                <p className="text-cus-green text-xs font-normal">
                                    Online
                                </p>
                            </div>
                        </div>
                        <div className="overflow-y-scroll flex flex-col md:p-6 p-2 md:pt-0 pt-0 h-[70vh] ">
                            <div className="self-start flex items-start gap-4 md:w-8/12 w-10/12 mt-4">
                                <img src={Profile} />
                                <div className="flex flex-col items-end gap-1">
                                    <p className="p-2 bg-cus-gray rounded-md max-w-max  text-xs">Good morning, John! How can I assist you today? </p>
                                    <p className="text-[#053E90] text-xs">9:48 AM</p>
                                </div>
                            </div>
                            <div className=" self-end flex items-start justify-end gap-4 md:w-8/12 w-10/12 mt-4">
                                <div className="flex flex-col items-end gap-1">
                                    <p className="p-2 bg-[#053984] text-white rounded-md max-w-max  text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient , .</p>
                                    <p className="text-[#053E90] text-xs">9:48 AM</p>
                                </div>
                                <img src={Profile} />
                            </div>
                            <div className="self-start flex items-start gap-4 md:w-8/12 w-10/12 mt-4">
                                <img src={Profile} />
                                <div className="flex flex-col items-end gap-1">
                                    <p className="p-2 bg-cus-gray rounded-md max-w-max  text-xs">Good morning, John! How can I assist you today? </p>
                                    <p className="text-[#053E90] text-xs">9:48 AM</p>
                                </div>
                            </div>
                            <div className=" self-end flex items-start justify-end gap-4 md:w-8/12 w-10/12 mt-4">
                                <div className="flex flex-col items-end gap-1">
                                    <p className="p-2 bg-[#053984] text-white rounded-md max-w-max  text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient , .</p>
                                    <p className="text-[#053E90] text-xs">9:48 AM</p>
                                </div>
                                <img src={Profile} />
                            </div>
                            <div className=" self-end flex items-start justify-end gap-4 md:w-8/12 w-10/12 mt-4">
                                <div className="flex flex-col items-end gap-1">
                                    <p className="p-2 bg-[#053984] text-white rounded-md max-w-max  text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient , .</p>
                                    <p className="text-[#053E90] text-xs">9:48 AM</p>
                                </div>
                                <img src={Profile} />
                            </div>
                            <div className="self-start flex items-start gap-4 md:w-8/12 w-10/12 mt-4">
                                <img src={Profile} />
                                <div className="flex flex-col items-end gap-1">
                                    <p className="p-2 bg-cus-gray rounded-md max-w-max  text-xs">Good morning, John! How can I assist you today? </p>
                                    <p className="text-[#053E90] text-xs">9:48 AM</p>
                                </div>
                            </div>
                            <div className=" self-end flex items-start justify-end gap-4 md:w-8/12 w-10/12 mt-4">
                                <div className="flex flex-col items-end gap-1">
                                    <p className="p-2 bg-[#053984] text-white rounded-md max-w-max  text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient , .</p>
                                    <p className="text-[#053E90] text-xs">9:48 AM</p>
                                </div>
                                <img src={Profile} />
                            </div>
                            <div className="self-start flex items-start gap-4 md:w-8/12 w-10/12 mt-4">
                                <img src={Profile} />
                                <div className="flex flex-col items-end gap-1">
                                    <p className="p-2 bg-cus-gray rounded-md max-w-max  text-xs">Good morning, John! How can I assist you today? </p>
                                    <p className="text-[#053E90] text-xs">9:48 AM</p>
                                </div>
                            </div>
                            <div className=" self-end flex items-start justify-end gap-4 md:w-8/12 w-10/12 mt-4">
                                <div className="flex flex-col items-end gap-1">
                                    <p className="p-2 bg-[#053984] text-white rounded-md max-w-max  text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient , .</p>
                                    <p className="text-[#053E90] text-xs">9:48 AM</p>
                                </div>
                                <img src={Profile} />
                            </div>
                            <div className=" self-end flex items-start justify-end gap-4 md:w-8/12 w-10/12 mt-4">
                                <div className="flex flex-col items-end gap-1">
                                    <p className="p-2 bg-[#053984] text-white rounded-md max-w-max  text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient , .</p>
                                    <p className="text-[#053E90] text-xs">9:48 AM</p>
                                </div>
                                <img src={Profile} />
                            </div>

                        </div>
                        <div className="flex items-center justify-center mt-2 gap-4">
                            <input type="text " className="bg-[#E0EDFF] outline-none active:border-cus-blue focus:border-cus-blue border p-2 text-sm rounded-md w-11/12" />
                            <button className="bg-cus-blue rounded-full p-2 grid place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
                                    <path d="M24.675 0.671808C24.5651 0.575458 24.4087 0.553104 24.2761 0.614558L0.322946 11.7377C0.19399 11.7976 0.110947 11.9262 0.109397 12.0683C0.107847 12.2104 0.188158 12.3408 0.315859 12.4034L7.09457 15.7283C7.21888 15.7893 7.3671 15.7755 7.47812 15.6926L14.0689 10.7693L8.89486 16.0885C8.82104 16.1644 8.7834 16.2683 8.79152 16.3738L9.30668 23.0791C9.31812 23.2277 9.41777 23.3548 9.55942 23.4013C9.59729 23.4137 9.63619 23.4198 9.67465 23.4198C9.78013 23.4198 9.88274 23.3745 9.95412 23.2919L13.552 19.125L17.9998 21.2489C18.0963 21.2951 18.2081 21.297 18.3062 21.2543C18.4043 21.2116 18.479 21.1285 18.511 21.0266L24.7838 1.05964C24.8276 0.920207 24.7849 0.768158 24.675 0.671808Z" fill="white" />
                                </svg>
                            </button>
                        </div>

                    </div>


                </div>

            </div>

        </div>

    </>);
}

export default Chat;