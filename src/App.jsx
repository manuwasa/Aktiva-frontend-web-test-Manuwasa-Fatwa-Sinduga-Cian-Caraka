import { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import TableList from "./component/TableList";
import Detail from "./component/Detail";
import TryApi from "./component/TryApi";

function App() {
   return (
      <>
         <Switch>
            <Route exact path="/">
               <TryApi />
               <TableList />
            </Route>
            <Route path="/detail/:id">
               <Detail />
            </Route>
         </Switch>
      </>
   );
}

export default App;
