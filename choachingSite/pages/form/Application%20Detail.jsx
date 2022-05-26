
import { Navbar } from "../../components/common/navbar"
import { Footer } from "../../components/common/footer"
import { Sider } from "../../components/common/sider"






export default function ApplicationBegin() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3 px-0">
                        <Sider status={'first'} />
                    </div>
                    <div className="col">
                        
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}