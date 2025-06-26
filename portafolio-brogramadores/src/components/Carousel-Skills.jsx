import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../img/img.jsx';
import styles from '../Styles/CarouselSkills.module.css';

function CarouselSkills() {
    return (
        <div className={`container my-5 ${styles.carouselContainer}`}>
            <h2 className="text-center mb-4">Habilidades Técnicas</h2>
            <div id="carouselExampleAutoplaying" className={`carousel slide ${styles.carousel}`} data-bs-ride="carousel">
                <div className="carousel-inner text-center">
                    <div className={`carousel-item active ${styles.carouselItem}`}>
                        <img src={img.Git} alt="Git" className={styles.carouselImage} />
                        <p className={styles.caption}>Control de versiones con Git</p>
                    </div>
                    <div className={`carousel-item ${styles.carouselItem}`}>
                        <img src={img.React} alt="React" className={styles.carouselImage} />
                        <p className={styles.caption}>Desarrollo Front-End con React</p>
                    </div>
                    <div className={`carousel-item ${styles.carouselItem}`}>
                        <img src={img.nodejs} alt="Node.js" className={styles.carouselImage} />
                        <p className={styles.caption}>Backend con Node.js</p>
                    </div>
                    <div className={`carousel-item ${styles.carouselItem}`}>
                        <img src={img.sql} alt="SQL" className={styles.carouselImage} />
                        <p className={styles.caption}>Gestión de bases de datos SQL</p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className={`carousel-control-prev-icon ${styles.customArrow}`} aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className={`carousel-control-next-icon ${styles.customArrow}`} aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
    );
}

export default CarouselSkills;
