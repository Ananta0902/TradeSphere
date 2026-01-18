import React from 'react';
import WatchList from './WatchList';
import { Routes, Route } from 'react-router-dom';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './App';
import { GeneralContextProvider } from './GeneralContext';
// import Login from '../pages/Login.jsx';
// import Signup from '../pages/Signup.jsx';

function Dashboard() {
    return ( 
        <GeneralContextProvider>
            <div className='dashboard-container'>
                <WatchList />
                <div className='content'>
                    <Routes>
                        <Route path='' element={<Summary />} />
                        <Route path='orders' element={<Orders />} />
                        <Route path='holdings' element={<Holdings />} />
                        <Route path='positions' element={<Positions />} />
                        <Route path='funds' element={<Funds />} />
                        <Route path='apps' element={<Apps />} />
                         {/* <Route path="/" element={<Home />} /> */}
                        {/* <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} /> */}
                    </Routes>
                </div>
            </div>
        </GeneralContextProvider>
     );
}

export default Dashboard;
