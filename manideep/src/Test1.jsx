import { useState } from "react";
function Test1(){
    const [data, setData]=useState({
        username:"",
        password:""
    })
    const {username,password}=data;
    const onChange=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
    }
    
    const submitHandler=e=>{
        e.preventDefault();
        }
    return(
        <div>
         <form onSubmit={submitHandler}>
        Enter the userName:<br/>
    <input type="text" placeholder="userName" value={username} onChange={onChange}/>
       <br/> Enter the passWord:<br/>
    <input type="password"placeholder="password" value={password} onChange={onChange}/>
   <br/><br/> <input type="submit" value="submit"/>
         </form>
        </div>
    )
}
export default Test1;