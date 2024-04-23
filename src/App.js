import React from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, login } from "./actions";

function App(){
    const counter = useSelector((state) =>(state.counter));
    const isLoggin = useSelector((state) => state.isLoggin);
    const dispatch= useDispatch();

    return(
        <div className="App">
            <h1>HelloRedux</h1>
            <h3>カウント：{counter}</h3>
            <button onClick={()=>dispatch(increment(7))}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            {isLoggin ? <h3>ログイン成功</h3>:<h3>ログインしてください</h3>}
            <button onClick={()=>dispatch(login())}>ログインログアウト</button>
        </div>
    );
}

export default App;