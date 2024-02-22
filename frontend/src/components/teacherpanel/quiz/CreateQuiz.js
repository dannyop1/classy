import React, { useState, useEffect } from 'react'
import './CreateQuiz.css'
import AddQuestionModal from './AddQuestionModal'
import QuestionsTable from './QuestionsTable'
import { Switch } from '@material-ui/core'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const CreateQuiz = ({
	user,
	quizTitle,
	questions,

	isOpen,
	editQuizHandle
}) => {
	const [questionArray, setQuestionArray] = useState([])
	const [title, setTitle] = useState('')
	const [access, setAccesss] = useState(true)
// 	const [loading, setLoading] = useState('stop')
// 	const [quizCode, setQuizCode] = useState(null)
const navigate = useNavigate();

	const addQuestionHandle = (title, optionType, options) => {
		const arr = [...questionArray]
		arr.push({ title, optionType, options })
		setQuestionArray(arr)
	}
	useEffect(() => {
		if (quizTitle) {
			setTitle(quizTitle)
			setQuestionArray(questions)
			setAccesss(isOpen)
		}
	}, [quizTitle, questions, isOpen])

	return (
		<div id='main-body'>
			<div id='create-quiz-body'>
				<div className='quiz-header'>
					<input
						type='text'
						className='input-text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						id='quiz-title'
						placeholder='Untitled Quiz'
						autoFocus
						autoComplete='off'
					/>
				</div>
				<div className='controls'>
					<AddQuestionModal addQuestionHandle={addQuestionHandle} />
					<div className='switch'>
						<Switch
							checked={access}
							onChange={(e) => setAccesss(e.target.checked)}
							color='secondary'
							name='access'
						/>
						<h4>{access ? 'Public' : 'Private'}</h4>
					</div>
				</div>
			</div>
			<div className='questionTable'>
				<QuestionsTable
					questionArray={questionArray}
					setQuestionArray={setQuestionArray}
				/>
			</div>
            <div style={{margin:' 0 auto'}}>
				{quizTitle && (
					<button className='add-btn' onClick={() => editQuizHandle()}>
						Close
					</button>
				)}
				<button
					// disabled={!(title.length && questionArray.length)}
					className='button wd-200'
					onClick={() => {
						navigate('/teacher/quiz/view');
					}}
				>
					{quizTitle ? 'Save ' : 'Create '}
					Quiz
				</button>
			</div>
		</div>
	)
}

export default CreateQuiz
