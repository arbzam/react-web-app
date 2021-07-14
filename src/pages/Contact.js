import React from 'react';
import Heading from '../components/Heading/Heading';
import Form from '../components/Form/Form';
import FooterDetail from '../components/FooterDetail/FooterDetail';
const Contact = () => {
    document.title ="Startup - Contact";
    return (
        <>
          <section className="contact-section">
              <div className="contact-head-con about-us-page-head">
                <Heading smallHead="startup" boldHead="contacts"/>
              </div>
              <div className="container my-5">
                  <div className="row">
                      <div className="col-12 col-md-8">
                      <form className="row" action="#" method="post">
                      <Form />
                  </form>
                      </div>
                      <div className="col-12 col-md-4">
                          <div className="ml-md-4 responsive-margin">
                          <FooterDetail />
                          </div>
                      </div> 
                  </div>
               
              </div>
          </section>
        </>
    )
}

export default Contact;
