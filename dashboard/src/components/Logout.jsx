import axios from "axios";

const Logout = () => {

  const handleLogout = async () => {
    await axios.post(
      "https://tradesphere-09j7.onrender.com/logout",
      {},
      { withCredentials: true }
    );

    window.location.href =
      "https://tradesphere-frontend-prrn.onrender.com";
  };

  return (
    <button onClick={handleLogout} className="logout-btn btn-primary">
      Logout
    </button>
  );
};

export default Logout;
