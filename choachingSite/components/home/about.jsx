import Image from "next/image"
import about from '../../imgs/about.png'
import Link from "next/link"





export function About() {
    return (
        <div className="container pt-5 mb-5">
            <div className="row">
                <div className="col pe-0 py-4">
                    <div className="col bg-lBlue p-4 mt-2">
                        <p className="text-blue text-sans h5">Who are we</p>
                        <h4 className="text-purple">
                            Expedita voluptas omnis cupiditate totam eveniet
                            nobis sint iste. Dolores est repellat corrupti reprehenderit.
                        </h4>
                        <h6 className="fw-normal text-secondary text-sans col-xl-9 col-lg-11 lh-md mt-2">
                            Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                            et. Inventore et et dolor consequatur itaque ut voluptate sed
                            et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                            corrupti.
                        </h6>
                        <Link href={`/pages/about`}>
                            <button className="btn btn-blue text-sans rounded-1 px-5 mt-3">
                                Read more
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col ps-0 position-relative">
                    <Image
                        src={about.src}
                        layout={'fill'}
                        alt={`about image`}
                    />
                </div>
            </div>
        </div>
    )
}