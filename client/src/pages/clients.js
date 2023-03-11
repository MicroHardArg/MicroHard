import React, {useState} from 'react'
import Link from 'next/link'

export default function ClientsCreate(){
    
    const [input, setInput] = useState({
        name:"",
        cuit:"",
        email:"",
        fiscalAddress:"",
        contacPerson:"",
        phoneNumber:"",
        creationDate:""
     })

     function handleChange(e){
      setInput({
          ...input,
          [e.target.name] : e.target.value
      })
    }

    function handleSubmit(e){
      e.preventDefault();
      console.log(input)
      dispatch(postActivity(input))
      alert("Client created!!!")
      setInput({
        name:"",
        cuit:"",
        email:"",
        fiscalAddress:"",
        contacPerson:"",
        phoneNumber:"",
        creationDate:""
     })
    }


  return (
    <div>

<div className="home">
<div className="derecha">
    <Link href= '/home'><button className="color">Return</button></Link>
</div>
<h1>Create Clients</h1>
<form onSubmit={(e)=>handleSubmit(e)}>
   <div>
                   <label>Name:</label>
                   <input 
                  type="text" 
                    value= {input.name}
                    name= "name" 
                    onChange={(e)=> handleChange(e)}
                    />
           
              </div>

              
              <div>
                     <label>Cuit:</label>
                   <input 
                    type="num" 
                     value= {input.cuit}
                     name= "cuit"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div>
                     <label>email:</label>
                   <input 
                    type="text" 
                     value= {input.email}
                     name= "email"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

               <div>
                     <label>Fiscal Address:</label>
                   <input 
                    type="text" 
                     value= {input.fiscalAddress}
                     name= "fiscalAddress"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>
                <div>
                  <label>Contact Person:</label>
                   <input 
                    type="text"    
                     value= {input.contacPerson}
                    name="contactPerson"
                  onChange={(e)=> handleChange(e)}
                  />
                  
               </div>
               <div>
                  <label>Phone Number:</label>
                  <input 
                  type="num" 
                  value= {input.phoneNumber}
                  name="phoneNumber"
                 onChange={(e)=> handleChange(e)}
                   />
                    
                </div>

                <div>
                  <label>Creation Date:</label>
                  <input 
                  type="date" 
                  value= {input.creationDate}
                  name="creationDate"
                 onChange={(e)=> handleChange(e)}
                   />
                    
                </div>
    </form>

    </div>
    </div>
  )
}







