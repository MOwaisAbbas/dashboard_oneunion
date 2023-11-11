import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../login/Login";
import AddressForm from "../forms/AddressForm";
import Chat from "../chat/Chat";
import Myqoutes from "../myqoutes/Myqoutes";
import NewQoutes from "../newqoutes/NewQoutes";
import TrackShipment from "../trackshipment/TrackShipment";
import ShipmentHistory from "../shipmenthistory/ShipmentHistory";
import Layout from "../layout/Layout";

function Routing() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,

            children: [
                {
                    path: "support&help",
                    element: <Chat />,
                },
                {
                    path: "myqoutes",
                    element: <Myqoutes />,
                },
                {
                    path: "bookshipment",
                    element: <AddressForm />,
                },
                {
                    path: "trackshipment",
                    element: <TrackShipment />,
                },
                {
                    path: "shipmenthistory",
                    element: <ShipmentHistory />,
                },
                {
                    path: "support&help",
                    element: <Chat />,
                },
                {
                    path: "",
                    element: <NewQoutes />,
                },

            ]
        },
        {
            path: "login",
            element: <Login />

        }

    ])
    return (
        <>

            <RouterProvider router={router} />
        </>
    )
}


export default Routing;