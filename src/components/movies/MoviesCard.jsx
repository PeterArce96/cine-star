// En el hijo se puede recuperar la información recibida, se le llama props
// const MoviesCard = (props) => {
// sin embargo ese props es un objeto que puedo desestructurar por comodidad
const MoviesCard = ({pelicula}) => {
    // Con ello recupero la información recibida por mi padre y lo uso como cualquier objeto
    // Dentro del "HTML" JavaScrip se pone entre llaves
    return (
        <div>
            <h2>{pelicula.nombre}</h2>
            <h2>{pelicula.genero}</h2>
        </div>
        );
    }
    
    export default MoviesCard;