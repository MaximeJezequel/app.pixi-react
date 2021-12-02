import { useState } from "react"
import * as Icon from "react-feather"
import { Alert } from "@mui/material"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"

// import { Alert } from "@material-ui/lab"
// import { Snackbar } from "@material-ui/core"

import "./OptionBlock2.css"

const OptionBlock2 = () => {
	const [tags, setTags] = useState([
		"Main stage",
		"Partners",
		"Backstages",
		"Folder 4",
	])

	const [newTag, setNewTag] = useState("")
	const [oldTag, setOldTag] = useState("")
	const [updateTag, setUpdateTag] = useState("")

	const handleInputChange = (e) => setNewTag(e.target.value)

	const addTag = (e) => {
		if (tags.includes(newTag)) {
			alert(`Snackbar : A tag named "${newTag}" already exist`)
		} else if (tags.length > 5) {
			alert(
				"Snackbar: Maximum 6 tags authorized, please delete a tag before creating a new one !"
			)
		} else {
			setTags([...tags, newTag])
			e.target.value = ""
			setNewTag("")
		}
	}

	const handleOpenEdit = (tag) => {
		setOpen(true)
		setOldTag(tag)
		setUpdateTag("") //reinitialize
	}
	const handleCloseEdit = () => {
		setOpen(false)
		setOldTag("") //reinitialize
		setUpdateTag("") //reinitialize
	}

	const removeTag = (tagToDelete) => {
		setTags(tags.filter((tag) => tag !== tagToDelete))
	}

	const modifyTag = () => {
		if (tags.includes(updateTag)) {
			alert(`Snackbar : A tag named "${updateTag}" already exist`)
		} else if (updateTag.length > 0) {
			setTags([...tags.filter((tag) => tag !== oldTag), updateTag])
			handleCloseEdit()
		} else {
			alert(`Snackbar : Tag name should at least contain 1 character`)
		}
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

	const [open, setOpen] = useState(false)

	return (
		<div className="optionCard">
			<div className="optionTitle flex row aic jcsb">
				<p>2. Tag List</p>
			</div>

			<div className="tagContainer flex col">
				<label htmlFor="Name">New tag</label>
				<input
					type="text"
					placeholder="Tag name"
					className="tagInput"
					onChange={handleInputChange}
					onKeyDown={(e) => e.key === "Enter" && newTag.length > 0 && addTag(e)}
				/>
				<p className="below">Type and hit ENTER to create a tag</p>

				{tags &&
					tags
						.sort((a, b) => a.localeCompare(b))
						.map((tag, index) => (
							<div key={index} className="tagList flex row aic jcsb">
								<div className="flex row">
									<div className="tagBlock">=</div>
									<div className="tagBlock">{tag}</div>
								</div>
								<div className="flex row">
									<div className="tagBlock" onClick={() => handleOpenEdit(tag)}>
										<Icon.Edit2 size={14} />
									</div>
									<div className="tagBlock" onClick={() => removeTag(tag)}>
										<Icon.X size={14} />
									</div>
								</div>
							</div>
						))}
				<Dialog open={open} onClose={() => setOpen(false)}>
					<DialogTitle
						sx={{
							backgroundColor: "#3b4253",
							color: "white",
						}}
					>
						Edit Tag : {oldTag}{" "}
					</DialogTitle>
					<DialogContent
						className="flex col"
						sx={{
							backgroundColor: "#3b4253",
						}}
					>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							className="textFieldInput"
							label="New Tag Name"
							type="text"
							variant="standard"
							onChange={(e) => setUpdateTag(e.target.value)}
							onKeyDown={(e) =>
								updateTag.length > 0 ? e.key === "Enter" && modifyTag() : null
							}
						/>
					</DialogContent>
					<DialogActions
						sx={{
							backgroundColor: "#3b4253",
							color: "white",
						}}
					>
						<Button
							onClick={() => handleCloseEdit()}
							sx={{
								backgroundColor: "#3b4253",
								color: "white",
								border: "1px solid white",
							}}
						>
							Cancel
						</Button>
						<Button
							onClick={() => modifyTag()}
							sx={{
								backgroundColor: "#dd5353",
								color: "white",
							}}
						>
							Validate
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	)
}

export default OptionBlock2
