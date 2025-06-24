import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../img/img.jsx';

function CarouselSkills() {
    return (

        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src= {img.Git}  width={200} height={150} alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={img.React} width={200} height={150} alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={img.nodejs} width={200} height={150} alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={img.sql} width={200} height={150} alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default CarouselSkills;