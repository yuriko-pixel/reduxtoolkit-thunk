import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import todoSlice from './reducer';
import fetchCart from './fetch';
import { fetchPlayerList } from "./reducer";


function App() {
  const data = useSelector(state => state.cart.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlayerList())
  }, [])
  return (
    <div className="App">
      {data.length === undefined? (<p>Loading</p>):(data.map(i=><p>{i.title}</p>))}
    </div>
  );
}

export default App;
