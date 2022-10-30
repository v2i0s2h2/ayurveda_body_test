import queations from "./Queations";
import "./App.css";
import { useState } from "react";
import QuestionDiv from "./QuestionDiv";


const ListPeople =()=>{
const [people, newPeople] = useState(["vishnu"])
const [inputValue, newInputValue]=useState("")

// jo actually me people array ko laba krega vo hai newpeole
  // jo form se vlue layega vo hai newinputvalue 

function NewInputValue (name){
  newInputValue(name)
}

function NewPeople(){
  const NewArray = [...people, inputValue]
  newPeople(NewArray)
}

return(
  <>
  <div>
     <input type="text" onChange={(e)=>NewInputValue(e.target.value) } />
   </div>
  
  <div  > 
    <button onClick={NewPeople} >Add to list</button>
  </div>

<div>
<ul>
  {people.map((peo,index)=>(
<li key={index} >{peo}</li>
  ))}
</ul>
</div>
  </>
)

}

function App() {
 
const [A , incrementA] = useState(0)
const [B , incrementB] = useState(0)
const [C , incrementC] = useState(0)

const increaseA = ()=> incrementA(A+1)
const increaseB = ()=> incrementB(C+1)
const increaseC = ()=> incrementC(C+1)


  return (
    <>
    <ListPeople/>
    <h1>A : { A} </h1>
    <h1>B : {B } </h1>
    <h1>C : {C } </h1>
      {"Learn React" }
      {queations.map((queation) => (
        <QuestionDiv queation={queation}
         increaseA={increaseA} 
         increaseB={increaseB}
         increaseC={increaseC} 
         A={A} />
         
      ))}
    </>
  );
}

export default App;
