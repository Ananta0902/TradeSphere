import React from 'react';

function NotFound() {
    return ( 
    <div>
       <div className='container mt-5'>
        <div className='row text-center m-5 p-5'>
            <h1 style={{fontWeight:"400"}} className='mt-5'>404,Not Found</h1>
            <p className='mt-3'>Sorry,the page you are looking for does not exist.</p>
        </div>
       </div>
    </div>
    );
}

export default NotFound;