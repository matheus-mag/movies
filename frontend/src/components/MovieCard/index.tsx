import Score from "components/Score";
import {Link} from "react-router-dom";

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

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