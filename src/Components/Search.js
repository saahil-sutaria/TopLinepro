import React, {useState, useEffect} from 'react';


function Search (props) {
	
	const [text, setText] = useState('');

	const initialStateImages = [];
	const [images, setImages] = useState(initialStateImages);

	const initialStateSearch = '';
	const [search, setSearch] = useState(initialStateSearch);

	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);


	useEffect( () => {
		if(search === "") return;
		getImageData(currentPage);
	}, [currentPage, search]);

	useEffect( () => {
		var storedSearch = window.localStorage.getItem('search');
		
		if(storedSearch !== null || storedSearch === ""){
			console.log(storedSearch);
			setSearch(storedSearch);
		}

	}, []);

	const getImageData = (currentPage) => {
		fetch(`https://pixabay.com/api/?key=31556203-a2442d7eef07373e5c6bf4866&q=${search}&image_type=photo&pretty=true&per_page=30&page=${currentPage}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			const images = data.hits;
			setImages((prevState) => images);
			const totalPages = Math.ceil(data.totalHits / 30);
			setTotalPages(totalPages);
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
			
		</div>
	)
}

export default Search;