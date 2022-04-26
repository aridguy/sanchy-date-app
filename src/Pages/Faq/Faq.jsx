import React from "react";
import "./Faq.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Home/Footer";

const Faq = () => {
    return (
        <>
            <Header />

           <div className="main-faq-body">
           <div className="container ">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1 className="head-faq">FAQ</h1>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                {/* row one */}
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="faq-text-contents">
                            
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum quos,
                                harum suscipit laborum exercitationem optio quaerat officiis earum necessitatibus
                                praesentium quasi aut quas ea vel iste ducimus? Incidunt, deserunt.</p> <br />
                               
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum quos,
                                harum suscipit laborum exercitationem optio quaerat officiis earum necessitatibus
                                praesentium quasi aut quas ea vel iste ducimus? Incidunt, deserunt.</p> <br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum quos,
                                harum suscipit laborum exercitationem optio quaerat officiis earum necessitatibus
                                praesentium quasi aut quas ea vel iste ducimus? Incidunt, deserunt.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum quos,
                                harum suscipit laborum exercitationem optio quaerat officiis earum necessitatibus
                                praesentium quasi aut quas ea vel iste ducimus? Incidunt, deserunt.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum quos,
                                harum suscipit laborum exercitationem optio quaerat officiis earum necessitatibus
                                praesentium quasi aut quas ea vel iste ducimus? Incidunt, deserunt.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum quos,
                                harum suscipit laborum exercitationem optio quaerat officiis earum necessitatibus
                                praesentium quasi aut quas ea vel iste ducimus? Incidunt, deserunt.</p>
                                
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

           </div>
            <Footer />

        </>
    );
}
export default Faq