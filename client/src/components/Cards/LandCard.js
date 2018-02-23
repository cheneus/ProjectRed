import React from "react";
import "./Card.css";

const LandCard = props => (
  <div className="card">
	    <div className = "container-fluid">
	    	<h2>Landmarks</h2>
	    	<ul>
			  <h3>
			      {props.land1}     
				</h3>
			    <h3>
		         {props.land2}
		     	</h3>
				<h3>
				  {props.land3}
				</h3>
		    </ul>
		</div>			
	</div>
);

export default LandCard;
