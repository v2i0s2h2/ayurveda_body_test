import queations from "./Queations";

function QuestionDiv({queation, increaseA, increaseB, increaseC, A}){
    return(
 
        <div className="card">
          <h2>{queation.Q}</h2>

          <div onClick={increaseA} style={{cursor:"pointer"}} >

            <h2>{queation.A} </h2>
          </div>

          <div onClick={increaseB} style={{cursor:"pointer"}} >
            <h2>{queation.B} </h2>
            {console.log(A)}
          </div>

          <div onClick={increaseC} style={{cursor:"pointer"}} >
            <h2>{queation.C} </h2>
          </div>

        </div>
    )
}
export default QuestionDiv