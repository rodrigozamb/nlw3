import React from 'react'
import MapMarker from '../images/map-marker.svg';
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import {Map, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapMarker} alt="Happy"/>
                    <h2>Escolha um orfanato do mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :) </p>
                </header>
                <footer>
                    <strong>Uberlândia</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

            <Map
                center={[-18.90004,-48.3090628]}
                zoom={15}
                style={{ width:'100%', height:'100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}


export default OrphanagesMap;