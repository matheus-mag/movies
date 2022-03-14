import starfull from 'assets/img/star-full.png';
import starhalf from 'assets/img/star-half.PNG';
import starempty from 'assets/img/star-empty.PNG';
import './style.css';

function Stars() {

    return (
        <div className="movie-stars-container">
            <img src={starfull} alt="" />
            <img src={starfull} alt="" />
            <img src={starfull} alt="" />
            <img src={starhalf} alt="" />
            <img src={starempty} alt="" />
        </div>
    );
}
export default Stars;