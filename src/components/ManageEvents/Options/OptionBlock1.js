import ToggleParam from '../../ToggleParam';
import BubbleGrid from '../../BubbleGrid';

import './OptionBlock1.css';

const OptionBlock1 = ({
  toggle,
  setToggle,
  bubbleValue,
  setBubbleValue,
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  creditText,
  setCreditText,
}) => {
  let fonts = [
    { name: 'Roboto', css: 'roboto' },
    { name: 'Open Sans', css: 'openSans' },
    { name: 'Montserrat', css: 'montserrat' },
    { name: 'Playfair Display', css: 'playfairDisplay' },
    { name: 'Merriweather', css: 'merriweather' },
    { name: 'Old Standard TT', css: 'oldStandardTT' },
  ];
  let fontSizes = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32];

  const handleChangeFontFamily = (e) => {
    setFontFamily(e.target.value);
  };
  const handleChangeFontSize = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <div className="optionCard">
      <div className="optionTitle flex row aic">
        <p>1. Photographer's Copyright</p>
        {/* <ToggleSwitch toggle={toggle} setToggle={setToggle} /> */}
      </div>

      <div className="copyrightContainer flex col jcsb">
        <ToggleParam text="Show copyright" toggle={toggle} setToggle={setToggle} />
        <div className="positionContainer flex row">
          <div className="position">
            <label>Position</label>
            <div className="gridContainer">
              <BubbleGrid bubbleValue={bubbleValue} setBubbleValue={setBubbleValue} />
            </div>
          </div>

          <div className="copyright flex col">
            <div className="font flex row jcsb">
              <div className="fontName">
                <label>Font</label>
                <select className="fontSelect" value={fontFamily} onChange={(e) => handleChangeFontFamily(e)}>
                  {fonts.map((font, index) => (
                    <option key={index} value={font.css}>
                      {font.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="fontSize">
                <label>Size</label>
                <select className="fontSelect" value={fontSize} onChange={(e) => handleChangeFontSize(e)}>
                  {fontSizes.map((fontSize, index) => (
                    <option key={index} value={fontSize}>
                      {fontSize}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="credit">
              <label>Credit</label>
              <input
                value={creditText}
                onChange={(e) => setCreditText(e.target.value)}
                className={`${fontFamily}`}
                style={{ fontSize: `${fontSize}px` }}
                type="text"
                placeholder="&copy; John Doe"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionBlock1;
