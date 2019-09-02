import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Button from "../components/button";
import Menu from "../components/menu";

const saibaMais = () => {
  alert("hi");
};

 let menuAberto = false;



const Home = () => (
  <div>
    <Head title="GuidaTech" />
    <Nav menuAberto={menuAberto}/>
    <Menu menuAberto={menuAberto}/>


    <main>
      <section>

      </section>
    </main>
  </div>
);

export default Home;
