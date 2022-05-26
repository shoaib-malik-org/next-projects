



export function Input({ name, placeholder }) {
    return (
        <div className="row mt-4" key={name}>
            <label htmlFor="" className="form-label">{name}</label>
            <input type="text" className="form-control w-50" placeholder={placeholder} />
        </div>
    )
}