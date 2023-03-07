import React from 'react'
import { useState } from 'react';
import Card from './components/Card';
function App() {
  const defaultdata = {
    carddata: "",
    bucket: "",
    link: ""
  };
  const [data, setdata] = useState({
    carddata: "",
    bucket: "",
    link: ""
  });
  const [env, setenv] = useState([]);
  const [edv, setedv] = useState([]);
  function submithandler(event)
  {
    event.preventDefault();
    console.log(data);
    if(data.bucket === "Entertainment Videos")
    {
      setenv([...env,{data: data.carddata,link: data.link}]);
    }
    else if(data.bucket === "Educational Videos")
    {
      setedv([...edv,{data: data.carddata,link: data.link}]);
    }
    setdata(defaultdata);
  }
  let name, value;
  const handleInputs = (e) =>
  {
    name = e.target.name;
    value = e.target.value;
    setdata({...data,[name]:value})
  }
  const cancelallhandlerenv =() => {
    setenv([]);
  };
  const cancelallhandleredv =() => {
    setedv([]);
  };
  return (
    <div className=' h-screen bg-gray-900 overflow-auto font-rubik '>
      <form onSubmit={submithandler} className= 'h-52 flex  flex-col sm:flex-row justify-center items-center flex-wrap' >
        <input type="text" name='carddata' id='carddata' value={data.carddata} onChange={handleInputs} placeholder='Enter card value' className='m-2 block h-8 w-auto rounded-md border-2 p-2 shadow-xl outline-none hover:border-blue-300 focus:border-blue-300 md:w-1/5 ' />
        <input type="text" name='link' id='link' value={data.link} onChange={handleInputs} placeholder='Enter youtube embeded link' className='m-2 block h-8 w-auto rounded-md border-2 p-2 shadow-xl outline-none hover:border-blue-300 focus:border-blue-300 md:w-1/5 ' />
        <select autoComplete='off' name="bucket" id='bucket' value={data.bucket} onChange={handleInputs} className='outline-none h-8 border-2 focus:border-blue-300 rounded-lg m-2'>
          <option >Select from below</option>
          <option >Entertainment Videos</option>
          <option >Educational Videos</option>
        </select>
        <button type='submit' className=' bg-green-400 h-8 w-20 rounded-lg text-white '>submit</button>
      </form>
      <div className='flex justify-center justify-evenly flex-col sm:flex-row'>
          <div>
            <h1 className='text-white text-center border-b-2 p-2 text-2xl'>Entertainment Videos</h1>
            <div className='flex justify-center mt-2'>
            <button onClick={cancelallhandlerenv} className='h-8 m-1 rounded-md w-20 bg-red-500 text-white'>clear all</button>
            </div>
            {env.map((x) => (
                <Card data={x.data} link={x.link}/>
              ))}
          </div>
          <div>
            <h1 className='text-white text-center border-b-2 p-2 text-2xl'>Educational Videos</h1>
            <div className='flex justify-center mt-2'>
            <button onClick={cancelallhandleredv} className='h-8 m-1 rounded-md w-20 bg-red-500 text-white'>clear all</button>
            </div>
            {edv.map((x) => (
                <Card data={x.data} link={x.link}/>
              ))}
          </div>
      </div>
    </div>
  )
}

export default App