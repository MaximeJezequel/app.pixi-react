import { useState } from "react"
import * as Icon from "react-feather"

// import { Alert } from "@material-ui/lab"
// import { Snackbar } from "@material-ui/core"

// import ToggleSwitch from "../../ToggleSwitch"

import "./OptionBlock2.css"

const OptionBlock2 = ({ toggle, setToggle }) => {
	const [folders, setFolders] = useState([
		"Main stage",
		"Partners",
		"Backstages",
		"Folder 4",
	])

	const [newFolder, setNewFolder] = useState("")
	const [updateTag, setUpdateTag] = useState("")

	const handleInputChange = (e) => setNewFolder(e.target.value)

	const addTag = (e) => {
		if (e.keyCode === 13 && newFolder.length > 0) {
			if (folders.includes(newFolder)) {
				alert(`Snackbar : A tag named "${newFolder}" already exist`)
			} else if (folders.length > 5) {
				alert(
					"Snackbar: Maximum 6 tags authorized, please delete a tag before creating a new one !"
				)
			} else {
				setFolders([...folders, newFolder])
				e.target.value = ""
				setNewFolder("")
			}
		}
	}

	const editTag = (e, indexToUpdate) => {
		// setUpdateTag(e.target.value)
		// setFolders([...folders.filter((tag) => tag !== updateTag), e.target.value])
	}

	const removeTag = (indexToDelete) => {
		setFolders(folders.filter((folder, index) => index !== indexToDelete))
	}
	// <Snackbar
	// 	open={addAlert}
	// 	autoHideDuration={6000}
	// 	anchorOrigin={{
	// 		vertical: "top",
	// 		horizontal: "center",
	// 	}}
	// >
	// 	<Alert severity="success">Membre ajouté avec succès</Alert>
	// </Snackbar>

	return (
		<div className="optionCard">
			<div className="optionTitle flex row aic jcsb">
				<p>2. Tag List</p>
				{/* <ToggleSwitch toggle={toggle} setToggle={setToggle} /> */}
			</div>

			<div className="folderContainer flex col">
				<label htmlFor="Name">New tag</label>
				<input
					type="text"
					placeholder="Tag name"
					className="inputFolder"
					onChange={handleInputChange}
					onKeyDown={(e) => addTag(e)}
				/>
				<p className="below">Type and hit ENTER to create a tag</p>
				{folders &&
					folders
						.sort((a, b) => a.localeCompare(b))
						.map((folder, index) => (
							<div key={index} className="folderList flex row aic jcsb">
								<div className="flex row">
									<div className="textBlock">=</div>
									<input
										className="inputBlock"
										value={folder}
										onClick={(e) => setUpdateTag(e.target.value)}
										onChange={(e) => editTag(e, index)}
									/>
								</div>
								<div className="flex row">
									<div className="textBlock" onClick={() => removeTag(index)}>
										<Icon.X size={14} />
									</div>
								</div>
							</div>
						))}
			</div>
		</div>
	)
}

export default OptionBlock2
