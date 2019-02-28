import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
         <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2">
                <h5>Links</h5>
                <ul className="list-unstyled">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/qa">QA</Link></li>
                    <li><Link to="/explore">Explore</Link></li>

                </ul>
                </div> 
                <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/+"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/+"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/+"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/+"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
               </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                <p> Copyright 2019 Immeasurable</p>
                </div>

        </div>
        </div>
    );
}
export default Footer;