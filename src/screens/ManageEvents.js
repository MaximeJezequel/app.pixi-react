import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';

import ButtonBar from '../components/ButtonBar';
import OptionBlock1 from '../components/ManageEvents/Options/OptionBlock1';
import OptionBlock2 from '../components/ManageEvents/Options/OptionBlock2';
import OptionBlock3 from '../components/ManageEvents/Options/OptionBlock3';
import OptionBlock4 from '../components/ManageEvents/Options/OptionBlock4';
import OptionBlock5 from '../components/ManageEvents/Options/OptionBlock5';
import Preview from '../components/ManageEvents/Details/Preview';
import UploadBar from '../components/ManageEvents/Details/UploadBar';
import Watermark from '../components/ManageEvents/Details/Watermark';

import image from '../assets/modele.jpg';

function ManageEvents() {
  const [eventName, setEventName] = useState(''); //event name
  const [watermarkFile, setWatermarkFile] = useState(''); //watermark filename
  const [bubbleGridWatermark, setBubbleGridWatermark] = useState('3-3'); //initial position of watermark
  const [slider1, setSlider1] = useState(100); //percent
  const [slider2, setSlider2] = useState(0); //percent
  const [bubbleGridCopyright, setBubbleGridCopyright] = useState('3-1'); //initial position of copyright
  const [showCopyright, setShowCopyright] = useState(true);
  const [fontFamily, setFontFamily] = useState('roboto');
  const [fontSize, setFontSize] = useState(14);
  const [tags, setTags] = useState(['Main stage', 'Partners', 'Backstages', 'Folder 4']);
  const [autoExpo, setAutoExpo] = useState(true);
  const [autoWhite, setAutoWhite] = useState(false);
  const [autoNoise, setAutoNoise] = useState(true);

  let max1 = 100; //maximum watermark size in percent
  let max2 = 10; //maximum distance between watermark and edge in percent
  const watermarkPos = {
    x: parseInt(bubbleGridWatermark[0]),
    y: parseInt(bubbleGridWatermark[2]),
  };
  const creditPos = {
    x: parseInt(bubbleGridCopyright[0]),
    y: parseInt(bubbleGridCopyright[2]),
  };

  const inputFile = useRef(null);

  const handleUploadClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const handleWatermarkChange = (e) => {
    console.log('watermark', e.target.value);
    setWatermarkFile(e.target.value);
  };

  const addEvent = () => {
    const newEvent = new FormData();

    newEvent.append('eventName', eventName);
    // newEvent.append('watermark', watermarkFile);

    newEvent.append('watermarkSize', slider1);
    newEvent.append('watermarkBord', slider2);
    newEvent.append('watermarkPos', watermarkPos);

    newEvent.append('credit', showCopyright);
    newEvent.append('creditPos', creditPos);
    newEvent.append('creditFont', fontFamily);
    // newEvent.append('eventCreditSize', fontSize);

    // newEvent.append('corrections', this.isCorrection);
    // newEvent.append('eventFtpHost', document.getElementById('hostInput').value);
    // newEvent.append('eventFtpUser', document.getElementById('userFTPInput').value);
    // newEvent.append('eventFtpPort', document.getElementById('portInput').value);
    // newEvent.append('eventFtpPassword', document.getElementById('passFTPInput').value);

    console.log('newEvent : ', newEvent);
    console.log(
      'eventName :',
      eventName,
      'watermarkSize: ',
      slider1,
      'watermarkBord: ',
      slider2,
      'watermarkPos: ',
      watermarkPos,
      '***',
      'credit: ',
      showCopyright,
      'creditPos',
      creditPos,
      'creditFont: ',
      fontFamily,
      fontSize,
      tags,
      autoExpo,
      autoWhite,
      autoNoise
    );

    axios.post(`${process.env.REACT_APP_URL_API}/events`, newEvent, {
      headers: {
        Authorization: `Basic ${localStorage.getItem('sessionToken')}`,
      },
    });
  };

  return (
    <div className="App">
      <div className="bodyContainer flex col">
        <ButtonBar handleClickSave={() => addEvent()} />
        <h2>EVENT DETAILS</h2>
        <div className="topDiv flex jcsb">
          <div className="eventInfo flex col">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Event name"
              className="inputEvent"
              onChange={(e) => setEventName(e.target.value)}
            />

            <Watermark
              slider1={slider1}
              setSlider1={setSlider1}
              max1={max1}
              slider2={slider2}
              setSlider2={setSlider2}
              max2={max2}
              bubbleValue={bubbleGridWatermark}
              setBubbleValue={setBubbleGridWatermark}
              inputFile={inputFile}
              watermarkFile={watermarkFile}
              setWatermarkFile={setWatermarkFile}
              handleUploadChange={handleWatermarkChange}
              handleUploadClick={handleUploadClick}
            />
          </div>
          <Preview image={image} />
        </div>
        <UploadBar />

        <h2>OPTIONS</h2>
        <div className="bottomDiv flex col">
          <OptionBlock1
            toggle={showCopyright}
            setToggle={setShowCopyright}
            bubbleValue={bubbleGridCopyright}
            setBubbleValue={setBubbleGridCopyright}
            fontFamily={fontFamily}
            fontSize={fontSize}
            setFontFamily={setFontFamily}
            setFontSize={setFontSize}
          />
          <OptionBlock2 tags={tags} setTags={setTags} />
          <OptionBlock3
            autoExpo={autoExpo}
            setAutoExpo={setAutoExpo}
            autoWhite={autoWhite}
            setAutoWhite={setAutoWhite}
            autoNoise={autoNoise}
            setAutoNoise={setAutoNoise}
          />
          <OptionBlock4 />
          <OptionBlock5 />
        </div>
      </div>
    </div>
  );
}

export default ManageEvents;
