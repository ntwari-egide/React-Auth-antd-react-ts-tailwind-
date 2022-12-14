import './App.css'
import {
  Routes,
  BrowserRouter as Router,
  Route

} from 'react-router-dom'
import WelcomePage from './views/Welcome'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  )
}

export default App
