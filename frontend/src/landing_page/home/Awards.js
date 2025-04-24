import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className="row">
                <div className='col-6 p-5'>
                    <img src="media/images/largestBroker.svg"/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest Stock Broker In India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail oreder volumes in India daily by trading and investing in:</p>
                    <div className="row">
                    <div className="col-6">
                    <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency Derivates</p>
                        </li>
                        
                    </ul>
                    
                    </div>
                    <div className="col-6">
                    <ul>
                        <li>
                            <p>Stocks and IPOS</p>
                        </li>
                        <li>
                            <p>Direct Mutual Funds</p>
                        </li>
                        <li>
                            <p>Bonds and Government Securities</p>
                        </li>
                        
                    </ul>
                    </div>
                    </div>
                 <img src="media\images\pressLogos.png" style={{width:"80%"}} />
                </div>

            </div>

        </div>
     );
}

export default Awards;