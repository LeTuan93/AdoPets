import Header from "~/Layout/components/Header";
import Footer from "~/Layout/components/Footer";
import statusLogin from "~/components/FormLogin/statusLogin";
import { useState } from "react";

function DefaultLayout({children , onStatusChange }) {
    return (
        <div>
            <Header onStatusChange={onStatusChange}/>
            <div className="container">
                <div className="content">
                   {children}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;
