import { Navbar } from "../../components/common/navbar";
import { Footer } from '../../components/common/footer'
import style from '../../styles/common.module.css'

const yearArr = [],
    year = new Date(),
    yearStart = year.getFullYear() - 30,
    yearEnd = year.getFullYear() - 10,
    days = [],
    months = [
        'january',
        'fabruary',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ]

for (var i = yearStart, a = 1; i < yearEnd; i++, a++) {
    yearArr.push(yearStart + a)
}
for (var i = 0; i < 31; i++) {
    days.push(i + 1)
}


export default function Register() {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <Info />
            </div>
            <Footer />
        </>
    )
}

function Info() {
    return (
        <div className="container-fluid border px-5 py-3">
            <h5 className="text-sans text-blue mb-3">REGISTRATION</h5>
            <div className="row pt-4">
                <label htmlFor="" className="form-label">Name of Applicant: *</label>
                <input type="text" className="form-control w-25" placeholder="first" />
                <input type="text" className="form-control w-25 ms-2" placeholder="middle" />
                <input type="text" className="form-control w-25 ms-2" placeholder="last" />
            </div>
            <div className="row pt-4">
                <label htmlFor="" className="form-label">Date of Birth: *</label>
                <select name="day" id="" className="form-select w-25" placeholder="select">
                    <option value="none">Select</option>
                    {
                        days.map(value => <option value={value} key={value}>{value}</option>)
                    }
                </select>
                <select name="date" id="" className="form-select w-25 ms-2" placeholder="select">
                    <option value="none">Select</option>
                    {
                        months.map(value => <option value={value} key={value}>{value}</option>)
                    }
                </select>
                <select name="year" id="" className="form-select w-25 ms-2" placeholder="select">
                    <option value="none">Select</option>
                    {
                        yearArr.map(value => <option value={value} key={value}>{value}</option>)
                    }
                </select>
            </div>
            <div className="row mt-4">
                <label htmlFor="" className="form-label">Gender: *</label>
                <select name="gender" id="" className="form-select w-25 ">
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="transgender">transgender</option>
                </select>
            </div>
            <div className="row mt-4">
                <label htmlFor="" className="form-label">Father's name: *</label>
                <input type="text" className="form-control w-50" placeholder="father's name" />
            </div>
            <div className="row mt-4">
                <label htmlFor="" className="form-label">Mother's name: *</label>
                <input type="text" className="form-control w-50" placeholder="mother's name" />
            </div>
            <div className="row mt-4">
                <label htmlFor="" className="form-label">Email ID: *</label>
                <input type="email" className="form-control w-50" placeholder="Email" />
            </div>
            <div className="row mt-4">
                <label htmlFor="" className="form-label">Create Password: *</label>
                <input type="email" className="form-control w-50" placeholder="Create Password" />
            </div>
            <div className="row mt-4">
                <label htmlFor="" className="form-label">Confirm Password: *</label>
                <input type="email" className="form-control w-50" placeholder="Confirm Password" />
            </div>
            <div className="row mt-4">
                <label htmlFor="" className="form-label">Mobile No. of the Applicant: *</label>
                <input type="email" className="form-control w-50" placeholder="Number" />
            </div>
            <button className={`btn ${style.NavBg} text-light px-5 mt-3`}>
                Sign up
            </button>
        </div>
    )
}