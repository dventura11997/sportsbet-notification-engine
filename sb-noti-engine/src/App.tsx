import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage.jsx'
import Prefs from './pages/preferences.js'

//App Start-up: cd sb-noti-engine > npm run dev

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path='/' element={<HomePage />}/>
          <Route path='/prefs' element={<Prefs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
