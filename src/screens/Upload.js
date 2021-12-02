import React from "react"
import { useState } from "react"
import { DropzoneArea } from "material-ui-dropzone"
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles"

import ButtonBarSingle from "../components/ButtonBarSingle"

import "../App.css"

const Upload = () => {
	const [dropFiles, setDropFiles] = useState([])

	const handleChange = (files) => {
		setDropFiles(files)
	}

	const theme = createTheme({
		overrides: {
			MuiDropzoneArea: {
				root: {
					backgroundColor: "var(--dark-blue-color)",
					borderColor: "var(--dark-grey-color)",
					color: "white",
					padding: "10px",
					marginBottom: "12px",
					// height: "200px",
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
				},
				imageContainer: {
					flexBasis: "180px",
					margin: "12px",
					padding: "12px !important",
				},
				image: {
					minHeight: "100px",
					minWidth: "100px",
					objectFit: "contain",
					overflow: "hidden",
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
			MuiGrid: {
				root: {
					width: "100%",
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
