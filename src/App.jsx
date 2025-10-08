import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import TableResult from "./Components/TableResult"
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";
function App() {
  //State of Inputs as an object
  const [inputs, setInputs] = useState({
    initialInvestment: 15000,
    annualInvestment: 1300,
    expectedReturn: 5,
    duration: 10,

  });
  const validDuration = inputs.duration >= 1 && inputs.expectedReturn >= 1 && inputs.annualInvestment >= 1 &&
    inputs.initialInvestment >= 1;

  return (
    <>
      <Header />
      <UserInput inputs={inputs} onChange={setInputs} />
      {!validDuration && <p className="center">Please enter a valid number</p>}
      {validDuration && <TableResult inputs={inputs} />}
    </>
  )
}

export default App
