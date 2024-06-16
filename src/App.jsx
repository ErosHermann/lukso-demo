import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './pages/FormPage.jsx';
import MainPage from './pages/MainPage.jsx';
import TutorialPage from './pages/TutorialPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';



function App() {

  return(
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route index element={<MainPage/>} />
          <Route path="home" element={<MainPage />} />
          <Route path="submit" element={<FormPage />} />
          <Route path="tutorial" element={<TutorialPage />} />
          <Route path="/bet/:id" element={<ProfilePage />} />

          <Route path="*" element={<ErrorPage />} />  

        </Routes>




      </Router>
      
      
    </>
  )
  

}

export default App
