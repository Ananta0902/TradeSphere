import React, { Component } from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row m-3 p-5'>
                <div className='col-4 text-center '>
                    <img src='media/Nikhil.jpg' style={{borderRadius:"50%",width:"50%",marginBottom:"10px"}}/>
                   <h5>Nikhil Kamath</h5>
                   <h6 className='text-muted'>Co-founder & CFO</h6>
                </div>
                <div className='col-4 text-center'>
                     <img src='media/Kailash.jpg' style={{borderRadius:"50%",width:"50%",marginBottom:"10px"}}/>
                <h5>Dr. Kailash Nadh</h5>
                   <h6 className='text-muted'>CTO</h6>
                </div>
                <div className='col-4 text-center'>
                    <img src='media/Venu.jpg' style={{borderRadius:"50%",width:"50%",marginBottom:"10px"}}/>
                  <h5>Venu Madhav</h5>
                   <h6 className='text-muted'>COO</h6>
                </div>
            </div>
             <div className='row m-3 p-5'>
                <div className='col-4 text-center '>
                    <img src='media/Hanan.jpg' style={{borderRadius:"50%",width:"50%",marginBottom:"10px"}}/>
                   <h5>Hanan Delvi</h5>
                   <h6 className='text-muted'>CCO</h6> 
                </div>
                <div className='col-4 text-center'>
                     <img src='media/Seema.jpg' style={{borderRadius:"50%",width:"50%",marginBottom:"10px"}}/>
               <h5>Seema Patil</h5>
                   <h6 className='text-muted'>Director</h6>  </div>
                <div className='col-4 text-center'>
                    <img src='media/Karthik.jpg' style={{borderRadius:"50%",width:"50%",marginBottom:"10px"}}/>
                <h5>Karthik Rangappa</h5>
                   <h6 className='text-muted'>Chief of Education</h6> 
                </div>
            </div>
             <div className='row m-3 p-3'>
                <div className='col-4 text-center'>
                     <img src='media/Austin.jpg' style={{borderRadius:"50%",width:"50%",marginBottom:"10px"}}/>
                <h5>Austin Prakesh</h5>
                <h6 className='text-muted' style={{marginBottom:"50px"}}>Director Strategy</h6> 
                </div>
                
            </div>
        </div>
      );
}

export default Team;