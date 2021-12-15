import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import employeeService from "../services/employeeService"



const Employee = () =>{
    const[employees, setEmployees] = useState([])

    useEffect(
        () => {
            refreshEmployee();
        }
    )

    const refreshEmployee = () =>{
        employeeService.getEmployees() 
            .then(
                response =>{
                    setEmployees(response.data)
                }
            )
            .catch(
                console.log("Hello")
            )
    }

    const deleteEmployee = (employeeId) => {
        let YN = window.confirm("Are you sure you want to delete this record?");

        if(YN){
            employeeService.deleteEmployee(employeeId)
            .then(
                response =>{
                    console.log("Employee record deleted.")
                }
            )
            .catch(
                error =>{
                    console.error("ERROR", error);
                }
            )
        }
    }

    return(
        <div>
            <h2>List of Employees</h2>
            <div className="container">
                <table className="table table-hover table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Location</td>
                            <td>Department</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee => (
                                    <tr className="table-light"> 
                                        <td>{employee.name}</td>
                                        <td>{employee.location}</td>
                                        <td>{employee.department}</td>
                                        <td id="actions">
                                            <Link className="btn btn-primary" to={`/myfirstreact/employees/edit/${employee.employeeId}`}>Update</Link>
                                            <button className="btn btn-danger" onClick={()=>deleteEmployee(employee.employeeId)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee;