import React from 'react'
import "./Hero.css"
import { Helmet } from "react-helmet";
import Button from '../Button/Button';
import "../Button/Button.css"

export default function Hero() {
    return (
        <>
            <div className="container wrapper d-flex justify-content-center">


                <div className="text-center">
                    <h1 className="neon">Hi! I am Debashis Kar Suvra (শুভ্র)<br />
                        <h3>A passionate explorer</h3></h1>
                    <div className='pt-5 mt-5 text-center'>
                        <Button></Button>
                        <br/>
                        <div>
                        <br/>
                            <ul className="social-icons d-flex justify-content-center">
                                <li><a target="_blank" href="https://www.facebook.com/karsuvra/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://github.com/Suvrakar"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/__suvra_/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li>
                                    <a href="https://www.linkedin.com/in/suvra123/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li><a href=""><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>


            </div>


        </>

    )
}
