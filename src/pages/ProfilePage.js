import React from "react";
import { useParams } from "react-router-dom";
export default function ProfilePage() {
  const params = useParams();
  
  return (
    <div>
      <h1>Profile page: {params.username}</h1>
    </div>
  );
}
