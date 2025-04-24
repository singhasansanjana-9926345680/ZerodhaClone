import React from 'react';
function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
      <div className="p-5 mt-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{color:"white"}}>Track Tickets</a>
      </div>
      <div className="row p-5 m-5">
        <div className="col-5">
          <h4>
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="" style={{marginLeft:"0"}}>Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 ">
          <h4 >Featured</h4>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className='mt-4'>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
     );
}

export default Hero;