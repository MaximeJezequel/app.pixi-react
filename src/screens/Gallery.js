import React from "react"
import { useState } from "react"
import * as Icon from "react-feather"

import ButtonBarSingle from "../components/ButtonBarSingle"

import "../App.css"
import "./Gallery.css"

const Upload = () => {
	const [displayMode, setDisplayMode] = useState("square")
	const [room, setRoom] = useState("0")
	const [picsToDownload, setPicsToDownload] = useState([])
	const [picsResolution, setPicsResolution] = useState("Original")

	const handleDisplayChange = (e) => {
		setDisplayMode(e)
		console.log("display", e)
	}
	const handleResolutionChange = (e) => {
		setPicsResolution(e)
		console.log("resolution", e)
	}
	const handleRoomChange = (e) => {
		setRoom(e)
		console.log("room", e)
	}

	const handlePicSelect = (e) => {
		// setDisplayMode(e)
		console.log("select", e)
	}

	const imgList = [
		// "landscape.jpg",
		{ name: "modele.jpg", room: "1" },
		{ name: "landscape1.jpg", room: "1" },
		{ name: "portrait1.jpg", room: "1" },
		{ name: "square1.jpg", room: "1" },
		{ name: "landscape2.jpg", room: "2" },
		{ name: "portrait2.jpg", room: "2" },
		{ name: "landscape3.jpg", room: "3" },
		{ name: "portrait3.jpg", room: "3" },
		// "portrait4.jpg",
		// "landscape4.jpg",
		// "landscape5.jpg",
		// "landscape6.jpg",
		// "landscape7.jpg",
	]

	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<div className="buttonBarSingle flex">
					<select
						className="resolutionSelect"
						value={picsResolution}
						onChange={(e) => handleResolutionChange(e.target.value)}
					>
						<option value="Original">Original picture</option>
						<option value="Story">Story 1080x1920</option>
						<option value="HD">HD 1080px</option>
					</select>
					<ButtonBarSingle
						btnIcon="Download"
						btnText="Download"
						handleClick={() => console.log("Download clicked")}
					/>
				</div>

				<div className="galleryContainer">
					<div className="galleryTitle flex">
						<div className="galleryOptions flex row aic">
							<div className="displayBtnBar flex aic jcsb">
								<Icon.Grid
									size={20}
									id="square"
									className={displayMode === "square" ? "chosen" : ""}
									onClick={() => handleDisplayChange("square")}
								/>
								<Icon.Square
									size={20}
									id="original"
									className={displayMode === "original" ? "chosen" : ""}
									onClick={() => handleDisplayChange("original")}
								/>
								<Icon.Play
									size={20}
									id="diaporama"
									className=""
									onClick={() => console.log("diaporama not ready")}
								/>
							</div>
							<div className="splitBar">|</div>
							<select
								className="roomSelect"
								value={room}
								onChange={(e) => handleRoomChange(e.target.value)}
							>
								<option value="0">All photos</option>
								<option value="1">Room 1</option>
								<option value="2">Room 2</option>
								<option value="3">Room 3</option>
							</select>
						</div>
						<h2 className="eventTitle">PRINTEMPS DES FAMEUSES</h2>
					</div>

					<div className="gallery flex">
						{imgList.map((img, index) => (
							<div
								className={
									room === img.room || room === "0"
										? "imgCardContainer"
										: "dispNone"
								}
							>
								<img
									className={`imgCard ${displayMode}Mode`}
									key={index}
									src={`tmp/${img.name}`}
									alt={img.name}
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
