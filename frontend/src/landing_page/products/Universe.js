import React from 'react';
function Universe() {
    return (
        <div className='container mt-5 '>
            <div className='row text-center p-4'>
              <h1>The Zerodha Universe</h1>
              <h6 className='mt-4'>Extend your trading and investment experience even further with our partner platforms</h6>
               
             
               <div className='col-4 p-3 mt-5'>
                <img src="media/images/smallcaseLogo.png" style={{height:"60px",width:"200px"}}/>
                <p className=' mt-4 text-small text-muted'>Thematic Investing Group</p>
               </div>
               <div className='col-4 p-3 mt-5'>
                <img src="media/images/sensibullLogo.svg" style={{height:"60px",width:"200px"}}/>
                <p className='mt-4 text-small text-muted'>Options Trading Platform</p>
               </div>
               <div className='col-4 p-3 mt-5'>
                <img src="media/images/tijori.svg" style={{height:"60px",width:"200px"}}/>
                <p className='mt-4 text-small text-muted'>Investment Research Platform </p>
               </div>
               <div className='col-4 p-3 mt-5'>
                <img src="media/images/streakLogo.png" style={{height:"60px",width:"200px"}}/>
                <p className='mt-4 text-small text-muted'>Algo and Strategy Platform  </p>
               </div>
               <div className='col-4 p-3 mt-5'>
                <img src="media/images/zerodhaFundhouse.png" style={{height:"60px",width:"200px"}}/>
                <p className='mt-4 text-small text-muted'>Our Assessment Management Venture</p>
               </div>
               <div className='col-4 p-3 mt-5'>
                <img src="media/images/dittoLogo.png" style={{height:"60px",width:"200px"}}/>
                <p className='mt-4 text-small text-muted'>Insurance </p>
               </div>
               <button className='p-2 btn btn-primary fs-5 mt-4' style={{width:"15%",margin:"0 auto"}}>SignUp for free</button>
             
               
                </div>   
                </div>
             
    );
}

export default Universe;