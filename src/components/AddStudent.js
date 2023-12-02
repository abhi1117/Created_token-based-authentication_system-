import React, {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import MyComponent from './showAlert';


function AddFaculty() {
    const [rollNo, setRollNo]=useState(0); 
    const [name, setName]=useState("")
    const [Password, setPassword]=useState(""); 
    const [attendence, setAttendence]=useState("")
    const [sub1, setsub1]=useState("")
    const [sub2, setsub2]=useState("")
    const [sub3, setsub3]=useState("")
    let navigate = useNavigate();

    

    const handleSubmit = async(e) => {
        e.preventDefault();
        let item={"rollNo": rollNo, "name": name, "Password":Password, "attendence": attendence,
         "sub1": sub1, "sub2":sub2, "sub3":sub3};
        console.log(item)
        let result = await fetch("http://localhost:5000/api/updatedelstudent/addstudents", {
                method: 'POST',
                
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({rollNo, name, Password, attendence, sub1, sub2, sub3})
            })
            result = await result.json();
            console.log(result)
            localStorage.setItem('message', "login sucessfull")
            navigate('/AddStudent');

    }    
    useEffect(() => {
        
        if(localStorage.getItem("token")){
            navigate('/AddStudent');
        }
        // eslint-disable-next-line
    },[])


  return (
    <div className='container'>
        <h1>Add Student</h1><br/>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="rollNo" className="form-label">rollNo</label>
    <input type="number" className="form-control" onChange={(e)=> setRollNo(e.target.value)} id="rollNo" />
  </div>
  <div className="mb-3">
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=> setName(e.target.value)} id="Name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="Password" className="form-control" onChange={(e)=> setPassword(e.target.value)} id="Password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="attendence" className="form-label">attendence</label>
    <input type="text" className="form-control" onChange={(e)=> setAttendence(e.target.value)} id="attendence"/>
  </div>
  <div className="mb-3">
    <label htmlFor="subject" className="form-label">Subject1</label>
    <input type="text" className="form-control" onChange={(e)=> setsub1(e.target.value)} id="subject1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="subject" className="form-label">Subject2</label>
    <input type="text" className="form-control" onChange={(e)=> setsub2(e.target.value)} id="subject2"/>
  </div>
  <div className="mb-3">
    <label htmlFor="subject" className="form-label">Subject3</label>
    <input type="text" className="form-control" onChange={(e)=> setsub3(e.target.value)} id="subject3"/>
  </div>
  
  <button type="submit" className="btn btn-primary"onSubmit={MyComponent}>Submit</button>
  
</form>
    </div>
  )

}

export default AddFaculty
