



export function Carousel() {
    return (
        <div className="container mt-lg">
            <h2 className="text-uppercase text-serif text-center fw-bold mb-1">what people say</h2>
            <p className="text-secondary text-center mb-5">How real people said about Education</p>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators top-100 py-1">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active mt-5 bg-dark" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="mt-5 bg-dark" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="mt-5 bg-dark" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner text-center">
                    <div class="carousel-item active">
                        <h5 className="text-serif">
                            Peter Packer
                        </h5>
                        <h6 className="text-secondary text-sans">
                            front-end developer
                        </h6>
                        <p className="w-50 center mt-5">
                            LearnPress WordPress LMS Plugin designed with flexible & scalable inter alia technologies in mind
                        </p>
                    </div>
                    <div class="carousel-item">
                        <h5 className="text-serif">
                            Shoaib Bhai
                        </h5>
                        <h6 className="text-secondary text-sans">
                            full-stack developer
                        </h6>
                        <p className="w-50 center mt-5">
                            LearnPress fullstack design and UI UX with flexible & scalable inter alia technologies in mind
                        </p>
                    </div>
                    <div class="carousel-item">
                        <h5 className="text-serif">
                            Peter Packer
                        </h5>
                        <h6 className="text-secondary text-sans">
                            front-end developer
                        </h6>
                        <p className="w-50 center mt-5">
                            LearnPress WordPress LMS Plugin designed with flexible & scalable eLearning system in mind
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}