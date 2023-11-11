import SideBar from "../sidebar/SideBar";
import Header from "../header/Header";

function AddressForm() {
   
    return (<>






                    <div className="bg-white mx-auto rounded-md p-4 border">
                        <h2 className="font-bold text-xl">Address Information </h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="name">
                                    Name
                                </label>
                                <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2" id="name" />
                            </div>
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="companyname">
                                    company Name
                                </label>
                                <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2" id="companyname" />
                            </div>
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="addressone">
                                    Address line 1
                                </label>
                                <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2" id="addressone" />
                            </div>
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="addresstwo">
                                    Address line 2
                                </label>
                                <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2" id="addresstwo" />
                            </div>
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="country">
                                    Country
                                </label>
                                <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2" id="country" />
                            </div>
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="state">
                                    State
                                </label>
                                <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2" id="state" />
                            </div>

                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="username">
                                    State
                                </label>
                                <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="username">
                                    State
                                </label>
                                <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="Mblenum">
                                    Mobile Number
                                </label>
                                <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2" id="Mblenum" />
                            </div>
                        </div>
                        <p className="font-medium text-cus-lblue py-5 sm:text-lg text-lg">Save as new addres book entry</p>
                        <h2 className="font-bold text-2xl">Address Information </h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="value">
                                    Value
                                </label>
                                <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2" id="value" />
                            </div>
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="weight">
                                    Weight
                                </label>
                                <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2" id="weight" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                            <label className=" font-normal text-sm w-full" htmlFor="username">
                                Select Package Type*
                            </label>
                            <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2">
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="username">
                                    Lenght
                                </label>
                                <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div> <div className="flex flex-c1l ga2-4 py-3">
                                <label className=" font-normal text-sm w-full" htmlFor="username">
                                    Width
                                </label>
                                <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div> <div className="flex flex-c1l ga2-4 py-3">
                                <label className=" font-normal text-sm w-full" htmlFor="username">
                                    Height
                                </label>
                                <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="username">
                                    Services
                                </label>
                                <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1 py-2">
                                <label className=" font-normal text-sm w-full" htmlFor="username">
                                    Lable Type*
                                </label>
                                <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border text-sm h-8 p-2">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col-reverse items-center justify-start gap-6">
                            <button className="bg-cus-blue rounded-md text-white p-2 text-sm md:w-2/6 w-full">Get Lable Price</button>
                            <p className="text-lg font-medium">
                                $789.00 USD
                            </p>
                        </div>
                        <div className=" py-4 flex gap-3">
                            <input type="checkbox" className="" id="chkbox" />
                            <label className=" font-normal text-sm w-full" htmlFor="chkbox">
                                By clicking i agree all terms and conditions.
                            </label>
                        </div>
                        <button className="bg-cus-blue rounded-md text-white p-2 text-sm md:w-2/6 w-full"> Get Lable</button>
                    </div>







    </>);
}

export default AddressForm;