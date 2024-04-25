// import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"
import Hero from "./Hero";
// import Footer from "./Footer"



export default function Layout (){
    return (
        <>
            <Header/>
            <Hero/>
            <main>
                <Outlet/>
            </main>
            {/* <Footer/> */}
        </>
    )
}