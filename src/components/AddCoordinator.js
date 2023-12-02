import React, {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function AddCoordinator() {
    const [empid, setEmpid]=useState(0); 
    const [name, setName]=useState("")
    const [Password, setPassword]=useState(""); 
    let navigate = useNavigate();

    

    const handleSubmit = async(e) => {
        e.preventDefault();
        let item={"empid":empid,"name": name,"Password":Password};
        console.log(item)
        let result = await fetch("http://localhost:5000/api/updatedelcoordinator/addcoordinators", {
                method: 'POST',
                
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({empid, name, Password})
            })
            result = await result.json();
            console.log(result)
           document.getElementById(empid)
            localStorage.setItem('message', "login sucessfull")
            navigate('/AddCoordinator');

    }    
    useEffect(() => {
        
        if(localStorage.getItem("token")){
            navigate('/AddCoordinator');
        }
        // eslint-disable-next-line
    },[])


  return (
    <div className='container'>
        <h1>Add Coordinator</h1><br/>
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
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )

}

export default AddCoordinator
