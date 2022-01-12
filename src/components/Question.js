import React, {useEffect} from 'react';
import data from "../data.json";
let selectedAnswer

const Question = ({question, setResult, result, error, setError, setTime, timer, number, step, setStep, setNumber}) => {

    function handleSelect(e){
        setError('false');
        selectedAnswer = e.target.value
    }

    function nextQuestion(e){
        if(document.querySelector('input[type=radio]:checked') === null){
            setError(true);
        } else if(data.data.length - 1 === number){
            setStep(3);
            setResult([...result, {"question": question.question, 'rightAnswer': question.answer, 'selectedAnswer': selectedAnswer }]);
            setNumber(0);
            // clearInterval(timer);
        } else {
            setResult([...result, {"question": question.question, 'rightAnswer': question.answer, 'selectedAnswer': selectedAnswer }]);
            setNumber(number + 1)
            document.querySelector('input[type=radio]:checked').checked = false;
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(t => t + 1);
        }, 1000);
        return () => clearInterval(timer);
    },[]);

    return (
        <div className='card'>
            <div className="card-content">
                <h1 className='mb-3 title is-4'>{question.question}</h1>
                <div className="control">
                    {question.choices.map((c,i) =>
                         <label key={i} className="radio mb-1" onChange={handleSelect}>
                            <input value={c} type="radio" name="answer"/>
                                {c}
                         </label>
                    )}
                </div>
                { error === true ? <div className='error'>Выберите вариант!</div> : <div>Вопрос {number+1} из {data.data.length}</div>}
                {/*<button className="button is-success m-1" onClick={prevQuestion}>Предыдущий вопрос</button>*/}
                <button className="button is-success m-1" onClick={nextQuestion}>Следующий вопрос</button>
            </div>
        </div>
    );
};

export default Question;