import ToggleParam from '../../ToggleParam';

import './OptionBlock3.css';

const OptionBlock3 = ({ autoExpo, setAutoExpo, autoWhite, setAutoWhite, autoNoise, setAutoNoise }) => {
  return (
    <div className="optionCard">
      <div className="optionTitle flex row aic">
        <p>3. Photo Enhancement</p>
      </div>
      <div className="enhancementContainer">
        <ToggleParam text="Automatic exposure" toggle={autoExpo} setToggle={setAutoExpo} />
        <ToggleParam text="Automatic white balance" toggle={autoWhite} setToggle={setAutoWhite} />
        <ToggleParam text="Noise reduction" toggle={autoNoise} setToggle={setAutoNoise} />
      </div>
    </div>
  );
};

export default OptionBlock3;
