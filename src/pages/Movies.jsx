import '../styles/css/Movies.css';
import '../components/movies/MoviesCard';
import { useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
    useEffect(() => {
        const fetchApi = async () => {
            const endpoint = `${process.env.REACT_APP_URL}/discover/movie`;
            // const options = {
            //     method: 'GET',
            //     headers: {
            //         'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            //         'Content-Type': 'application/json;charset=utf-8'
            //     }
            // };
            const options = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                    'Content-Type': 'application/json;charset=utf-8'
                },
                url: endpoint
            };
            try {
                // const response = await fetch(endpoint, options);
                // const data = await response.json();
                const response = await axios(options);
                console.log(response.data);
                // console.log(data);
                } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);
    return (
        <main className="main">
            <section className="movies">
                <div className="movies__container">
                    <h1 className="movies__title">🎥 Movies 🎥</h1>
                    
                </div>
            </section>
        </main>
    );
}

export default Movies;