import BubbleGrid from "../../BubbleGrid"

import "./Watermark.css"

const Watermark = ({
	slider1,
	setSlider1,
	max1,
	slider2,
	setSlider2,
	max2,
	bubbleValue,
	setBubbleValue,
}) => {
	const handleChange1 = (e) => {
		e.target.value > max1 ? setSlider1(max1) : setSlider1(e.target.value)
	}
	const handleChange2 = (e) => {
		e.target.value > max2 ? setSlider2(max2) : setSlider2(e.target.value)
	}
	return (
		<>
			<label htmlFor="Watermark">Watermark</label>
			<input type="file" className="inputWatermark" />
			<p className="below">Allowed file types: png, jpg, jpeg.</p>

			<div className="watermarkContainer">
				<div className="watermarkPosition flex row jcsb">
					<div className="position flex col">
						<p>Position</p>
						<BubbleGrid
							bubbleValue={bubbleValue}
							setBubbleValue={setBubbleValue}
						/>
					</div>

					<div className="watermarkSliders flex col">
						<div className="slider1 flex col">
							<div className="sliderTitle flex row aic jcsb">
								<p>Size of the watermark (%)</p>
								<input
									className="boxSize"
									value={slider1}
									onChange={(e) => handleChange1(e)}
								/>
							</div>
							<div className="sliderContainer">
								<input
									className="sliderRange flex aic jcc"
									type="range"
									min="0"
									max={max1}
									value={slider1}
									onChange={(e) => handleChange1(e)}
								/>
							</div>

							<div className="slider2 flex col">
								<div className="sliderTitle flex row aic jcsb">
									<p>Distance from the edge of the photo (%)</p>
									<input
										className="boxSize flex aic jcc"
										value={slider2}
										onChange={(e) => handleChange2(e)}
									/>
								</div>
								<div className="sliderContainer">
									<input
										className="sliderRange flex aic jcc"
										type="range"
										min="0"
										max={max2}
										value={slider2}
										onChange={(e) => handleChange2(e)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Watermark
