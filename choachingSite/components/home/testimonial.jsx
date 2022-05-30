
import style from '../../styles/home.module.css'



export function Carousel() {
    return (
        <section className={`${style.bgTestimonial} h-md pt-5 mt-lg position-relative`} id="testimonial">
            <div className="container position-relative">
                <h2 className="text-uppercase text-serif text-center fw-bold mb-1 text-light">what people say</h2>
                <p className="text-dgrey text-center mb-5">How real people said about our teaching Education</p>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators top-100 py-1">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner text-center h-smpx text-light">
                        <div className="carousel-item active">
                            <p className="w-50 center">
                                LearnPress WordPress LMS Plugin designed with flexible & scalable inter alia technologies in mind
                            </p>
                            <h5 className="text-serif mt-5">
                                Peter Packer
                            </h5>
                            <h6 className="text-sans">
                                front-end developer
                            </h6>
                        </div>
                        <div className="carousel-item">
                            <p className="w-50 center">
                                LearnPress fullstack design and UI UX with flexible & scalable inter alia technologies in mind
                            </p>
                            <h5 className="text-serif mt-5">
                                Shoaib Bhai
                            </h5>
                            <h6 className="text-sans">
                                full-stack developer
                            </h6>
                        </div>
                        <div className="carousel-item">
                            <p className="w-50 center">
                                LearnPress WordPress LMS Plugin designed with flexible & scalable eLearning system in mind
                            </p>
                            <h5 className="text-serif mt-5">
                                Peter Packer
                            </h5>
                            <h6 className="text-sans">
                                front-end developer
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}