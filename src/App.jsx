import Home from './components/Home'
import Header from './components/Home/Header'
import Product from './components/Product/Product'
import './style/app.css'

function App() {
  

  return (
  <div className='app'>
    <Header></Header>
    <Home></Home>
    <Product></Product>
  </div>
  )
}

export default App
