import React from 'react';

const Map = () => {
      let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <div className="container my-5 ">
            <div className="row align-items-center mb-5">
                {/* Left Column: Image */}
                <div className="col-md-8">
                <img src={publicUrl+"assets/img/map.png"} alt="Map" />
                </div>

                {/* Right Column: Title, Paragraph, and Button */}
                <div className="col-md-4">
                    <h4 className="mb-3">Découvrez les prix de l'immobilier en Tunisie</h4>
                    <p className="mb-4">
                    Explorez la carte des prix de Leaders Immobiliers pour accéder rapidement à des informations clés sur le marché immobilier en Tunisie. Consultez le prix moyen des biens et le nombre de propriétés disponibles dans chaque région.
                    </p>
                    <button className="btn theme-btn-1 btn-effect-1 ">Explorer la carte des prix                    </button>
                </div>
            </div>
        </div>
    );
};

export default Map;
