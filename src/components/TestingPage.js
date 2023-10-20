import AddressForm from "./forms/AddressForm";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";


function TestingPage() {
    return (
        <>
            <div className="flex">
                <div className="lg:w-1/5 md:w-1/4 lg:block hidden border border-red" >
                    <SideBar />
                </div>
                <div className="border border-red lg:w-4/5   w-full" >
                    <Header />
                   <div className="p-4 bg-cus-gray">
                   <AddressForm/>
                   </div>

                </div>

            </div>
        </>
    );
}

export default TestingPage;