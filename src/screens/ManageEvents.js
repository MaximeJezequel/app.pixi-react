import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
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
  let { event_id } = useParams();
  const [data, setData] = useState('');

  const [eventName, setEventName] = useState(''); //event name
  const [watermarkFile, setWatermarkFile] = useState(''); //watermark filename
  const [bubbleGridWatermark, setBubbleGridWatermark] = useState('3-3'); //initial position of watermark
  const [slider1, setSlider1] = useState(100); //percent
  const [slider2, setSlider2] = useState(0); //percent
  const [bubbleGridCopyright, setBubbleGridCopyright] = useState('3-1'); //initial position of copyright
  const [showCopyright, setShowCopyright] = useState(true);
  const [fontFamily, setFontFamily] = useState('roboto');
  const [fontSize, setFontSize] = useState(14);
  const [creditText, setCreditText] = useState('');
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

  /*** AXIOS GET EVENT BY ID */
  useEffect(() => {
    const refresh = async (data) => {
      await setEventName(data.event_name);
      // setWatermarkFile(data.watermark_name);
      await setSlider1(data.watermark_size);
      await setSlider2(data.watermar_bord);
      await setBubbleGridWatermark(`${data.watermark_pos.x}-${data.watermark_pos.y}`);
      await setShowCopyright(data.credit);
      await setBubbleGridCopyright(`${data.credit_pos.x}-${data.credit_pos.y}`);
      await setFontFamily(data.credit_font);
      await setFontSize(data.credit_size);
      await setCreditText(data.creditText);
    };
    refresh(data);
    data.watermark_pos && console.log('watermarkpos', `${data.credit_pos.x}-${data.credit_pos.y}`);
  }, [data]);

  useEffect(() => {
    const getEventById = async (event_id) => {
      await axios
        .get(`${process.env.REACT_APP_URL_API}/events/${event_id}`, {
          headers: {
            Authorization: `Basic ${localStorage.getItem('sessionToken')}`,
          },
        })
        .then((results) => console.log('results', results.data) || setData(results.data));
    };
    getEventById(event_id);
  }, [event_id]);

  const handleUploadClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const handleWatermarkChange = (e) => {
    console.log('watermark', e.target.files[0]);
    setWatermarkFile(e.target.files[0]);
  };

  const updateEvent = (event_id) => {
    console.log(`update event ${event_id}`);

    const modifiedEvent = new FormData();
    modifiedEvent.append('eventName', eventName);
    modifiedEvent.append('watermark', watermarkFile);
    modifiedEvent.append('watermarkSize', slider1);
    modifiedEvent.append('watermarkBord', slider2);
    modifiedEvent.append('watermarkPos', JSON.stringify(watermarkPos));
    modifiedEvent.append('credit', showCopyright);
    modifiedEvent.append('creditPos', JSON.stringify(creditPos));
    modifiedEvent.append('creditFont', fontFamily);
    modifiedEvent.append('creditSize', fontSize);
    modifiedEvent.append('creditText', creditText);
    modifiedEvent.append('team', ['William Jezequel']);
    modifiedEvent.append('role', 'Owner');
    modifiedEvent.append('actions', '...');

    // modifiedEvent.append('corrections', this.isCorrection);
    // modifiedEvent.append('eventFtpHost', document.getElementById('hostInput').value);
    // modifiedEvent.append('eventFtpUser', document.getElementById('userFTPInput').value);
    // modifiedEvent.append('eventFtpPort', document.getElementById('portInput').value);
    // modifiedEvent.append('eventFtpPassword', document.getElementById('passFTPInput').value);

    console.log('watermarkFile', watermarkFile);
    for (let value of modifiedEvent.values()) {
      console.log(value);
    }

    // AXIOS TO UPDATE EVENT (not implemented)
    axios.put(`${process.env.REACT_APP_URL_API}/events/${event_id}`, modifiedEvent, {
      headers: {
        Authorization: `Basic ${localStorage.getItem('sessionToken')}`,
      },
    });
  };

  // AXIOS TO DELETE EVENT (not implemented)

  const deleteEvent = (event_id) => {
    console.log(`delete event $event_id`);
    axios.delete(`${process.env.REACT_APP_URL_API}/events/${event_id}`, {
      headers: {
        Authorization: `Basic ${localStorage.getItem('sessionToken')}`,
      },
    });
  };

  return (
    <div className="App">
      <div className="bodyContainer flex col">
        <ButtonBar handleClickSave={() => updateEvent(event_id)} handleClickDelete={() => deleteEvent(event_id)} />
        <h2>EVENT DETAILS</h2>
        <div className="topDiv flex jcsb">
          <div className="eventInfo flex col">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Event name"
              className="inputEvent"
              value={eventName}
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
        <UploadBar handleUploadClick={handleUploadClick} />

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
            creditText={creditText}
            setCreditText={setCreditText}
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
