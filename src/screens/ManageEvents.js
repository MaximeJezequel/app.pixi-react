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

  let max1 = 100; //maximum watermark size in percent
  let max2 = 10; //maximum distance between watermark and edge in percent

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
    const newEventOld = {
      eventName: eventName,
      watermarkFile: watermarkFile,
    };

    const newEvent = new FormData();
    let watermarkPos = undefined;
    this.isFolder = this.folders.length > 0 ? true : false;
    for (let i = 0; i < document.getElementById('watermarkPos').getElementsByTagName('input').length; i++) {
      if (document.getElementById('watermarkPos').getElementsByTagName('input')[i].checked === true) {
        watermarkPos = document.getElementById('watermarkPos').getElementsByTagName('input')[i].value;
      }
    }
    newEvent.append('eventName', eventName);
    newEvent.append(
      'watermark',
      document.getElementById('eventWatermarkFile').files[0] !== undefined
        ? document.getElementById('eventWatermarkFile').files[0]
        : undefined
    );
    newEvent.append('eventWatermarkSize', document.getElementById('watermarkSize').value);
    newEvent.append('eventWatermarkBord', document.getElementById('watermarkBord').value);
    newEvent.append('eventWatermarkPos', watermarkPos);
    newEvent.append('eventCredit', this.isCredit);
    newEvent.append('eventCreditPos', this.creditPosition);
    newEvent.append('eventCreditFont', document.getElementById('font-selector').value);
    newEvent.append('eventCreditSize', document.getElementById('fontsize-selector').value);
    // newEvent.append('isFolder', this.isFolder);
    // newEvent.append('folders', this.isFolder ? this.folders : undefined);
    newEvent.append('corrections', this.isCorrection);

    newEvent.append('eventFtpHost', document.getElementById('hostInput').value);
    newEvent.append('eventFtpUser', document.getElementById('userFTPInput').value);
    newEvent.append('eventFtpPort', document.getElementById('portInput').value);
    newEvent.append('eventFtpPassword', document.getElementById('passFTPInput').value);

    console.log('newEvent : ', newEvent);
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
          />
          <OptionBlock2 />
          <OptionBlock3 />
          <OptionBlock4 />
          <OptionBlock5 />
        </div>
      </div>
    </div>
  );
}

export default ManageEvents;
