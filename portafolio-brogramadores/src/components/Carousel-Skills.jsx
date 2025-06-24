import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../img/img.jsx';

function CarouselSkills() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img.Git} width={200} height={150} alt="Git"/>
                </div>
                <div className="carousel-item">
                    <img src={img.React} width={200} height={150} alt="React"/>
                </div>
                <div className="carousel-item">
                    <img src={img.nodejs} width={200} height={150} alt="Node.js"/>
                </div>
                <div className="carousel-item">
                    <img src={img.sql} width={200} height={150} alt="SQL"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselSkills;