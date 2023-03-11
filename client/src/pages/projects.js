import React, {useState} from 'react'
import Link from 'next/link'

export default function ProjectsCreate(){
    
    const [input, setInput] = useState({
        creationDate:"",
        description:"",
        usedMaterials:"",
        hoursMen:"",
        note:""
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
      alert("Project created!!!")
      setInput({
        creationDate:"",
        description:"",
        usedMaterials:"",
        hoursMen:"",
        note:""
     })
    }


  return (
    <div>

<div className="home">
<div className="derecha">
    <Link href= '/home'><button className="color">Return</button></Link>
</div>
<h1>Create Projects</h1>
<form onSubmit={(e)=>handleSubmit(e)}>
   <div>
                   <label>Creation Date:</label>
                   <input 
                  type="date" 
                    value= {input.creationDate}
                    name= "creationDate" 
                    onChange={(e)=> handleChange(e)}
                    />
           
              </div>

              
              <div>
                     <label>Description:</label>
                   <input 
                    type="text" 
                     value= {input.description}
                     name= "description"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div>
                     <label>Used Materials:</label>
                   <input 
                    type="text" 
                     value= {input.usedMaterials}
                     name= "usedMaterials"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

               <div>
                     <label>Hours Men:</label>
                   <input 
                    type="num" 
                     value= {input.hoursMen}
                     name= "hoursMen"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>
                <div>
                  <label>Note:</label>
                   <input 
                    type="text"    
                     value= {input.note}
                    name="note"
                  onChange={(e)=> handleChange(e)}
                  />
                  
               </div>
               
    </form>

    </div>
    </div>
  )
}
