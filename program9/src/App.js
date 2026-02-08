import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

const API_URL="http://localhost:5000/employees";

function App(){
  const [employees,setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
}, []);

const fetchEmployees=async() => {
  const response=await axios.get(API_URL);
  setEmployees(response.data);
};

const handleSave=async(employee) => {
  if(employee.id) {
    await axios.put(`${API_URL}/${employee.id}`,employee);
  } else {
    await axios.post(API_URL, employee);
  }
  fetchEmployees();
  setCurrentEmployee(null);
};


