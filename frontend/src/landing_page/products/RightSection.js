import React, { Component } from 'react';

function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
           <div className='col-6 mt-5 p-5'>
                 <h1 className='mt-5'>{productName}</h1>
                 <p>{productDescription}</p>
                <a href={learnMore}  style={{textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right-long"></i> </a>
            </div>
             <div className='col-6 p-3'>
                  <img src={imageURL}/>
                </div>
</div>
        </div>
     );
}

export default RightSection;