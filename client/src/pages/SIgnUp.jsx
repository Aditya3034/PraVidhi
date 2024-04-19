import {Link , useNavigate} from 'react-router-dom';

import { useState } from 'react';
import OAuth from '../components/OAuth';



const SignUp = () => {

  const [fomrData, setFormData] = useState({});

  const [error, setError] = useState(null);

  const [loding, setLoding] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({
      ...fomrData, 
      [e.target.id]: e.target.value,
      userType : "farmer"
    })
  };

  
  const handelSubmit = async (e)=>{
    
    e.preventDefault();


    try {
      setLoding(true);

      console.log(fomrData);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fomrData),
      });

      const data = await res.json();
      
      if(data.success === false){
        setError(data.message);
        setLoding(false);
        return;
      }

      setLoding(false);

      setError(null);

      navigate('/sign-in')
      // console.log(data);

    } catch (error) {
      setLoding(false);
      setError(error.message);
    }

    
  
  }




  return (
    <div  className=' pt-28 max-w-5xl mx-auto'>
      
      <h1 className=' text-3xl text-center font-semibold my-7'>Sign Up</h1>
      
      <form onSubmit={handelSubmit} className=' grid grid-cols-2 gap-4'>
      
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange} required/>

        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} required/>

        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} required/>

        <input type="text" placeholder='address' className='border p-3 rounded-lg' id='address' onChange={handleChange} required/>
        
        <input type="text" placeholder='city' className='border p-3 rounded-lg' id='city' onChange={handleChange} required/>

        <input type="number" placeholder='contact' className='border p-3 rounded-lg' id='contact'  onChange={handleChange} required/>

        <input type="state" placeholder='state' className='border p-3 rounded-lg' id='state' onChange={handleChange} required/>
<div></div>
        <button disabled={loding} className=' bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loding? "Loding..." : "Sign up"}</button>
      
        {/* <OAuth/> */}

      </form>

      <div className=' flex gap-2 mt-5 justify-center'>
      
        <p>Have an Account?</p>
      
        <Link to={"/sign-in"} className=' text-blue-500'>
          Sign in
        </Link>


      
      </div>

      {error && <p className='text-red-500 mt-5'>{error}</p>}
    
    </div>
  )
}

export default SignUp