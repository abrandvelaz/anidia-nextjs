'use client'
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "@/app/components/header";
import Footer from "@/app/components/footer";
import ViewProducts from "@/app/Views/Products/ViewProducts";


export default function Index() {
  return(
      <div>
        <Navbar></Navbar>
            <ViewProducts></ViewProducts>
        <Footer></Footer>
      </div>
  );
}
