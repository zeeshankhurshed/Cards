
import './App.css'
import Home from './components/Home'
import {products} from './db/db.js'
function App() {


  return (
    <>
   <Home products={products}/>
    </>
  )
}

export default App
