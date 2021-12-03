import * as Icon from "react-feather"

import "./UploadBar.css"

const UploadBar = () => {
	return (
		<div className="uploadBar flex row aic">
			<div className="uploadSpeechBubble flex aic jcc">change picture</div>
			<button
				className="uploadBtn"
				onClick={() => console.log("upload clicked")}
			>
				<Icon.Upload size={14} /> <span>Upload</span>
			</button>
		</div>
	)
}

export default UploadBar
