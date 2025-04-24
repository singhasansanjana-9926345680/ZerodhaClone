import React from 'react';
function LeftSection ({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container mt-5 '>
            <div className='row' >
                <div className='col-6 mt-5' >
                    <img src={imageURL}/>
                </div>
               
                <div className='col-6 p-5 mt-4' >
                    <h1>{productName}</h1>
                    <p className='mt-3'>{productDescription}</p>
                    <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
                    <a className='ms-3' href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
                    
                    </div>
                    <div className='mt-4'>
                    <a href={googlePlay}>
                        <img src="media/images/googlePlayBadge.svg"/></a>
                    <a className='ms-3'href={appStore} >
                        <img src="media/images/appstoreBadge.svg"/></a>
                    </div>    
                </div>
            </div>
        </div>
     );
}

export default LeftSection ;