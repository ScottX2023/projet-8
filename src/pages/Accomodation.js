import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import datas from '../data.json';
import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import HostInfo from "../components/HostInfo";
import Rating from "../components/Rating";
import '../sass/modules/accomodation.scss'

function Accommodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageSlider, setImageSlider] = useState([]);
  const [currentAccommodation, setCurrentAccommodation] = useState(null);

  useEffect(() => {
    // Recherche de l'hébergement corréspondant a l'id dans le tableau data 
    const foundAccommodation = datas.find(data => data.id === id);
    // Si hébergement trouvé maj images et détails sinon rédirection vers 404
    if (foundAccommodation) {
      setImageSlider(foundAccommodation.pictures);
      setCurrentAccommodation(foundAccommodation);
    } else {
      navigate('error');
    }
  }, [id, navigate]);
  // Rendu conditionnel en attendant le chargement des données 
  if (!currentAccommodation) {
    return <p>Loading...</p>;
  }


  return (
    <>
      <Carrousel imageSlider={imageSlider} />
      <main className="accomodation">
        <div className="accomodation_left">
          <div className="accomodation_content_infos">
            <h1>{currentAccommodation.title}</h1>
            <p>{currentAccommodation.location}</p>
            <div>
              {currentAccommodation.tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="accomodation_right">
          <HostInfo host={currentAccommodation.host} />
          <Rating rating={currentAccommodation.rating} />
        </div>
      </main>  
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse title={'Description'} content={currentAccommodation?.description} />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={'Équipements'} content={currentAccommodation?.equipments} />
          </div>
        </div>
    
    </>
  );
}

export default Accommodation;
