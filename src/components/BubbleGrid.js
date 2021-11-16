import "./BubbleGrid.css"

const BubbleGrid = ({ bubbleValue, setBubbleValue }) => {
	return (
		<div className="bubbleGrid">
			<div className="line1">
				<div
					className={bubbleValue === "1-1" ? "bubble bubbleactive" : "bubble"}
					onClick={() => setBubbleValue("1-1")}
				></div>
				<div
					className={bubbleValue === "1-2" ? "bubble bubbleactive" : "bubble"}
					onClick={() => setBubbleValue("1-2")}
				></div>
				<div
					className={bubbleValue === "1-3" ? "bubble bubbleactive" : "bubble"}
					onClick={() => setBubbleValue("1-3")}
				></div>
			</div>
			<div className="line2">
				<div
					className={bubbleValue === "2-1" ? "bubble bubbleactive" : "bubble"}
					onClick={() => setBubbleValue("2-1")}
				></div>
				<div
					className={bubbleValue === "2-2" ? "bubble bubbleactive" : "bubble"}
					onClick={() => setBubbleValue("2-2")}
				></div>
				<div
					className={bubbleValue === "2-3" ? "bubble bubbleactive" : "bubble"}
					onClick={() => setBubbleValue("2-3")}
				></div>
			</div>
			<div className="line3">
				<div
					className={bubbleValue === "3-1" ? "bubble bubbleactive" : "bubble"}
					onClick={() => setBubbleValue("3-1")}
				></div>
				<div
					className={bubbleValue === "3-2" ? "bubble bubbleactive" : "bubble"}
					onClick={() => setBubbleValue("3-2")}
				></div>
				<div
					className={bubbleValue === "3-3" ? "bubble bubbleactive" : "bubble"}
					onClick={() => setBubbleValue("3-3")}
				></div>
			</div>
		</div>
	)
}

export default BubbleGrid
