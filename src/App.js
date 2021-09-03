import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, incrementByAmount} from "./redux/counter";
import './App.css';

function App() {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>Le compteur est : {count}</h1>
            <button onClick={() => dispatch(increment())}>Augmenter</button>
            <button onClick={() => dispatch(decrement())}>Diminuer</button>
            <button onClick={()=> dispatch(incrementByAmount(36))}>Augmente de ...</button>
        </div>
    );
}

export default App;
