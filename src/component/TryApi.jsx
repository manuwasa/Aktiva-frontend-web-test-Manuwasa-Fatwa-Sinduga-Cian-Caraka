import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenders } from "../store/slice/tender";
import { fetchHotels } from "../store/slice/hotel";

function TryApi() {
   const dispatch = useDispatch();
   const state = useSelector((state) => state);

   const displayResult = (param) => {
      dispatch(param);
      console.log("State", state);
   };

   return (
      <div style={{ marginBottom: 20 }}>
         <h1>Try API Here</h1>
         <p>Open console first</p>
         <button onClick={(e) => displayResult(fetchTenders())}>FetchTenders</button>
         <button onClick={(e) => displayResult(fetchHotels())}>FetchHotels</button>
      </div>
   );
}

export default TryApi;
