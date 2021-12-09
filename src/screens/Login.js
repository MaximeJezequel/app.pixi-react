import React from "react"
import { useState } from "react"
import axios from "axios"

import "../App.css"

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

		axios.post(`${process.env.REACT_API_BASE_URL}/register`, registerData)
		// .then((results) => setEventRows(results.data))
	}

	const handleClickLogin = () => {
		const loginData = {
			email: email,
			password: password,
		}
		axios.post(`https://ljahier.loca.lt/login`, loginData).then((results) => {
			localStorage.setItem("sessionToken", results.data.sessionToken)
		})
	}

	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<div className="login flex">
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
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button onClick={() => handleClickRegister()}>Register</button>
					<button onClick={() => handleClickLogin()}>Login</button>
				</div>
			</div>
		</div>
	)
}

export default Login
