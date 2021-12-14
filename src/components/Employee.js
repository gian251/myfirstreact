import {Button} from "bootstrap"
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

    const deleteEmployee = (employeeid) => {
        let YN = window.confirm("Are you sure you want to delete this record?");

        if(YN){
            employeeService.deleteEmployee(employeeid)
            .then(
                response =>{
                    console.log("Employee record deleted.")
                    refreshEmployee();
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
            <h1>List of Employees</h1>
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
                                        <td align="left">{employee.name}</td>
                                        <td align="left">{employee.location}</td>
                                        <td align="left">{employee.department}</td>
                                        <td>
                                            <div className="d-grid gap-2 d-md-flex">
                                            <Link className="btn btn-primary" to={`/myfirstreact/edit/${employee.employeeid}`}>Update</Link>
                                            <button className="btn btn-danger" onClick={()=>deleteEmployee(employee.employeeid)}>Delete</button>
                                            </div>
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