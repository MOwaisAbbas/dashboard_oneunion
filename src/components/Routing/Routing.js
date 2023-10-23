import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import AddressForm from "../forms/AddressForm";
import Chat from "../chat/Chat";
import Myqoutes from "../myqoutes/Myqoutes";
import NewQoutes from "../newqoutes/NewQoutes";
import TrackShipment from "../trackshipment/TrackShipment";
import ShipmentHistory from "../shipmenthistory/ShipmentHistory";



function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/support&help" element={<Chat />} />
                    <Route path="/myqoutes" element={<Myqoutes />} />
                    <Route path="/bookshipment" element={<AddressForm />} />
                    <Route path="/trackshipment" element={<TrackShipment />} />
                    <Route path="/shipmenthistory" element={<ShipmentHistory />} />
                    <Route path="/" element={<NewQoutes />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routing;