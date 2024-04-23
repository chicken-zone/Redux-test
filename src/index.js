import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import{ createStore} from "redux";
import allReducers from './reducers';
import { Provider } from 'react-redux';

// // actions -> increment,decrement
//   const increment = () =>{
//     return{
//       type:"INCREMENT",
//     };
//   };
//   const decrement = () =>{
//     return{
//       type:"DECREMENT",
//     };
//   };

// // reducer　=>アクションと前の状態を組み合わせて新しい状態に更新する
//   const counterReducer = (state = 0,action) =>{
//     switch(action.type){
//       case "INCREMENT":
//         return state + 1;
//       case "DECREMENT":
//         return state - 1;
//     }
//   };

// // store
//   let store = createStore(counterReducer)


//   // コンソールに新しい状態を感知して出力する処理、今は使われていない記述
//   store.subscribe(() => console.log(store.getState()));

//   // Dispatch
//   store.dispatch(increment());
//   store.dispatch(increment());
//   store.dispatch(decrement());
//   store.dispatch(decrement());
//   store.dispatch(decrement());

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
