import React from 'react';

import Images2  from '../images/htmllogo.png';
import Images3  from '../images/csslogo.jpeg';
import Images4  from '../images/reactlogo.png';
import Images5 from '../images/jslogo.png';
function Logos() {
    return (
        <div>
            <div id="h4">
                <h4>Coding Journey</h4>
                
                <p>See more</p>
            </div>
            <div id="logos">
                
                
                <div className="logos">
                    <img src={Images2} alt="HTML" />
                    <h5 id="html"><a href="">HTML projects</a></h5>
                </div>
                <div className="logos">
                    <img src={Images3} alt="CSS" />
                    <h5 id="css"><a href="">CSS projects</a></h5>
                </div>
                <div className="logos">
                    <img src={Images5} alt="JavaScript" />
                    <h5 id="js"><a href="">Javascript projects</a></h5>
                </div>
                <div className="logos">
                    <img src={Images4} alt="React" />
                    <h5 id="react"><a href="">React projects</a></h5>
                </div>
                
                
            </div>
            <div className="picText">
                
            </div>
        </div>
    )
}
export default Logos