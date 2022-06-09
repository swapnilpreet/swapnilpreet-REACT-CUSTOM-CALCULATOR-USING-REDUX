import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_VALUE,
  CLEAR_VALUE,
  DECREMENT_VALUE,
  DIVIDE_VALUE,
  INCREMENT_VALUE,
  MULTIPLY_VALUE,
  SUBTRACT_VALUE,
} from "./store/action.type";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const [inputvalue, setinputvalue] = useState("");
  const payload = useSelector((state) => (state.payload = inputvalue));
  console.log(count,"payload", payload);

  return (
    <div className="App">
      <div>
        <h2 className="heading">Display: {count}</h2>
      </div>
      <input
        type="text"
        placeholder="Enter value here"
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
      />
     

      <button
        onClick={() => dispatch({ type: ADD_VALUE, payload: inputvalue })}
      >
        ADD
      </button>
      <div style={{display: "flex", marginLeft:"35%",marginTop:"50px",gap: "20px"}}>

     
      <button onClick={() => dispatch({ type: INCREMENT_VALUE })}>
        INCREMENT BY 1
      </button>
      <button onClick={() => dispatch({ type: DECREMENT_VALUE })}>
        DECREMENT BY 1
      </button>
      <button onClick={() => dispatch({ type: MULTIPLY_VALUE })}>
        MULTIPLY
      </button>
      <button onClick={() => dispatch({ type: DIVIDE_VALUE })}>DIVIDE</button>
      
      <button onClick={() => dispatch({ type: SUBTRACT_VALUE })}>
        SUBTRACT
      </button>
      </div>
      <div style={{marginTop:"50px",}}>
      <button onClick={() => dispatch({ type: CLEAR_VALUE })}>CLAER DISPLAY</button>
      </div>
      
      
    </div>

  );
}

export default App;
