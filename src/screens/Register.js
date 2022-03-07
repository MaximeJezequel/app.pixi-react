import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import "../App.css"
import "../styles/Login.css"

const Login = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleClickRegister = () => {
		const registerData = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
		}
		console.log(registerData)

		axios.post(`${process.env.REACT_APP_URL_API}/register`, registerData)
	}

	return (
		<div className="App">
			<div className="bodyContainer">
				<h2>REGISTER</h2>
				<div className="login flex col">
					<input
						type="text"
						placeholder="first name"
						onChange={(e) => setFirstName(e.target.value)}
					/>

					<input
						type="text"
						placeholder="last name"
						onChange={(e) => setLastName(e.target.value)}
					/>

					<input
						type="email"
						placeholder="email"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						type="password"
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div className="button flex col aic jcc">
						<button
							className="registerBtn"
							onClick={() => handleClickRegister()}
						>
							Register
						</button>
						<div>
							Already have an account? <Link to="/login">Log in!</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
