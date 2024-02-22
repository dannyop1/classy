import React, { useState, useEffect } from 'react'
import './quizList.css'
import CreatedQuizCard from './CreatedQuizCard'
import JoinedQuizCard from './JoinedQuizCard'
import CreateQuiz from './CreateQuiz'

export default function quizList() {
    return (
        <div className='dash-body'>
            <div className='quizzes'>
                <div className='heading'>
                    <div className='line-left' />
                    <h2>Created </h2>
                    <div className='line' />
                </div>
                <div className='card-holder'>
                    {createdQuizzes.map((quiz, key) => (
                        <CreatedQuizCard
                            key={key}
                            index={key}
                            setEditQuiz={setEditQuiz}
                            title={quiz.title}
                            code={quiz._id}
                            responses={quiz.responses}
                            questions={quiz.questions.length}
                            isOpen={quiz.isOpen}
                        />
                    ))}
                </div>
            </div>
            <div className='quizzes'>
                <div className='heading'>
                    <div className='line-left' />
                    <h2>Attempted </h2>
                    <div className='line' />
                </div>
                <div className='card-holder'>
                    {attemptedQuizzes.map((quiz, key) => (
                        <JoinedQuizCard
                            key={key}
                            title={quiz.title}
                            score={quiz.responses[0].score}
                            questions={quiz.totalQuestions}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
