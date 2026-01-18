import { useEffect, useState } from "react";

const Home = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "http://localhost:3001/login";
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3001";
  };

  return (
    <div className="home_page">
      <h4>Welcome to Dashboard</h4>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Home;
