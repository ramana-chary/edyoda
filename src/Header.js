import React from 'react';
import "./App.css";
import logo from './images/LOGO.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-content'>
            <div className='header-left'>
              <div><img src={logo} alt='edyoda-logo' className='logo'/></div>
               <div>
                 <select className='courses'>
                    <option>Courses</option>
                    <option>Java</option>
                    <option>Python</option>
                    <option>C#</option>
                 </select>
               </div>
               <div>
                 <select className='courses programs'>
                    <option>Programs</option>
                    <option>Java</option>
                    <option>Python</option>
                    <option>C#</option>
                 </select>
               </div>
            </div>
            <div className='header-right'>
               <div>
                 <i className="fa-solid fa-magnifying-glass" ></i>
               </div>
               <div className='login'>
                   Log in
                </div>
                <div>
                  <button className='join-btn'>JOIN NOW</button>
                </div>
            </div>
        </div>
       
    </div>
  );
}

export default Header;
