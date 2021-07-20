import {createAsyncThunk} from '@reduxjs/toolkit'

const fetchCart = createAsyncThunk(
    'fetchCart',

      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(result => {return result})
    
  )

  export default fetchCart