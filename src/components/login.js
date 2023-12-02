import React, {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const [empid, setEmpid]=useState(0); 
    const [Password, setPassword]=useState(""); 
   let navigate = useNavigate();
   useEffect(() => {
        
    if(localStorage.getItem("token")){
        navigate('/login');
    }
    // eslint-disable-next-line
}, [])  

    const handleSubmit = async(e) => {
        e.preventDefault();
        let item={"empid":empid,"Password":Password};
        console.log(item)
        let result = await fetch("http://localhost:5000/api/admin/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    
                },
                body: JSON.stringify(item)
            })
            result = await result.json();
            console.log(result)
            localStorage.setItem('token', result.authtoken)
            
            if(result.authtoken){
                navigate('/AddCoordinator');
            }

    } 
   


    return (
        <div>
            <h2>Login as Admin</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="empid" className="form-label">Empid</label>
                    <input type="number" className="form-control"onChange={(e)=> setEmpid(e.target.value)} id="empid" name="empid" aria-describedby="empidHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="Password" className="form-control" onChange={(e)=> setPassword(e.target.value)} name="Password" id="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                
            </form>
        </div>
    )
}

export default Login
