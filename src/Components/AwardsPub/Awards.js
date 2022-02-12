import React from 'react';
import "./Awards.css"
import ShowMore from 'react-show-more-button';


export default function AwardsPub() {
    return <div className='container mt-5'>
        <h1 >Achivements, Honors and Publications</h1>

        <ShowMore backgroundColor="" maxHeight={100}>
            <div>
                <h5>Programing Contests</h5>
                <ul style={{ color: "white" }}>
                    <li>
                        Hackerrank</li>
                    <li>
                        Leetcode</li>
                    <li>
                        StopStalk</li>

                </ul>

                <h5>Journal and Conference Papers</h5>
                <ul style={{ color: "white" }}>
                    <li>
                        Real Time Performance Analysis on DDoS Attack Detection using Machine Learning (BSc- Thesis)</li>
                    <li>
                        IoT Based Automated Irrigation and Smart Agriculture Monitoring System (Published on IRJMETS) </li>
                    <li>
                        Share Market Prediction using Machine Learning</li>
                    <li>
                        Automatic Traffic Rules Obeying System </li>
                </ul>

                <h5>Volunteerig and Clubbing</h5>
                <ul style={{ color: "white" }}>
                    <li>
                        Vounteer - Bangladesh Thalassemia Foundations - (Blood Donation Campaign)</li>
                    <li>
                        Director of IT - BIZ BEE (BracU Business Club) </li>
                    <li>
                        Organizer - Berger AdWiz 2017 (Business Competation) </li>
                </ul>
            </div>
        </ShowMore>
    </div>;
}
