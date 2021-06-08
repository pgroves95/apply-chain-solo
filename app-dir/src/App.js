import {useEffect} from 'react'
import './App.css';
import WebFont from 'webfontloader'
import Nav from './components/Nav'



function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Marcellus', 'Dosis', 'Mitr']
      }
    })
  },[])
  return (
    <div>
      <Nav />
    </div>
  )
}

export default App;
