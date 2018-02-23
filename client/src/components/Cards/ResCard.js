import React from "react";
import "./Card.css";

const ResCard = props => (
  <div className="card">
    <div className = "container-fluid">
		<h2>Restaurants</h2>
		<ul>
			<h3>
			   {props.res1}
			</h3>
			<h3>
			   {props.res2}
	        </h3>
		    <h3>
			   {props.res3}
		    </h3>
		</ul>
	</div>
</div>
);

export default ResCard;
