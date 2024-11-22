import React from 'react';
import { Link } from 'react-router-dom';
const Map = () => {
      let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <div className="container my-5 ">
            <div className="row align-items-center mb-5">
            <div className="col-lg-12" style={{marginTop:"10px"}}>
                        <div className="section-title-area ltn__section-title-2--- text-center">
                            <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Budget</h6>
                            <h1 className="section-title">Estimation  Prix </h1>
                        </div>
                    </div>
                {/* Left Column: Image */}
                <div className="col-md-7">
                <img src={publicUrl+"assets/img/map.jpg"} alt="Map" />
                </div>

                {/* Right Column: Title, Paragraph, and Button */}
                <div className="col-md-5 mt-4">
                    <h4 className="mb-3">Découvrez les prix de l'immobilier en Tunisie avec Leaders immobilier</h4>
                    <p className="mb-4">
                    Explorez la carte des prix de Leaders Immobiliers pour accéder rapidement à des informations clés sur le marché immobilier en Tunisie. Consultez le prix moyen des biens et le nombre de propriétés disponibles dans chaque région.
                    </p>
                 
                    <Link to="/map" className="btn voirplus btn-effect-1 ">
                    Explorer la carte des prix
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default Map;
