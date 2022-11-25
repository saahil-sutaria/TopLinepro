import React from 'react';
import {useLocation} from 'react-router-dom';

function Single(props) {

	const {largeImageURL, type, tags, user, views} = useLocation().state.img;

	const displayTags = () => {
		const tagList = tags.split(',');
		for(var i=0; i < tagList.length; i++) {
			tagList[i] = tagList[i].trim();
			const tagL = tagList[i].split(" ")[0];
			tagList[i] = tagL;
		}
		return(
			tagList.map((tag, index) => <div className="chip" key={index}>{tag}</div>)
		)
	}

	return (
		<div className="row" >
			<div className="col s12" >
				<img className="responsive-img" src={largeImageURL} alt={type}  height="600px" style={{paddingTop: "20px"}}/>
				<div className="card-content">
					{displayTags()}
				</div>
				<div style={{padding:"10px"}}>
				<div className="chip white-text teal">Posted By: {user}</div>
				<div className="chip white-text teal">Views: {views}</div>
				</div>
			</div>
			
		</div>
	);
    
}
export default Single;