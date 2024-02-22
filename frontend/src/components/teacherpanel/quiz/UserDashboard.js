import React, { useState, useEffect } from 'react'
import './UserDashBoard.css'
import CreatedQuizCard from './CreatedQuizCard'
// import JoinedQuizCard from '../components/JoinedQuizCard'
// import LoadingScreen from './LoadingScreen'
import CreateQuiz from './CreateQuiz'

const UserDashboard = ({ user }) => {
	const [createdQuizzes, setCreatedQuizzes] = useState([{
		title:"MLN111",
		code:1,
		responses:3,
		questions:25,
		isOpen:true,
		img: "https://tulieuvankien.dangcongsan.vn/Uploads/2019/9/6/16/loi-thoi.jpg"
	},
	{
		title:"MMA301",
		code:2,
		responses:30,
		questions:45,
		isOpen:true,
		img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkpKI8_dTADSpTZaqLSkrfsQmuxsIo477sQ&usqp=CAU"
	},
	{
		title:"EXE202",
		code:3,
		responses:10,
		questions:20,
		isOpen:false,
		img:"https://suno.vn/blog/wp-content/uploads/2017/06/khoi-nghiep-0-dong.jpg"
	}])
	const [attemptedQuizzes, setAttemptedQuizzes] = useState([])
	const [loading, setLoading] = useState(true)
	const [editQuiz, setEditQuiz] = useState([])
	// Fetch Data from the API
	// useEffect(() => {
	// 	if (!user.uid) {
	// 		setLoading(false)
	// 		return
	// 	}
	// 	const fetchQuizData = async () => {
	// 		const results = await fetch(`/API/users/${user.uid}`)
	// 		const quizData = await results.json()
	// 		if (quizData.createdQuiz) setCreatedQuizzes(quizData.createdQuiz)
	// 		if (quizData.attemptedQuiz) setAttemptedQuizzes(quizData.attemptedQuiz)
	// 		setLoading(false)
	// 	}
	// 	if (user) fetchQuizData()
	// }, [user])

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
