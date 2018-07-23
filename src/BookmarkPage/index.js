import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BookMarkPage extends Component {

    render() {
      return(
        <div className='Bookmark'>
          <h1 className='app-title'>Bookmark</h1>
           <div className="articles">
             
           </div> 
         </div> 
       );
     }
   }
   
   export default BookMarkPage;