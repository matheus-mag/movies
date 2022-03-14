import Stars from "components/Stars";
import './style.css';
function Score() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="movie-score-container">
    <p className="movie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
    <Stars />
    <p className="movie-score-count">{count} avaliações</p>
</div>
    );
}

export default Score;