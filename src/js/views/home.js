import React, {useEffect, useState, useContext} from "react";
import "../../styles/home.css";
import {Nave} from '../component/nave'
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return(
		<div className="text-center mt-5">
			<h1>Home!</h1>			
			
			<h2>Desde FLUX</h2>
			{store.naves.map( (starship, index) => <Nave key={index} name={starship.name} id={starship.uid} /> )}		
		</div>
	)
};
