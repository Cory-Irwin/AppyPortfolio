import React from "react";
import Logo from "../assets/Full Light.png";
import Intra from "../../assets/Pages/landingPage/landingSection/Full Light.png"
import HomePage from "../landingpage/heroPage"
const navbar = () => {
  return (
    <header className="">
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between mx-auto max-w-screen-xl my-10 px-4">
      <div className="flex-1">
        <div className="text-lg font-bold"><div className='font-bold  text-4xl'>
 CI<span className='text-blue-300'>.</span>
</div></div>
      </div>
      <div className="flex-1 text-center space-x-12 text-3xl font-semibold  ">
        <a href="/" className="hover:underline hover:text-purple-500">Home</a>
        <a href="/aboutMePage" className="hover:underline hover:text-purple-500">About</a>
        <a href="/ProjectsPage" className="hover:underline hover:text-purple-500">Projects</a>

        <a href="/cvPage" className="hover:underline hover:text-purple-500">CV</a>
      </div>
      <div className="flex-1 text-right  text-3xl font-semibold ">
        <a href="/contactPage" className="hover:underline hover:text-purple-500">Contact Me</a>
      </div>
    </nav>
  </header>
  
  );
};

export default navbar;

{
  /* <header className="flex flex-row w-full p-8 justify-between items-center">
<img alt='company logo' src={FullLogo} className="h-10" />

<nav className="h-full flex flex-col justify-center items-center">
    <ul className="flex flex-row justify-center items-center gap-4">
        <NavLink to='/' className={state => `${state.isActive ? 'text-primary' : undefined}`}>Home</NavLink>
        <Link to='#'>About</Link>
        <Link to='#'>Service</Link>
        <Link to='#'>Blog</Link>
        <Link to='#'>Contact</Link>
    </ul>
</nav>

<Button varient='outline'>Get In Touch</Button>
</header> */
}
