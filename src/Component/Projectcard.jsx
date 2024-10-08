import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props?.image} alt={props?.title || "project image"} />
            </div>
            <div className="card-container">
                <h2>{props?.title}</h2>
                <div className='links'>
                    <Link to={props?.code} className="btn code">Code</Link>
                    <Link to={props?.live} className="btn live">Live</Link>
                </div>
            </div>
        </div>
    );
}
