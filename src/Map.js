import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import Intro from './Intro'
// import { useQuery, useMutation } from "@apollo/react-hooks";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Dep_rank from './Dep_rank';
import Nav from './Navbar'
import Newnav from './Newnav'
const Map = (props) => {

  const [lng, setLng] = useState(121.5392);
  const [lat, setLat] = useState(25.0173);
  const [zoom, setZoom] = useState(14.85);
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [opn, setOpn] = useState(false)
  const [master, setMaster] = useState(props.name)
  const dep_arr = [
    { dep: "CSEE", cord: [121.5416, 25.0195] },
    { dep: "SOCIAL", cord: [121.5423, 25.0208] },
    { dep: 'ELITE', cord: [121.5382, 25.0140] },
    { dep: 'LAW', cord: [121.5436, 25.0206] },
    { dep: 'INDUSTRY', cord: [121.5383, 25.0182] }];
  console.log('幹', props.name)
  useEffect(() => {
    //async = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYW50aWNkdWtlIiwiYSI6ImNramg3NWQzdjZnMjUycXJ3NGZ0MGZzMzcifQ.q5BvzHDORxEQCIJ5EZondQ';
    const init_map = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });

      map.on('move', () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
      });

      dep_arr.forEach((val) => {
        console.log(val)
        const div = window.document.createElement('div');
        const el = <Intro value={val} opened={opn}
          switch={props.switch} dep={props.dep} gen={props.gen} />
        ReactDOM.render(el, div);
        const popup = new mapboxgl.Popup(
          {
            closeOnClick: true,
            className: 'popContainer'
          }

        ).setDOMContent(div);
        setOpn(popup.isOpen());
        console.log('popup', opn)
        var marker = new mapboxgl.Marker({
          color: "lightblue"
        }).setLngLat(val.cord)
          .setPopup(popup)
          .addTo(map);
      })
      //}

    };

    // popup.on('close', () => setOpn(true));


    if (!map) init_map({ setMap, mapContainer });
  }, [props.page]);




  return (
    <div >

      <Nav switch={props.switch} arr={dep_arr} name={props.name}
      />
      {/*      <Newnav /><ul className='fuck'>
        <li ><a className="active" href="#login" onClick={() => props.switch(0)}>{master}</a></li>
        <li><Dep_rank arr={dep_arr} /></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>*/}
      <div className='sidebarStyle'>
        <div>Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</div>
      </div>
      <div ref={el => mapContainer.current = el} className='mapContainer' />
    </div>
  )
}

export default Map
  /*
*/