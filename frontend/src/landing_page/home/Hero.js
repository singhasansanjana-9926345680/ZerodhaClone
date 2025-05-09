import React from 'react';
function Hero() {
    return ( 
        <div class="container p-5">
            <div class="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto"}}>SignUp Now</button>

            </div>

        </div>
     );
}

export default Hero;