import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Name from "./component/Name";

function App() {
  const [name, setName] = React.useState(localStorage.getItem("name"));

  function onNameProvided(providedName) {
    localStorage.setItem("name", providedName);
    setName(providedName);
  }

  console.log(name);
  return (
    <div className="App">
      {!name ? (
        <Name onNameProvided={onNameProvided}></Name>
      ) : (
        <h1>hi {name}</h1>
      )}
    </div>
  );
}

export default App;

// https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58
// https://api.met.no/images/weathericons/svg/heavyrain.svg

// isim component? bunun state'i olsun
// isim formu
// if'le router
// havadurumu fetch
