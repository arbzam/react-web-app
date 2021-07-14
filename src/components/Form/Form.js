import React from 'react';
import './Form.css';
const Form = () => {
    return (
        <>
           <div className="col-12 col-md-6 col-lg-4">
           <input type="text" className="input-text" placeholder="name" required/>
           </div>
           <div className="col-12 col-md-6 col-lg-4">
           <input type="text" className="input-text" placeholder="email" required/>
               </div>
               <div className="col-12 col-md-6 col-lg-4">
               <input type="text" className="input-text" placeholder="phone" required/>
               </div>
               <div className="col-12">
               <textarea className="input-text textarea-input" placeholder="message" required></textarea>
               </div>
               <div className="col-12">
                   <div className="form-btn-flex">
                       <input type="submit" value="send" className="form-submit"/>
                   </div>
               </div>
        </>
    )
}

export default Form;
