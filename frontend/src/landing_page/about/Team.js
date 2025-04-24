import React from 'react';
function Team() {
    return ( 
        <div className="container">
        <div className="row p-3  border-top">
          <h1 className="text-center mt-3">
           People
          </h1>
        </div>
  
        <div className="row mt-5 p-2 text-muted" style={{lineHeight:"1.8",fontsize:"1.2em"}}>
          <div className="col-6  text-center">
           <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%",width:"40%"}}/>
           <h4 className='mt-5'>Nithin Kamath</h4>
           <h6>Founder , CEO</h6>
          </div>
          <div className="col-6 ">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>Connect on <a href=" " style={{textDecoration:"none"}}>Homepage / TradingQnA /  Twitter</a></p>
  

          </div>
        </div>
      </div>
     );
}

export default Team;