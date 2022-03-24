import React from 'react'
import "./Card.css"

function Card (props) {
    return (
        <div className="Container-Card">
            <div className='card-img'>
                <img src={props.img} alt={props.img} className="imgs" />
            </div>
            <div className="card-body">
                <h2 className="card-title ">{props.title}</h2>
                <p><b>Population :</b> {props.population}</p>
                <p><b>Region :</b> {props.region}</p>
                <p><b>Capital :</b> {props.capital}</p>
            </div>
        </div>
    );
}

export default Card;