import { useState } from "react";
import Header from "./components/Header";
import InvestmentResults from "./components/InvestmentResults";
import Input from "./components/UserInput";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  };

  return (
    <>
      <Header />
      <Input userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">No data to show (Duration is set to Zero)</p>}
      {inputIsValid && <InvestmentResults input={userInput}/>}
    </>
  )
}

export default App
