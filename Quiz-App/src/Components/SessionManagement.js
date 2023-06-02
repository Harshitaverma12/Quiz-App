import React, { useState, useEffect } from "react";

const SessionManagement = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    // Assuming login is successful
    const token = "example_token"; // Replace with your token

    // Store token in localStorage
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    // Assuming logout is successful

    // Remove token from localStorage
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Check token in localStorage on component mount
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default SessionManagement;
