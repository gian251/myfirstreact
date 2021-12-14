import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";


const AddEmployee = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {employeeId} = useParams();

    useEffect(() => {
        if (employeeId) {
            employeeService.getEmployee(employeeId)
                .then(
                    employee => {
                        setName(employee.data.name);
                        setLocation(employee.data.location);
                        setDepartment(employee.data.department);
                    }
                )

                .catch(
                    error => {
                        console.error("ERROR", error);
                    }
                );
        }
    }, []);

    const saveEmployee = (e) => {
        e.preventDefault();

        if (name && location && department) {
            setError('');

            if (employeeId) {
                const employee = {employeeId, name, location, department};
                employeeService.putEmployee(employee)
                    .then(
                        response => {
                            console.log('Employee record updated.', response.data);
                            navigate('/myfirstreact/employees');
                        }
                    )

                    .catch(
                        error => {
                            console.error('ERROR', error);
                        }
                    );
            }

            else {
                const employee = {name, location, department};
                employeeService.postEmployee(employee)
                    .then(
                        response => {
                            console.log('Employee record added.', response.data);
                            navigate('/myfirstreact/employees');
                        }
                    )

                    .catch(
                        error => {
                            console.log('ERROR', error);
                        }
                    );
            }
        }

        else {
            console.error('Please fill all field boxes');
            setError('Please fill all field boxes');
        }
    };



    return (
        <div className="container">
            <h3>Add employee</h3>
            <form>
                <div className="mb-3">
                    <label for="nameField" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        id="nameField"
                        placeholder="Input name"
                        onChange={
                            (e) => {
                                setName(e.target.value);
                            }
                        }
                    />
                </div>

                <div className="mb-3">
                    <label for="locationField" className="form-label">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        value={location}
                        id="locationField"
                        placeholder="Input location"
                        onChange={
                            (e) => {
                                setLocation(e.target.value);
                            }
                        }
                    />
                </div>

                <div className="mb-3">
                    <label for="departmentField" className="form-label">Department</label>
                    <input
                        type="text"
                        className="form-control"
                        value={department}
                        id="departmentField"
                        placeholder="Input department"
                        onChange={
                            (e) => {
                                setDepartment(e.target.value);
                            }
                        }
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    id="SaveField"
                    onClick={(e) => saveEmployee(e)}>Save
                </button>

                <p id="error">{error && <p className="error">{error}</p>}</p>
            </form>
        </div>
    );
};

export default AddEmployee;