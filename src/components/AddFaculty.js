import React, {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function AddStudent() {
    const [empid, setEmpid]=useState(0); 
    const [name, setName]=useState("")
    const [Password, setPassword]=useState(""); 
    const [subject, setSubject]=useState("")
    let navigate = useNavigate();

    

    const handleSubmit = async(e) => {
        e.preventDefault();
        let item={"empid":empid,"name": name,"Password":Password, "subject":subject};
        console.log(item)
        let result = await fetch("http://localhost:5000/api/updatedelfaculty/addfaculty", {
                method: 'POST',
                
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({empid, name, Password, subject})
            })
            result = await result.json();
            console.log(result)
            localStorage.setItem('message', "login sucessfull")
            navigate('/AddFaculty');

    }    
    useEffect(() => {
        
        if(localStorage.getItem("token")){
            navigate('/AddFaculty');
        }
        // eslint-disable-next-line
    },[])


  return (
    <div className='container'>
        <h1>Add Faculty</h1><br/>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="Empid" className="form-label">Empid</label>
    <input type="number" className="form-control" onChange={(e)=> setEmpid(e.target.value)} id="Empid" />
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
    <label htmlFor="subject" className="form-label">Subject</label>
    <input type="text" className="form-control" onChange={(e)=> setSubject(e.target.value)} id="subject"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )

}

export default AddStudent
