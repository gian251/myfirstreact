import httpclient from "../commons/httpclient";

const getEmployees = () =>{
    return httpclient.get('/employees');
}

const postEmployee = (data) =>{
    return httpclient.post('/employees', data);
}

const putEmployee = (data) =>{
    return httpclient.put('/employees', data);
}

const getEmployee = (employeeid) =>{
    return httpclient.get(`/employees/${employeeid}`);
}

const deleteEmployee = (employeeid) => {
    return httpclient.delete(`/employees/${employeeid}`); 
}

export default {getEmployees, postEmployee, putEmployee, getEmployee, deleteEmployee}