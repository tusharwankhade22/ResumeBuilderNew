import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Pages/Home'
import Preview from './Pages/Preview'
import Editor from './Pages/Editor'
import Signup from './Components/Signup'
import PersonalDetails from './EditorComp/PersonalDetails'
import ProfileSummary from './EditorComp/ProfileSummary'
import Experience from './EditorComp/Experience'
import Education from './EditorComp/Education'
import Projects from './EditorComp/Projects'
import Skills from './EditorComp/Skills'
import Languages from './EditorComp/Languages'
import SocialMedia from './EditorComp/SocialMedia'



function App() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/home' element={<Home/>}/>
             <Route path='/preview' element={<Preview/>}/>
             <Route path='/editor' element={<Editor/>}>
                 <Route path='/editor/pd' element={<PersonalDetails/>}/>
                 <Route path='/editor/ps' element={<ProfileSummary/>}/>
                 <Route path='/editor/exp' element={<Experience/>}/>
                 <Route path='/editor/edu' element={<Education/>}/>
                 <Route path='/editor/proj' element={<Projects/>}/>
                 <Route path='/editor/skill'element={<Skills/>}/>
                 <Route path='/editor/lang' element={<Languages/>}/>
                 <Route path='/editor/sml' element={<SocialMedia/>}/>
             </Route>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App