import React from 'react';
import "./Work.css"

export default function Work() {
    return <div className='container mt-5'>
        <h1 >Work Expericences</h1>
        <div class="history-tl-container d-flex justify-content-center ">
            <ul class="tl">
                <li class="tl-item" ng-repeat="item in retailer_history">
                    {/* <div class="timestamp">
                        October, 2020 -Present
                    </div> */}
                    <div class="item-title">Software Engineer</div>
                    <div class="item-detail">Brain Station 23 PLC (May, 2024 - Present)</div>
                </li>
                <li class="tl-item" ng-repeat="item in retailer_history">
                    {/* <div class="timestamp">
                        October, 2020 -Present
                    </div> */}
                    <div class="item-title">Software Engineer</div>
                    <div class="item-detail">Reddot Digital Limited (Robi Axiata Subsidiary) (April, 2022 - May, 2024)</div>
                </li>
                <li class="tl-item" ng-repeat="item in retailer_history">
                    {/* <div class="timestamp">
                        October, 2020 -Present
                    </div> */}
                    <div class="item-title">Software Engineer</div>
                    <div class="item-detail">Hivecore Limited (October, 2020 - March, 2022)</div>
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
                    <div class="item-detail">Brac University Business Club (2019)</div>
                </li>

            </ul>

        </div>
    </div>;
}
