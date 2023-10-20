import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import TestingPage from "../TestingPage";



function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TestingPage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routing;