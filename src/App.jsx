
import {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() {
  const [theme, settheme] = useState("light")
const togglemode=
()=>{
  if(theme==="light"){

    settheme('dark')
  }
  else{
    settheme('light')
  }
}
  return (
  <>
<Navbar theme={theme} />
<Textarea theme={theme} func={togglemode}/>
  </>
      
  )
}

export default App
