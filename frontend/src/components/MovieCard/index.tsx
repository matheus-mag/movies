import Score from "components/Score";
import {Link} from "react-router-dom";
import { Movie } from "types/movie";


type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props ) {

    return (
        <div className="container">
            <div className="container-movie">
                <img className="movie-movie-card-image" src={movie.image} alt={movie.title} />
            </div>
            <div className="movie-card-bottom-container">
                <h3>{movie.title}</h3>
                <Score />

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary movie-btn">Avaliar</div>
                </Link>

            </div>

        </div>
    );
}

export default MovieCard;