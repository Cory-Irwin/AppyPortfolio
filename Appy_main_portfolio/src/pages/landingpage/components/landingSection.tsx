import React from "react";
import Html from "../../../assets/Pages/landingPage/landingSection/html.svg";
import Css from "../../../assets/Pages/landingPage/landingSection/css.svg";
import Javascript from "../../../assets/Pages/landingPage/landingSection/js.svg";
import ReactIcon from "../../../assets/Pages/landingPage/landingSection/trsvy.svg";
import TailwindCSS from "../../../assets/Pages/landingPage/landingSection/tailwindcss.svg";
import Git from "../../../assets/Pages/landingPage/landingSection/git.svg";
import Github from "../../../assets/Pages/landingPage/landingSection/gitter.svg";
import DotNet from "../../../assets/Pages/landingPage/landingSection/dotnetter.svg";
import ReactNative from "../../../assets/Pages/landingPage/landingSection/native.svg";
import TypeScript from "../../../assets/Pages/landingPage/landingSection/typescript.svg";
import NodeJs from "../../../assets/Pages/landingPage/landingSection/nodjs.svg";
import NextJs from "../../../assets/Pages/landingPage/landingSection/nextjs.svg";
import PostGress from "../../../assets/Pages/landingPage/landingSection/postgres.svg";
import Cory from "../../../assets/Pages/landingPage/landingSection/coryIrwin.png";

const landingSection = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-10 px-4 ">
      <div className="flex justify-between">
 
      <div className="text-4xl font-bold w-150">
        <h1>G'Day!, My name is Cory Irwin and I'm a front-end web developer</h1>
        <h1>My Tech Stack</h1>
        <p>Technologies I work with and have experience with</p>
      </div>
      <div>
        <img src={Cory} alt=""  className="size-120  rounded-full"/>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <img src={Html} alt="" />
          <img src={Css} alt="" />
          <img src={Javascript} alt="" />
          <img src={ReactIcon} alt="" />
          <img src={TailwindCSS} alt="" />
          <img src={Git} alt="" />
        </div>
        <div className="flex">
          {/* <img src={Github} className="size-34"  alt="" /> */}
          <img src={DotNet} className="size-32.5 invert" alt="" />
          <img src={ReactNative} alt="" className="size-32.5" />
          <img src={NodeJs} alt="" className="size-32.5" />
          <img src={TypeScript} alt="" className="size-32.5" />
          <img src={NextJs} alt="" className="size-32.5 invert" />
          <img src={PostGress} alt="" className="size-32.5" />

        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>Projects</h1>
        <h1>Things I've built</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>Project contributions</h1>
        <h1>Projects I've contributed to</h1>
      </div>
      <footer>

      </footer>
    </div>
  );
};

export default landingSection;
