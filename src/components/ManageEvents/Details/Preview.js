import "./Preview.css"

const Preview = ({ image }) => {
	return (
		<div className="preview flex col">
			<p className="above">Preview</p>
			<div className="imgContainer">
				<img src={image} alt="pic" />
			</div>
		</div>
	)
}

export default Preview
