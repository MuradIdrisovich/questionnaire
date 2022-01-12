import React from 'react';

const Modal = ({result, handleReset}) => {

    console.log(result)
    return (
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Ваши ответы</p>
                    <button className="delete" aria-label="close" onClick={handleReset}></button>
                </header>
                <ul className="modal-card-body">
                    {result.map((r,i) =>
                        <li key={i}>
                            <div className='mt-2'>{r.question}</div>
                            {/*<div>Ваш ответ: {r.selectedAnswer}</div>*/}
                            {r.selectedAnswer !== r.rightAnswer ?
                                <><div className='yourAnswer'>Ваш ответ: {r.selectedAnswer}</div>
                                <div className='rightAnswerBlue'>Верный ответ: {r.rightAnswer}</div></>
                                :
                                <div className='rightAnswerGreen'>Верный ответ: {r.rightAnswer}</div>
                            }

                        </li>
                    )}
                </ul>
            </div>
    );
};

export default Modal;