import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { DataGrid } from '@mui/x-data-grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as Icon from 'react-feather';
import ButtonBarSingle from '../components/ButtonBarSingle';

// import myEvents from '../data/myEvents';

import '../App.css';
import '../styles/DashBoard.css';
import 'react-alice-carousel/lib/alice-carousel.css';

const DashBoard = () => {
  let maxEvents = 4;
  const [pageSize, setPageSize] = useState(parseInt(10));
  const [selectedEvents, setSelectedEvents] = useState('');
  const [eventRows, setEventRows] = useState([]);

  /*** AXIOS ***/
  useEffect(() => {
    const getEvents = async () => {
      await axios
        .get(`${process.env.REACT_APP_URL_API}/events`, {
          headers: {
            Authorization: `Basic ${localStorage.getItem('sessionToken')}`,
          },
        })
        // .then((results) => console.log('event list', results.data));
        .then((results) => setEventRows(results.data));
    };
    getEvents();
  }, []);

  /*** ALICE CAROUSEL ***/
  const responsive = {
    0: { items: 1 },
    1024: { items: 4 },
  };

  const matches = useMediaQuery('(max-width:800px)');

  /*** DATAGRID ***/
  const columns = [
    {
      field: 'event_id',
      headerName: 'ID',
      headerClassName: 'themeHeader invisibleHeader',
      headerAlign: 'left',
      width: 60,
      // flex: 0.1,
      align: 'left',
      renderCell: (params, index) => <div className={`tableAvatar ev${params.value} flex aic jcc`}>{params.value}</div>,
    },
    {
      field: 'event_name',
      headerName: 'EVENT',
      headerClassName: 'themeHeader',
      headerAlign: 'left',
      flex: 0.5,
    },
    {
      field: 'team',
      headerName: 'TEAM',
      headerClassName: 'themeHeader',
      headerAlign: 'left',
      flex: 0.4,
      align: 'left',
      // renderCell: (params) => (
      //   <AvatarGroup max={5}>
      //     {params.value.map((avatar, index) => (
      //       <Avatar
      //         className={`tableMate blackBorder ev${index + 1}`}
      //         key={index}
      //         alt={avatar}
      //         src={`tmp/Avatars/${avatar}.png`}
      //         sx={{
      //           height: '32px',
      //           width: '32px',
      //         }}
      //       />
      //     ))}
      //   </AvatarGroup>
      // ),
      renderCell: (params) => (
        <AvatarGroup max={5}>
          <Avatar
            className={`tableMate blackBorder ev${1}`}
            key={0}
            alt="William Jezequel"
            src={'tmp/Avatars/William Jezequel.png'}
            sx={{
              height: '32px',
              width: '32px',
            }}
          />
        </AvatarGroup>
      ),
      hide: matches,
    },
    {
      field: 'role',
      headerName: 'ROLE',
      headerClassName: 'themeHeader',
      headerAlign: 'left',
      width: 150,
      align: 'left',
      hide: matches,
      renderCell: (params) => <div className="role">{'Owner'}</div>,
    },
    {
      field: 'actions',
      headerName: 'ACTIONS',
      headerClassName: 'themeHeader',
      headerAlign: 'left',
      width: 100,
      align: 'left',
      // renderCell: (params) => <div className="actions">{params.value}</div>,
      renderCell: (params) => (
        <div className="flex row" style={{ padding: '6px' }}>
          <Link to={`/upload/${rows.indexOf()}}`}>
            <Icon.Camera size={20} color={'white'} />
          </Link>
          <Link to={`/events/`}>
            <Icon.Edit size={20} color={'white'} />
          </Link>
          <Link to={`/gallery/`}>
            <Icon.Eye size={20} color={'white'} />
          </Link>
        </div>
      ),
    },
  ];

  const rows = eventRows.filter(
    (d) => selectedEvents === '' || d.event_name.toLowerCase().includes(selectedEvents.toLowerCase())
  );
  console.log('rows', rows);

  // const rows = myEvents.filter(
  //   (d) => selectedEvents === '' || d.event_name.toLowerCase().includes(selectedEvents.toLowerCase())
  // );
  // const lastEvents = myEvents.map((event) => event.eventName);

  const recentEvents = eventRows.slice(0, maxEvents).map((event, index) => (
    <div key={index} className={`recentEventCard ev${index + 1}`}>
      <h2>{event.event_name}</h2>
      <p>color: {event.color}</p>
      <div className="flex col" style={{ padding: '6px', alignItems: 'end' }}>
        <Link to={`/upload/${event.event_id}`}>
          <Icon.Camera size={20} color={'white'} />
        </Link>
        <Link to={`/events/${event.event_id}`}>
          <Icon.Edit size={20} color={'white'} />
        </Link>
        <Link to={`/gallery/${event.event_id}`}>
          <Icon.Eye size={20} color={'white'} />
        </Link>
      </div>
    </div>
  ));

  /*** FUNCTIONS ***/
  const handleCreateEvent = () => {
    window.location = '/events';
  };

  const handleChangePageSize = (e) => {
    console.log(typeof parseInt(e)) || setPageSize(parseInt(e));
  };

  return (
    <div className="App">
      <div className="bodyContainer flex col">
        <div className="buttonBarSingle flex">
          <ButtonBarSingle btnIcon="Plus" btnText="Add event" handleClick={() => handleCreateEvent()} />
        </div>

        <h2>RECENT EVENTS</h2>
        <div className="topDiv flex row">
          <AliceCarousel
            mouseTracking
            items={recentEvents}
            responsive={responsive}
            controlsStrategy="responsive"
            disableButtonsControls
          />
        </div>

        <h2>ALL EVENTS</h2>
        <div className="bottomDiv flex col">
          <div className="eventTable ">
            <div className="eventSearch flex aic jcsb">
              <div className="eventSearchLeft flex aic">
                <div className="tableLabel flex aic jcc">Show</div>
                <select
                  className="pageSizeSelect"
                  name="pageSize"
                  id="pageSize"
                  value={pageSize}
                  onChange={(e) => handleChangePageSize(e.target.value)}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>
              <div className="eventSearchRight flex aic">
                <Icon.Search size={20} color={'gray'} />
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Search"
                  value={selectedEvents}
                  onChange={(e) => setSelectedEvents(e.target.value)}
                />
              </div>
            </div>

            <DataGrid
              rows={rows}
              getRowId={(row) => row.event_id}
              columns={columns}
              pageSize={pageSize}
              disableSelectionOnClick
              autoHeight={true}
              sx={{
                color: 'white',
                border: 'none',
                '& .themeHeader': {
                  backgroundColor: 'var(--dark-grey-color)',
                },
                '& .invisibleHeader': {
                  color: 'var(--dark-grey-color)',
                },
                // "& .MuiDataGrid-columnHeader": {
                // 	color: "white",
                // },
                '& .MuiDataGrid-footerContainer': {
                  // backgroundColor: "grey",
                },
                '& .MuiDataGrid-iconSeparator': {
                  display: 'none',
                },
                '& .MuiToolbar-root': {
                  color: 'white',
                },
                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
