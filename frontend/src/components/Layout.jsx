import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { options } from "../consts";

const particlesInit = async (main) => { 
    console.log(main); 
    await loadFull(main); 
  }; 
  const particlesLoaded = (container) => { 
    console.log(container); 
  }; 

export default function Layout(props) {
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
}
