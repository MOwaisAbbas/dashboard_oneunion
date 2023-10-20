function AddressForm() {
    return (<>
        <div className="bg-white rounded-s-md sm:p-10 p-7 border">
            <h2 className="font-bold text-2xl">Address Information </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="name">
                        Name
                    </label>
                    <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5" id="name" />
                </div>
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="companyname">
                        company Name
                    </label>
                    <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5" id="companyname" />
                </div>
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="addressone">
                        Address line 1
                    </label>
                    <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5" id="addressone" />
                </div>
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="addresstwo">
                        Address line 2
                    </label>
                    <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5" id="addresstwo" />
                </div>
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="country">
                        Country
                    </label>
                    <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5" id="country" />
                </div>
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="state">
                        State
                    </label>
                    <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5" id="state" />
                </div>

            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="username">
                        State
                    </label>
                    <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5">
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="username">
                        State
                    </label>
                    <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5">
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="Mblenum">
                        Mobile Number
                    </label>
                    <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5" id="Mblenum" />
                </div>
            </div>
            <p className="font-medium text-cus-lblue py-5 sm:text-2xl text-lg">Save as new addres book entry</p>
            <h2 className="font-bold text-2xl">Address Information </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="value">
                        Value
                    </label>
                    <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5" id="value" />
                </div>
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="weight">
                        Weight
                    </label>
                    <input type="text" className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5" id="weight" />
                </div>
            </div>
            <div className="flex flex-col gap-4 py-3">
                <label className=" font-normal text-lg w-full" htmlFor="username">
                    Select Package Type*
                </label>
                <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5">
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="username">
                        Lenght
                    </label>
                    <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5">
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div> <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="username">
                        Width
                    </label>
                    <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5">
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div> <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="username">
                        Height
                    </label>
                    <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5">
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="username">
                        Services
                    </label>
                    <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5">
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <div className="flex flex-col gap-4 py-3">
                    <label className=" font-normal text-lg w-full" htmlFor="username">
                        Lable Type*
                    </label>
                    <select className="w-full rounded-md outline-none active:border-cus-blue focus:border-cus-blue border h-12 ps-10 pe-5">
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div className="flex md:flex-row flex-col-reverse items-center justify-start gap-6">
                <button className="bg-cus-blue rounded-md text-white p-3 md:w-2/6 w-full">Get Lable Price</button>
                <p className="text-2xl font-medium">
                $789.00 USD
                </p>
            </div>
            <div className=" py-4 flex gap-3">
                <input type="checkbox" className="" id="chkbox" />
                <label className=" font-normal md:text-lg text-sm w-full" htmlFor="chkbox">
                    By clicking i agree all terms and conditions.
                </label>
            </div>
            <button className="bg-cus-blue rounded-md text-white p-3 md:w-2/6 w-full mt-8"> Get Lable</button>
        </div>

    </>);
}

export default AddressForm;