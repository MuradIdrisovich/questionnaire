import React from 'react';

const Start = ({handleStart}) => {
    return (
        <div className='card'>
            <div className="card-content">
                <h1 className='mb-4 title is-4'>Пройди опрос на знание JavaScript и React!</h1>
                <h4 className='mb-2'>Удачи!</h4>
                <button className="button is-info" onClick={() => {handleStart()}}>Старт</button>
            </div>
        </div>
    );
};

export default Start;