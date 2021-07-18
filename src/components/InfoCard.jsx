import React, { useState, useEffect } from "react";
import Api from "../api/integAPI";
import Info from "./Info";

const InfoCard = () => {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const results = await Api.get("/users");
      setUserInfo(results);
      console.log(results);
    };

    fetchData();
  }, []);

  const renderInfo = () => {
    return <Info userInfo={userInfo} />;
  };
  return <div>{renderInfo()}</div>;
};

export default InfoCard;
