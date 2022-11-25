import React from 'react';
import {Link} from "react-router-dom";

const ImageCard = ({ img }) => {

    const { largeImageURL, tags , views} = img;

    return ( 
		<div className="col l4 m6 s12">
			<div className="card darken-1 ">
				<div className="card-image">
				<Link  
					to="/view"
					state={{ img: img }}
				>
					<img src={largeImageURL} className="resizeimg" key={views} alt={tags} />
				</Link>
					
				</div>
			</div>
		</div>
    );
}

export default ImageCard;

