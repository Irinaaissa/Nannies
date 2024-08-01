import React from "react";


import AppContainer from "../components/AppContainer/AppContainer"
import css from "./App.module.css"
import AppBar from "../components/AppBar/AppBar";
import AppRouter from "./AppRouter";

function App() {
  

  return (
    <>
    <AppContainer>
   <AppBar/>
    <AppRouter />
    </AppContainer>
    </>
  )
}

export default App
