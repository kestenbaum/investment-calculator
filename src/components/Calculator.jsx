import {useState} from "react";

import Header from "./Header.jsx";
import Forms from "./Forms.jsx";
import Result from "./Result.jsx";

const Calculator = () => {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handleChange (inputIdentifier, newValue) {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: +newValue
            }
        })
    }

    const inValid = userInput.duration >= 1

    return (
        <>
            <Header/>
            <Forms input={userInput} onChange={handleChange}/>
            {!inValid && <span>Please write a value greater than 0</span>}
            {inValid &&  <Result result={userInput}/>}
        </>
    );
};

export default Calculator;