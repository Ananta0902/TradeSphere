import React, { useContext } from 'react';
import TopBar from './TopBar';
import Dashboard from './Dashboard';
import GeneralContext from './GeneralContext';

function Home() {

  const { user } = useContext(GeneralContext);

  return (
    <div>
      <TopBar />

      <h3 style={{ marginLeft: "20px" }}>
        Hi {user?.name || "User"} 👋
      </h3>

      <Dashboard />
    </div>
  );
}

export default Home;
