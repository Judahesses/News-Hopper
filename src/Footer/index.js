import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
   render() {
    return (
      <div className='Footer'>
         <hr className="hr" />
         <p className="info">Created By <a href="https://www.linkedin.com/in/judahesses/" className="linkedin" target='_blank'>Judah Esses</a>, <a href="https://www.linkedin.com/in/alex-vargas1/" className="linkedin" target='_blank'>Alex Vargas</a>, & <a href="https://www.linkedin.com/in/thomas-culpepper-mckenna/" className="linkedin" target='_blank'>Thomas McKenna</a> At <a href="https://generalassemb.ly/education/web-development-immersive/new-york-city?o197=1" className="general-assembly" target='_blank'>General Assembly</a></p>
      </div>
    )
  }
}

export default Footer;
