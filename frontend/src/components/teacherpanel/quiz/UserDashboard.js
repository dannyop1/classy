import React, { useState, useEffect } from 'react'
import './UserDashBoard.css'
import CreatedQuizCard from './CreatedQuizCard'
// import JoinedQuizCard from '../components/JoinedQuizCard'
// import LoadingScreen from './LoadingScreen'
import CreateQuiz from './CreateQuiz'
import { getQuizzes } from "./axios";

const UserDashboard = ({ user }) => {


	const [createdQuizzes, setCreatedQuizzes] = useState([])
	const [attemptedQuizzes, setAttemptedQuizzes] = useState([])
	const [loading, setLoading] = useState(true)
	const [editQuiz, setEditQuiz] = useState([])
	console.log("createdQuizzes",createdQuizzes)

	useEffect(() => {
		getQuizzes().then((json) => {
			setCreatedQuizzes(json);
		});
	  }, []);
	
	const editQuizHandle = async (title, questions, isOpen) => {
		if (!title) setEditQuiz([])
		else {
			setLoading(true)
			console.dir({
				quizId: createdQuizzes[editQuiz]._id,
				uid: user.uid,
				title,
				questions,
				isOpen,
			})
			const results = await fetch('/API/quizzes/edit', {
				method: 'POST',
				body: JSON.stringify({
					quizId: createdQuizzes[editQuiz]._id,
					uid: user.uid,
					title,
					questions,
					isOpen,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const submitData = await results.json()
			console.dir(submitData)
			const temp = [...createdQuizzes]
			temp[editQuiz[0]].title = title
			temp[editQuiz[0]].questions = questions
			temp[editQuiz[0]].isOpen = isOpen
			setCreatedQuizzes(temp)
			setEditQuiz([])
			setLoading(false)
		}
	}

	// if (loading) return <LoadingScreen />

	if (editQuiz.length)
		return (
			<CreateQuiz
				user={user}
				quizTitle={createdQuizzes[editQuiz].title}
				questions={createdQuizzes[editQuiz].questions}
				isOpen={createdQuizzes[editQuiz].isOpen}
				editQuizHandle={editQuizHandle}
			/>
		)
	return (
		<div className='dash-body'>
			<div className='quizzes'>
				<div className='heading'>
					<div className='line-left' />
					<h2>Created </h2>
					<div className='line' />
				</div>
				<div className='card-holder'>
					{createdQuizzes.map((quiz) => (
						<CreatedQuizCard
							key={quiz.code}
							index={quiz.code}
							setEditQuiz={setEditQuiz}
							title={quiz.title}
							code={quiz.code}
							questionsNum={quiz.questionsNum}
							responses={quiz.responses}
							questions={quiz.questions}
							isOpen={quiz.isOpen}
							img={quiz.img}
						/>
						// <div> {quiz.questions}</div>
					))}
				</div>
			</div>
			{/* <div className='quizzes'>
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
			</div> */}
		</div>
	)
}

export default UserDashboard
