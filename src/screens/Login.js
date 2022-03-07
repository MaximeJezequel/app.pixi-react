import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import "../App.css"
import "../styles/Login.css"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleClickLogin = () => {
		const loginData = {
			email: email,
			password: password,
		}
		axios
			.post(`${process.env.REACT_APP_URL_API}/login`, loginData)
			.then((results) => {
				localStorage.setItem("sessionToken", results.data.sessionToken)
			})
	}

	return (
		<div className="App">
			<div className="bodyContainer">
				<h2>LOGIN</h2>
				<div className="login flex col">
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
					<div>Forgot password?</div>
					<div className="button flex col aic jcc">
						<button className="loginBtn" onClick={() => handleClickLogin()}>
							Login
						</button>
						<div>
							Not registered? <Link to="/register">Create an account!</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
