import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CategoriesPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const skip = parseInt(query.get("skip")) || 0;
  const limit = parseInt(query.get("limit")) || 50;
  const handleNext = () => {
    query.set("skip", skip + limit);
    //query.set("limit", 300);
    //navigate redirige a esa ruta en especifico
    //aqui coge lo que tenga eset, y los parametros que esten asignados y con query.toString los coloca en la url
    navigate("?" + query.toString());
  };

  return (
    <div>
      <h1>Categories</h1>
      <h1>Skip: {skip}</h1>
      <h1>Limit: {limit}</h1>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
