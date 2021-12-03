import React from "react"
import { useState } from "react"

import ButtonBarSingle from "../components/ButtonBarSingle"

import "../App.css"

const Upload = () => {
	const [displayMode, setDisplayMode] = useState([])
	const [picsToDownload, setPicsToDownload] = useState([])

	const handleChange = (e) => {
		setDisplayMode(e)
	}

	const imgList = [
		"landscape.jpg",
		"modele.jpg",
		"landscape1.jpg",
		"portrait1.jpg",
		"landscape2.jpg",
		"portrait2.jpg",
		"landscape3.jpg",
		"portrait3.jpg",
		"portrait4.jpg",
		"square1.jpg",
		"landscape4.jpg",
		"landscape5.jpg",
		"landscape6.jpg",
		"landscape7.jpg",
	]

	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<div className="buttonBarSingle flex">
					<ButtonBarSingle
						btnIcon="Download"
						btnText="Download"
						handleClick={() => console.log("Download clicked")}
					/>
				</div>

				<div className="uploadContainer">
					<div className="uploadtitle flex aic">
						<h2 className="eventTitle">PRINTEMPS DES FAMEUSES</h2>
					</div>

					<div className="gallery flex">
						{imgList.map((img, index) => (
							<div className="imgCardContainer">
								<img
									className="imgCard galleryMode"
									key={index}
									src={`tmp/${img}`}
									alt="gallery"
								/>
								<div id={`gallery${index}`} className="galleryRadio"></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Upload
