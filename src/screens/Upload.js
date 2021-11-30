import ButtonBarSingle from "../components/ButtonBarSingle"

import "../App.css"

const Upload = () => {
	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<ButtonBarSingle btnIcon="Upload" btnText="Upload" />
				<div className="uploadContainer">
					<h2 className="eventTitle">Printemps des fameuses</h2>
					<div className="dragNDrop"></div>
					<div className="gallery">
						<p>X photos ready to go</p>
						<ul>
							<div className="card"></div>
							<div className="card"></div>
							<div className="card"></div>
							<div className="card"></div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Upload
