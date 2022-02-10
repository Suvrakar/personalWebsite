import React from 'react';
import "./Work.css"

export default function Work() {
    return <div className='container mt-5'>
        <h1 >Work Expericences</h1>
        <p>I have been working as a Software Engineer in Hivecore Limited almost for a year. I am working as a full stack developper. My Stack is React JS in front end and Node JS, Express JS, MySQL and MongoDB in Database and backend.</p>
        <div class="history-tl-container">
            <ul class="tl">
                <li class="tl-item" ng-repeat="item in retailer_history">
                    {/* <div class="timestamp">
                        October, 2020 -Present
                    </div> */}
                    <div class="item-title">Software Engineer</div>
                    <div class="item-detail">Hivecore Limited (October, 2020 -Present)</div>
                </li>
                <li class="tl-item" ng-repeat="item in retailer_history">
                    {/* <div class="timestamp">
                        April, 2020 - October, 2020
                    </div> */}
                    <div class="item-title">Trainee Software Engineer</div>
                    <div class="item-detail">Hivecore Limited (April, 2020 - October, 2020) </div>
                </li>
                <li class="tl-item" ng-repeat="item in retailer_history">
                    {/* <div class="timestamp">
                        2019
                    </div> */}
                    <div class="item-title -5">Director - BIZ BEE IT</div>
                    <div class="item-detail">Brac University Business CLub (2019)</div>
                </li>

            </ul>

        </div>
    </div>;
}
