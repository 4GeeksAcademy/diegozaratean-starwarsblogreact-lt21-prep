import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetalleNave = props => {
	const { store, actions } = useContext(Context);
    const [starship, setStarship] = useState({})
	const params = useParams();
    console.log(params)

    useEffect( ()=> {
        console.log('se cargo detalle nave')
        fetch('https://swapi.tech/api/starships/' +params.nave_id )
        .then( (response) =>  response.json())
        // .then( (data) => console.log(data.result.properties))
        .then( (data) => setStarship(data.result.properties))
    }
        ,[])
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {params.nave_id}</h1>
            {params.nave_id}
            {starship.name}

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

DetalleNave.propTypes = {
	match: PropTypes.object
};
