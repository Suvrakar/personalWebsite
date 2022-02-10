import React from 'react';
import "./Education.css"

export default function Education() {
    return <div className='container'>
        <h1 >Educations</h1>
        <p>Lorem Ipsum isdfsfsd sd fdsd ffgfg simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <section class="ps-timeline-sec">
            <div class="container">
                <ol class="ps-timeline">
                    <li>
                        <div class="img-handler-top">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/BCIC_logo.jpg" style={{width:"100px"}} alt="" />
                        </div>
                        <div class="ps-bot">
                            <p>SSC, BCIC College,(2003-2012) </p>
                        </div>
                        <span class="ps-sp-top">01</span>
                    </li>
                    <li>
                        <div class="img-handler-bot">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Shaheen_College_Logo_Dhaka.png/220px-Shaheen_College_Logo_Dhaka.png" style={{width:"100px"}} alt="" />
                        </div>
                        <div class="ps-top">
                            <p>HSC, BAF Shaheen College, Tejgaon (2013-2015)</p>
                        </div>
                        <span class="ps-sp-bot">02</span>
                    </li>
                    <li>
                        <div class="img-handler-top">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOanBFgJ21YUWeZ4v4TddWnXDm6oQ4kalfA&usqp=CAU" style={{width:"100px"}} alt="" />
                        </div>
                        <div class="ps-bot">
                            <p>BSc in CSE, Brac University (2016-2020)</p>
                        </div>
                        <span class="ps-sp-top">03</span>
                    </li>
                    <li>
                        <div class="img-handler-bot">
                            <img src="http://taimullah.buet.ac.bd/buet_logo.png" style={{width:"100px"}} alt="" />
                        </div>
                        <div class="ps-top">
                            <p>MSc in IAT, BUET   (2020-Present) </p>
                        </div>
                        <span class="ps-sp-bot">04</span>
                    </li>
                </ol>
            </div>
        </section>
    </div>;

}
