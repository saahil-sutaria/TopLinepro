import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ imgs }) => {

    return ( 
		<div id="container">
			<div className="row">
				{
					imgs.map( img => { return <ImageCard key={img.id} img={img}/> })
				}
			</div>
		</div>
    );
}

export default ImageList;