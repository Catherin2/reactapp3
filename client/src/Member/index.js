import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export default function Member() {

    const [member, setMember] = useState({
        name: "",
        phone: "",
        role: ""
    })
    //display  data record
    useEffect(() => {
        axios.get('Driver={ODBC Driver 18 for SQL Server};Server=tcp:mysglserver46.database.windows.net,1433;Database=grey;Uid=azureuser;Pwd={8765432#A};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => setMember(res.data))
            .catch(err => console.log(err.message))
    }, []);
    // delete record
    const handleDelete = (id) => {
        axios.delete('mysglserver46.database.windows.net/' + id,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => windows.location.reload())
            .catch(err => console.log(err.message));
    }

    return (
        <div className="container m-5">
            <table className="table striped bordered hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {member &&
                        member.map &&
                        member.map((members, index) => (
                            <tr key={index}>
                                <td>{members.id}</td>
                                <td>{members.name}</td>
                                <td>{members.phone}</td>
                                <td>{members.role}</td>
                                <td>
                                    <Link to={'/update/${members.id}'} type="button" className="btn btn-info btn-sm me-e">Update</Link>
                                    <button type="button" onClick={() => handleDelete(members.id)} className="btn btn-danger btn-sm me-e">Update</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );

}
