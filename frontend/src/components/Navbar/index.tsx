import './style.css';
import github from 'assets/img/github.png';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="movie-nav-content">
                    <h1>Movies</h1> 
                    <a href="https://github.com/matheus-mag ">
                        <div className='movie-nav-info'>
                            <img className='rounded-circle' src={github} alt="" />
                            <p className='movie-contact-link'>/matheus-mag</p>
                        </div>
                    </a>
                </div> 
            </nav>
        </header>
    );
}

export default Navbar;