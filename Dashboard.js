import React from "react";
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const responseData = location.state?.responseData;
  console.log({responseData});
  return (
    <div className="section1">
      {responseData && <div className="dashboard">Welcome {JSON.stringify(responseData.username)} your registration succesfull</div>}
      {responseData && <div className="dashboard"> {JSON.stringify(responseData.email)}</div>}
      {responseData && <div className="dashboard"> {JSON.stringify(responseData.password)}</div>}
      {responseData && <div className="dashboard"> {JSON.stringify(responseData.company)}</div>}
    </div>
  );
};

export default Dashboard;
