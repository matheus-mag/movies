import Arrow from 'assets/img/seta-esq.png';
import './style.css';

function Pagination() {

    return (
        <div className="movie-pagination-container">
            <div className="movie-pagination-box">
                <button className="movie-pagination-button" disabled={true} >
                    <img src={Arrow} alt="" />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="movie-pagination-button" disabled={false} >
                    <img className="movie-flip-horizontal" src={Arrow} alt="" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;