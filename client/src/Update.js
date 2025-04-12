import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put("mysglserver46.database.windows.net/create", { name, phone, role },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        axios
            .get("/mysglserver46.database.windows.net/getrecord", +id,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then((res) => ({
                name: res.data[0].name,
                phone: res.data[0].phone,
                role: res.data[0].role
            })
            )
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="d-flex align-items-center flex-column mt-3">
            <h5>Add a Member</h5>
            <form className="w-50" onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        placeholder="Name..."
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="'mb-2 mt-3">
                    <label htmlFor="">Phone</label>
                    <input
                        type="int"
                        placeholder="Phone..."
                        className="form-control"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="'mb-2 mt-3">
                    <label htmlFor="">Role</label>
                    <input
                        type="text"
                        placeholder="Role..."
                        className="form-control"
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-secondary mt-3">Submit</button>
            </form>
        </div>
    );
}
export default Update;
