import React from "react";

import { NavBar } from "../components/NavBar";

import Footer from "./Footer";
import User from "./User";

export function Home() {
    return (
        <>
            <NavBar />
            <User />
            <Footer />
        </>
    );
}
