import React, {useState, useEffect} from 'react';
import ImageList from './ImageList';

function Search (props) {
	
	const [text, setText] = useState('');

	const initialStateImages = [];
	const [images, setImages] = useState(initialStateImages);

	const initialStateSearch = '';
	const [search, setSearch] = useState(initialStateSearch);

	useEffect( () => {
		if(search === "") return;
		getImageData();
	}, [search]);

	useEffect( () => {
		var storedSearch = window.localStorage.getItem('search');
		
		if(storedSearch !== null || storedSearch === ""){
			console.log(storedSearch);
			setSearch(storedSearch);
		}

	}, []);

	const getImageData = () => {
		fetch(`https://pixabay.com/api/?key=31556203-a2442d7eef07373e5c6bf4866&q=${search}&image_type=photo&pretty=true&per_page=30`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			const images = data.hits;
			setImages((prevState) => images);
		})
		.catch((err) => console.log(err));
	}

	const handleSubmit = (event) => {
		setSearch((prevState) => text);		
		window.localStorage.setItem('search', text);
		event.preventDefault();
	}

	return(
		<div id="container">
			<form onSubmit={handleSubmit}>
				<label >
				<input className="validate" placeholder="Find Images " type="text" value={text} onChange={e => setText(e.target.value)} />
				</label>
				&nbsp;&nbsp;
				<button type="submit" className="teal btn-flat center white-text"> 
					Search 
					<i className="material-icons right">search</i>
				</button>
			</form>
			<ImageList imgs={images}/>
		</div>
	)
}

export default Search;