import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        axios
            .post("mysglserver46.database.windows.net/create", { name, phone, role },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => console.log(err.message));
    }

    return (
        <div>
            <div class="d-flex align-items-center flex-column mt-3">
                <h5>ADD Member</h5>
                <form className="w-50" onSubmit={handleSubmit} >
                    <div className="'mb-3 mt-3" >
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="Name..."
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="'mb-2 mt-3">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="int"
                            placeholder="Phone..."
                            className="form-control"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="'mb-2 mt-3">
                        <label htmlFor="role">Role</label>
                        <input
                            type="text"
                            placeholder="Role..."
                            className="form-control"
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                    <button type="submit" class="btn btn-secondary mt-3">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;
