import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/HomePage.css'
import Logo from './Logo'

const HomePage = () => {
	const navigate = useNavigate()

	return (
		<>
			<div className='containerHome'>
				<Logo />
				<div className='block_right'>
					<h2>Take your finances to the next levels!</h2>
					<h4>Don't hesite, money matters.</h4>
					<button onClick={() => navigate('/registration')}>START</button>
				</div>
			</div>
		</>
	)
}

export default HomePage
