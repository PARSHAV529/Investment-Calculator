import Result from "./components/Result"
import UserInput from "./components/UserInput"
import { useState } from "react"


function App() {

  const [User_Input, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10

})
const inputIsValid = User_Input.duration >= 1 && User_Input.initialInvestment >=1 && User_Input.annualInvestment >=1 && User_Input.expectedReturn >=1 ;
//let checkinvalid=[ User_Input.initialInvestment,User_Input.annualInvestment,User_Input.expectedReturn,User_Input.duration]
let checkinvalid="";

for (const key in User_Input) {
  if (User_Input[key]<=0) {
    
      checkinvalid=checkinvalid+" & "+ key;
     
      
      
    
  }
}
let newcheckinvalid=checkinvalid.replace("&","")


function handelOnChnaged(identifier, newValue) {
    setUserInput((prevUserInput)=>{
      return{
        ...prevUserInput,
        [identifier]: +newValue
}
        
    })

}
  return (
    <>
    <UserInput UserInput={User_Input} onChange={handelOnChnaged} />
    {!inputIsValid && (
        <p className="center">Please enter a valid {newcheckinvalid}</p>
      )}
      {inputIsValid && <Result input={User_Input} />}
    </>
  )
}

export default App
