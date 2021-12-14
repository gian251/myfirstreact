import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import employeeService from "../services/employeeService"

const Employee = () =>{
    
    const[employees, setEmployees] = useState([]);
    
    useEffect(() =>{
        refreshEmployeeTable(); 
    })     
    
    const refreshEmployeeTable = () => {
        employeeService.getEmployees()
        .then(
            response =>{
                setEmployees(response.data);
            }
        )
    
        .catch(
            err =>{
                console.log("ERROR");
            }
        );
    };
    
    const deleteEmployee = (employeeId) =>{
        employeeService.deleteEmployee(employeeId)
        .then(
            response =>{
                console.log("Employee record deleted");
                refreshEmployeeTable();
            }
        )
        
        .catch(
            error =>{
                console.error("ERROR", error);
            }
        );
    };
    
    return(
            <div id="employee">
            <h3>List of Employees</h3>
            <div>
                <table border="1.5">
                            <td>Name</td>
                            <td>Location</td>
                            <td>Department</td>
                            <td>Actions</td>
                    {
                        employees.map(
                            employee => (
                                <tr key = {employee.employeeId}>
                                    <td>{employee.name}</td>
                                    <td>{employee.location}</td>
                                    <td>{employee.department}</td>
                                    <td>
                                        <div className="d-grid gap-2 d-md-flex justify-content-center">
                                            <Link 
                                            className="btn btn-outline-info" 
                                            to={`/myfirstreact/employees/edit/${employee.employeeId}`}>Update</Link>
                                            
                                            <div 
                                            className="btn btn-outline-warning" onClick={() =>deleteEmployee(employee.employeeId)}>Delete</div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default Employee