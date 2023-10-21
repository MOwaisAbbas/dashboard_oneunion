import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import AddressForm from "../forms/AddressForm";
import Chat from "../chat/Chat";
import Myqoutes from "../myqoutes/Myqoutes";



function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Chat />} />
                    <Route path="/myqoutes" element={<Myqoutes />} />
                    <Route path="/form" element={<AddressForm />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routing;