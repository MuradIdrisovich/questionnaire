import React from 'react';

const End = ({setStep, handleReset, result, time, timer}) => {

    function getAmount(arr){
        let amount = 0;
        arr.forEach((el) => {
            if(el.rightAnswer === el.selectedAnswer){
                amount++;
            }
        })
        return amount
    }
    clearInterval(timer)
    return (
        <div className='card'>
            <div className="card-content">
                <h1 className='mb-4 title is-4'>Ваши результаты</h1>
                <div>{getAmount(result)} из {result.length}</div>
                <div>{Math.round(getAmount(result)/result.length * 100)}%</div>
                <div>Время прохождения {time} сек.</div>
                <button className="button is-primary m-1" onClick={handleReset}>Попытаться снова!</button>
                <button className="button m-1" onClick={() => setStep(4)}>Посмотреть ответы!</button>
            </div>
        </div>
    );
};

export default End;