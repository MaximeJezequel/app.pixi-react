import React from "react"
import { useState, useEffect } from "react"
import { DropzoneArea } from "material-ui-dropzone"
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles"

import ButtonBarSingle from "../components/ButtonBarSingle"

import "../App.css"

const Upload = () => {
	const [dropFiles, setDropFiles] = useState([])

	const handleChange = (files) => {
		setDropFiles(files)
	}

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	useEffect(() => {
		function reportWindowSize() {
			setWindowWidth(window.innerWidth)
			// console.log(window.innerWidth)
		}
		// Trigger this function on resize
		window.addEventListener("resize", reportWindowSize)
		//  Cleanup for componentWillUnmount
		return () => window.removeEventListener("resize", reportWindowSize)
	}, [])

	let picWidth =
		windowWidth < 1024 ? windowWidth / 2 - 32 : windowWidth / 5 - 28

	const theme = createTheme({
		overrides: {
			MuiDropzoneArea: {
				root: {
					backgroundColor: "var(--dark-blue-color)",
					borderColor: "var(--dark-grey-color)",
					color: "white",
					marginBottom: "12px",
				},
				icon: {
					color: "var(--red-color)",
				},
			},
			MuiDropzonePreviewList: {
				root: {
					width: "100%",
					padding: "0px",
					margin: "0px",
					marginTop: "10px",
				},
				imageContainer: {
					flexBasis: `${picWidth}px`,
					maxWidth: "50%",
					margin: "6px",
					padding: "0px !important",
					marginBottom: "12px",
				},
				image: {
					minHeight: "100px",
					minWidth: `100px`,
					objectFit: "contain",
					// overflow: "hidden",
				},
			},
			MuiTypography: {
				root: {
					width: "100%",
				},
				body1: {
					minWidth: "100px",
					overflowWrap: "anywhere",
				},
			},
		},
	})

	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<div className="buttonBarSingle flex">
					<ButtonBarSingle
						btnIcon="Send"
						btnText="Send"
						handleClick={() => console.log(JSON.stringify(dropFiles))}
					/>
				</div>

				<div className="uploadContainer">
					<div className="uploadtitle flex aic">
						<div className="avatar flex jcc aic"></div>
						<h2 className="eventTitle">PRINTEMPS DES FAMEUSES</h2>
					</div>

					<div className="dropZone">
						<MuiThemeProvider theme={theme}>
							<DropzoneArea
								acceptedFiles={[
									"image/jpeg",
									"image/jpg",
									"image/png",
									"image/bmp",
								]}
								onChange={(e) => handleChange(e)}
								showFileNamesInPreview={true}
								showPreviewsInDropzone={false}
								showPreviews={true}
								previewText={`${dropFiles.length} photo(s) ready to go`}
								dropzoneText={`Drag & drop files or click here to upload`}
								showAlerts={false}
								maxFileSize={5000000}
								filesLimit={20}
							/>
						</MuiThemeProvider>
						{/* <p>{dropFiles.length} photo(s) ready to go</p> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Upload
