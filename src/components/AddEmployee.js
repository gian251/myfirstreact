import {useEffect,useState} from "react";
import {useNavigate,useParams} from "react-router";
import employeeService from "../services/employeeService";


const AddEmployee = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const{employeeId} = useParams();
    const[error, setError] = useState("")

  const saveEmployee = (e) => {
        e.preventDefault();

        if (name && location && department) {
            setError(''); 

            if (employeeId) {
                const employee = { employeeId, name, location, department };
                employeeService.putEmployee(employee) // promise
                    .then(
                        response => {
                            console.log('Employee record updated', response.data);
                            navigate('/myfirstreact/employees');
                        }
                    )
                    .catch(
                        err => {
                            console.error('ERROR', err)
                        }
                    )
            }

            else {
                const employee = { name, location, department };
                employeeService.postEmployee(employee) // promise
                    .then(
                        response => {
                            console.log('Employee record added', response.data)
                            navigate('/myfirstreact/employees')
                        }
                    )
                    .catch(
                        err => {
                            console.error('ERROR', err)
                        }
                    )
            }
        }


        else {
            console.error('Please fill up all field boxes.');
            setError('Please fill up all field boxes.');
        }
    }

    useEffect(
        () =>{
            if(employeeId){
                employeeService.getEmployee(employeeId)
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
        }, []
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
                    placeholder="Add employee's name..."
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
                    placeholder="Add employee's address..."
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
                    placeholder="Add employee's department..."
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