import { useState } from "react"
import * as Icon from "react-feather"

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

	const handleInputChange = (e) => setNewFolder(e.target.value)

	const addFolder = (e) => {
		if (e.keyCode === 13) {
			setFolders([...folders, newFolder])
			e.target.value = ""
		}
	}
	const removeFolder = (indexToDelete) => {
		setFolders(folders.filter((folder, index) => index !== indexToDelete))
	}

	return (
		<div className="optionCard">
			<div className="optionTitle flex row aic">
				<p>2. Destination folders</p>
				{/* <ToggleSwitch toggle={toggle} setToggle={setToggle} /> */}
			</div>

			<div className="folderContainer flex col">
				<label htmlFor="Name">New folder</label>
				<input
					type="text"
					placeholder="Folder name"
					className="inputFolder"
					onChange={handleInputChange}
					onKeyDown={(e) => addFolder(e)}
				/>
				<p className="below">Type and hit ENTER to create a folder</p>
				{folders &&
					folders
						.sort((a, b) => a.localeCompare(b))
						.map((folder, index) => (
							<div key={index} className="folderList flex row aic">
								<div className="flex row">
									<div className="textBlock">=</div>
									<div className="textBlock">{folder}</div>
								</div>
								<div className="flex row">
									<div className="textBlock">
										<Icon.Edit2 size={14} />
									</div>
									<div
										className="textBlock"
										onClick={() => removeFolder(index)}
									>
										<Icon.Trash2 size={14} />
									</div>
								</div>
							</div>
						))}
			</div>
		</div>
	)
}

export default OptionBlock2
