import MoviesCard from "../components/movies/MoviesCard";

const Movies = () => {
    // Esta data en un futuro se consumirá de un API
    const pelicula = {
        nombre: 'Sonic',
        genero: 'Comedia'
    }

    return (
        <main className="main">
        <h1 className="body__title animate__animated animate__fadeIn">Movies</h1>

        {/* Se puede pasar información a los hijos */}
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        <MoviesCard
            pelicula={pelicula} 
        />
        </main>
    );
}

export default Movies;