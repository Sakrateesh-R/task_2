import {useState,useEffect} from "react";
import  {Table, Container, Row, Col, Button, ButtonGroup, Form, Navbar, NavbarBrand, FormGroup} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import '../App.css';
//import Login from "./Login";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
const api = "https://react-admin-functionality.herokuapp.com/Users";

function Signup() {
  const[data, getData] = useState([]);

  const navigate = useNavigate();
  useEffect( ()=>{
    loadData();
    /*console.log(loadData());*/
  },[])

  const loadData = async () =>{
    const response = await axios.get(api);
    getData(response.data)
  };
  
  const handleDelete = (id) =>{
    axios.delete(`${api}/${id}`);
    toast.error('Data Deleted Sucessfully');
    setTimeout( loadData, 500);
  }
  //Form handling
  const[formData, setFormData] = useState({
    FirstName:'',
    LastName : '',
    Username:'',
    Password:'',
    Age:'',
    Role : '',
    Address : '',
    Phone : ''
  });
 
  const handleChange =(e)=>{
    const{name,value}  = e.target;
    console.log(value)
    setFormData({...formData,[name]:value});
  }
  //Submit data

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!formData.FirstName ||!formData.LastName || !formData.Role || !formData.Address ||!formData.Phone || !formData.Age || !formData.Username || !formData.Password){
      toast.error('Fields Should not be Empty');
    }else{

      if(edit){
        axios.put(`${api}/${userId}`,formData);
        toast.success("Data Updated successfully");
        setFormData({
          FirstName:'',
          LastName : '',
          Username:'',
          Password:'',
          Age:'',
          Role : '',
          Address : '',
          Phone : ''
        })
        setEdit(false);
        setUserId(null);
        setTimeout(loadData,500);
        

      }else{
        axios.post(api,formData);
        toast.success("Data Added Sucessfully");
        setFormData({
          FirstName:'',
          LastName : '',
          Username:'',
          Password:'',
          Age:'',
          Role : '',
          Address : '',
          Phone : ''
        })
        setTimeout(loadData,500);
        const redirect = async() =>{
           await setTimeout(navigate(`/login`),1000)
        }
        setTimeout(redirect,5000);
      }
    }
  }
  //Edit /Update functionality
  const[userId, setUserId] =useState(null)
  const[edit,setEdit] = useState(false)
  const handleEdit = (id) =>{
    const singleUser = data.find(item => item.id === id);
    setFormData(singleUser);
    setUserId(id);
    setEdit(true);
  }

  return (
    <>
    
        <ToastContainer />
        <Navbar bg="primary" variant="dark" className="justify-content-center">
          <Navbar.Brand >
            <b>Welcome User Signup to proceed forward...</b>
          </Navbar.Brand>
        </Navbar>
        <div > 
          <Row className="Signup-container">
            <Col md="5">
              <h2><center>Signup </center></h2>
              <FormGroup>
                <Form.Label>FirstName : </Form.Label>
                <Form.Control type="text" name="FirstName" id="FirstName" value={formData.FirstName} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>LastName : </Form.Label>
                <Form.Control type="text" name="LastName" id="LastName" value={formData.LastName} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>UserName : </Form.Label>
                <Form.Control type="text" name="Username" id="Username" value={formData.Username} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>Password : </Form.Label>
                <Form.Control type="password" name="Password" id="Password" value={formData.Password} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>Age : </Form.Label>
                <Form.Control type="number" name="Age" id="Age" value={formData.Age} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>Role : </Form.Label>
                <Form.Control type="text" name="Role" id="Role" value={formData.Role} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>Phone No : </Form.Label>
                <Form.Control type="number" name="Phone" id="Phone" value={formData.Phone} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>Address : </Form.Label>
                <Form.Control type="text" name="Address" id="Address" value={formData.Address} onChange={handleChange} />
              </FormGroup>
              <div className="d-grid gap-2" style={{marginTop:"10px"}}>
                <Button variant="primary" size="lg" onClick={handleSubmit}>{edit ? "Update":"Submit"}</Button>
              </div>
            </Col>
            
          </Row>
        </div>
    </>
      
      
  );
}

export default Signup;