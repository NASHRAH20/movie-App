import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shopping from './Components/Shopping';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function App() {
  const [movies, setMovies] = useState([]);
  const[search,setSearch] = useState('');
  const[filterMovie,setFilterMovie] = useState([]);
  const imageurl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=17a4e3b2288c4c18cc589cd94934e551')
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);
 

  useEffect(()=>{
    const filtered = movies.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()));
    setFilterMovie(filtered)
    
  },[search,movies])

  return (

    <>
        <Header/>
        <InputGroup className=" mt-5 search  ">
        <Form.Control
          placeholder="Search for the movies you like ?"
          aria-label="Recipient's username"
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
        </Button>
      </InputGroup>
      <Container>
      <Row>
      {filterMovie.map((item, index) => (
        <Col lg={4}>
        <Shopping
          key={index}
          title={item.title}
          image={imageurl + item.poster_path}
          overview={item.overview}

        />
      </Col>
      ))}
      </Row>
    </Container>
      <Footer/>
    
      
    </>
  );
}

export default App;
