import React from "react";
import Logo from "../assets/Full Light.png";
const navbar = () => {
  return (
    <header>
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex-1">
        <div className="text-lg font-bold">MyLogo</div>
      </div>
      <div className="flex-1 text-center space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Services</a>
        <a href="/cvPage" className="hover:underline">CV</a>
      </div>
      <div className="flex-1 text-right">
        <a href="#" className="hover:underline">Contact Me</a>
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
