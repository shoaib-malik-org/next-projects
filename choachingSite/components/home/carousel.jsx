



export function Carousel() {
    return (
        <div className="container mt-lg">
            <h2 className="text-uppercase text-serif text-center fw-bold mb-1">what people say</h2>
            <p className="text-secondary text-center mb-5">How real people said about Education</p>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators top-100 py-1">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="bg-dark" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="bg-dark" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner text-center h-smpx">
                    <div className="carousel-item active">
                        <p className="w-50 center">
                            LearnPress WordPress LMS Plugin designed with flexible & scalable inter alia technologies in mind
                        </p>
                        <h5 className="text-serif mt-5">
                            Peter Packer
                        </h5>
                        <h6 className="text-secondary text-sans">
                            front-end developer
                        </h6>
                    </div>
                    <div className="carousel-item">
                        <p className="w-50 center mt-5">
                            LearnPress fullstack design and UI UX with flexible & scalable inter alia technologies in mind
                        </p>
                        <h5 className="text-serif mt-5">
                            Shoaib Bhai
                        </h5>
                        <h6 className="text-secondary text-sans">
                            full-stack developer
                        </h6>
                    </div>
                    <div className="carousel-item">
                        <p className="w-50 center mt-5">
                            LearnPress WordPress LMS Plugin designed with flexible & scalable eLearning system in mind
                        </p>
                        <h5 className="text-serif mt-5">
                            Peter Packer
                        </h5>
                        <h6 className="text-secondary text-sans">
                            front-end developer
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}