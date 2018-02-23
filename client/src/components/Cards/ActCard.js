import React from "react";
import "./Card.css";

const ActCard = props => (
  <div className="card">
    	<div className = "container-fluid">
	      <h2 >Activities</h2>
	      <ul>
			  <h3>
			     {props.act1}
			  </h3>
			   <h3>
			     {props.act2}
			   </h3>
			   <h3>
			     {props.act3}
			   </h3>
		 </ul>
		</div>
	</div>
);

export default ActCard;
