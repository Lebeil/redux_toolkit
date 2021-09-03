import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, incrementByAmount, selectCount } from "./redux/counter";
import './App.css';

function App() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount , setIncrementAmount] = useState('2');

    return (
        <div className="App">
            <h1>Le compteur est : {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <input
                aria-label="Set increment amount"
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}
            />
            <button onClick={()=> dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Augmente</button>
        </div>
    );
}

export default App;
