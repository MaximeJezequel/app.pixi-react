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
					color: "white",
					borderColor: "var(--dark-grey-color)",
					padding: "10px",
					minHeight: "360px",
				},
				icon: {
					color: "white",
				},
			},
			MuiDropzonePreviewList: {
				root: { marginLeft: "-10px" },
				imageContainer: {
					flexBasis: "calc(20% - 26px)",
					margin: "6px",
				},
				image: {
					// minWidth: "150px",
					// minHeight: "150px",
				},
			},
		},
	})

	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<ButtonBarSingle btnIcon="Send" btnText="Send" />
				<div className="uploadContainer">
					<div className="flex row aic">
						<div className="avatar flex jcc aic">P</div>
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
								onChange={handleChange.bind(this)}
								showFileNames
								dropzoneText={`Drag & drop files or click here to upload`}
								showAlerts={true}
								maxFileSize={5000000}
								filesLimit={20}
							/>
						</MuiThemeProvider>
						<p>{dropFiles.length} photo(s) ready to go</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Upload
