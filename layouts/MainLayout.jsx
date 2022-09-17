import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout(props) {
    return (
        <div class="bg-white rounded-start rounded-end m-5 p-5">
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}
