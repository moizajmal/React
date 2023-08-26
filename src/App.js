import Header from "./Components/Header/Header";
import UserInput from "./Components/UserInput/UserInput";
import ResultsTable from "./Components/ResultTable/ResultsTable";
import { useState } from "react";
function App() {

  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);

  };

  const yearlyData = [];
  if(userInput)
  { 
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
}
  return (
    <div>
    <Header></Header>
    <UserInput onCalculate={calculateHandler}> </UserInput>
    {!userInput && <p style={{textAlign:'center'}}>No investment</p>}
    {userInput && <ResultsTable data={yearlyData} 
    initalInvestment={userInput['current-savings']}></ResultsTable>}
    </div>
  );
}

export default App;
