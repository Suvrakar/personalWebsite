import React from 'react'
import "./Hero.css"
import { Helmet } from "react-helmet";
import Button from '../Button/Button';
import "../Button/Button.css"

export default function Hero() {
    <Helmet>
        {/* <script src="https://some.host/api.js" type="text/javascript" /> */}
        <script src="https://unpkg.com/ityped@0.0.10"></script>
    </Helmet>
    return (
        <>
            <div className="wrapper">
                <div class="container text-center">
                    <h1 class="neon">Hi I am Abrar<br />
                        <h3>A Software Engineer From Bangladesh</h3></h1>
                    <div className='pt-5 mt-5 text-center'>
                        <Button></Button>
                        <div>
                <ul class="social-icons d-flex justify-content-center">
                    <li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-github" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                </ul>
            </div>
                    </div>

                </div>


            </div>
 

        </>

    )
}
