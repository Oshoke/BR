import React from "react";
import { useParams } from "react-router-dom";

const Info = ({ userInfo }) => {
  const { id } = useParams();

  return (
    <div className="info-card">
      <h1>User ID: {id}</h1>
      <ul>-name: {userInfo.name}</ul>
      <ul>-username: {userInfo.username}</ul>
      <ul>-email: {userInfo.email}</ul>
      <ul>-phone: {userInfo.phone}</ul>
      <ul>-company: {userInfo.company}</ul>
      <ul>-website: {userInfo.website}</ul>
      <ul>
        -address:
        <li>street: {userInfo.address}</li>
        <li>suite: {userInfo.address}</li>
        <li>city: {userInfo.address}</li>
        <li>zipcode: {userInfo.address}</li>
      </ul>
    </div>
  );
};

export default Info;
