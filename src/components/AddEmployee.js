import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";


const AddEmployee = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const{employeeid} = useParams();
    const[error, setError] = useState("")


    const saveEmployee = (e) =>{
        e.preventDefault();

        if(name && location && department){
            setError("");

            if(employeeid){
 
                const employee = {employeeid, name, location, department};
                employeeService.putEmployee(employee)

            
                .then(
                    response =>{
                        console.log("Employee has been updated", response.data)
                        navigate("/employees");
                    }
                )
                .catch(
                    error => {
                        console.error("ERROR");
                    }
                )
            }

            else{
          
		  
                const employee = {name, location, department};
                employeeService.postEmployee(employee) 

             
                .then(
                    response =>{
                        console.log("Employee has been added.", response.data)
                        navigate("/employees");
                    }
                )
                .catch(
                    error => {
                        console.error("ERROR");
                    }
                )
            }
        }
        else{
            console.error("Please complete the field boxes provided.")
            setError("Please complete the field boxes provided.")
        }
    }

    useEffect(
        () =>{
            if(employeeid){
                employeeService.getEmployee(employeeid) 
                .then(
                    employee =>{
                        setName(employee.data.name);
                        setLocation(employee.data.location);
                        setDepartment(employee.data.department);
                    }
                )
                .catch(
                    error =>{
                        console.error("ERROR", error)
                    }
                )
            }
        }
    )

    return (
        <div className = "container">
            <h3>Add Employee</h3>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={name}
                    id="name"
                    placeholder="Add employee name..."
                    onChange={
                        (e) => { 
                            setName(e.target.value)
                        }
                    }
                    />
                </div>
                <div className="mb-3">
                    <label for="location" className="form-label">Location:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={location}
                    id="location"
                    placeholder="Add employee location..."
                    onChange={
                        (e) => {
                            setLocation(e.target.value)
                        }
                    }/>
                </div>
                <div className="mb-3">
                    <label for="department" className="form-label">Department:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={department}
                    id="department"
                    placeholder="Add employee department..."
                    onChange={
                        (e) => {
                            setDepartment(e.target.value)
                        }
                    }/>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
                
                <p id="error">
                    {error && <p className="error">{error}</p>}  
                </p>
            </form>
        </div>
    )
}
export default AddEmployee;