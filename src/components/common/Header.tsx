import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLists } from "../../assets/data";
interface NavLinkProps {
  path:string;
  url:string;
  onClick ?: () => void;
}
interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: () => void; 
}

const NavLinks: React.FC<NavLinkProps> = ({path, url, onClick}) =>{
  return <NavLink 
    to={path}
    className={({ isActive }) =>
    `text-gray-800 hover:text-primary transition-colors duration-300 ${
      isActive ? "text-primary" : ""
    }`}
    onClick={onClick}>
    {url}
  </NavLink>
}
const Logo = () =>{
  return(
    <NavLink to="/" className='logo'>
      <img src='../images/common/logo.png' alt='logo' />
    </NavLink>
  )
}
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onLinkClick }) =>{
  return(
   <nav className={`fixed top-0 left-0 w-full capitalize h-screen bg-white flex flex-col items-center justify-center gap-8 text-lg z-[51] transition-transform duration-300 transform 
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
    {
      NavLists.map((list) =>(
        <NavLinks key={list.id} path={list.path} url={list.url} onClick={onLinkClick}/>
      )) 
    }
   </nav>
  )
}


const AccountButtons = () => {
  return(
    <div className='flex flex-col md:flex-row md:space-x-4 items-center gap-4'>
      <button className='relative'>
        <GiShoppingCart size={25} />
        <span className='w-4 h-4 bg-primary absolute -top-1 -right-2 text-white flex justify-center items-center rounded-full text-xs'>0</span>
      </button>
      <IoIosSearch size={25} />
      <button className='primary-btn'>Book Now</button>
      
    </div>
  )
}
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=>{
    const handlescroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop >50);
    };

    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  })

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
  }
  const closeMenu = () => {
    setMenuOpen(false); // 메뉴 닫기
  };
  return (
    
    <header className={`fixed top-0 w-full bg-white z-50 transition-all ease-in-out duration-300 ${isScrolled ? "shadow-s1 animation-bounceFromTop py-4" : "py-4"}`}>
      <div className='w-4/5 mx-auto flex justify-between items-center'>
        <Logo />
        <button className='block lg:hidden text-2xl focus:outline-none relative z-[8000] bg-primary text-white p-2 rounded-md' onClick={toggleMenu}>
          {menuOpen ? <IoMdClose size={25} /> : <RiMenu4Fill size={25} />}
        </button>
        <nav className='hidden lg:flex items-center space-x-6 capitalize'>
          {
            NavLists.map((list) =>(
              <NavLinks key={list.id} path={list.path} url={list.url} />
            )) 
          }
        </nav>
        <div className='hidden lg:flex items-center space-x-4'>
          <AccountButtons />
        </div>
        <MobileMenu isOpen ={menuOpen} onLinkClick={closeMenu} />
      </div>
    </header>
  )
}
