import './App.css';
import 'bulma/css/bulma.css'
import Start from "./components/Start";
import Question from "./components/Question";
import {useEffect, useState} from "react";
import data from './data.json'
import End from "./components/End";
import Modal from "./components/Modal";
import {shuffle} from "./utils";
// let timer

function App() {
    const [step, setStep] = useState(1);
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState([]);
    const [error, setError] = useState('false');
    const [time, setTime] = useState(0);

    // console.log(result);
    // console.log(data.data.length);
    // console.log(number);
    function handleReset(){
        setStep(1)
        setResult([]);
        setTime(0)
    }

    // let timer
    // console.log(timer)
    function handleStart(){
        data.data.forEach((q) => {
            return shuffle(q.choices),
                q.question,
                q.answer
        });
        setStep(2);
        setTime(0);
        // timer = setInterval(() => {
        //     setTime(newTime => newTime + 1);
        //     console.log(time);
        //     // if(step === 3){
        //     //     clearInterval(timer)
        //     // }
        // },1000)
    }


  return (
    <div className="App">
        {step === 1 && <Start
            handleStart={handleStart}
        />}
        {step === 2 && <Question
            question={data.data[number]}
            // nextQuestion={nextQuestion}
            // prevQuestion={prevQuestion}
            setResult={setResult}
            result={result}
            error={error}
            setError={setError}
            setTime={setTime}
            time={time}
            number={number}
            setNumber={setNumber}
            step={step}
            setStep={setStep}
            // timer={timer}
        />}
        {step === 3 && <End
            setStep={setStep}
            handleReset={handleReset}
            result={result}
            time={time}
            // timer={timer}
        />}
        {step === 4 && <Modal
            result={result}
            handleReset={handleReset}
        />}
    </div>
  );
}

export default App;
