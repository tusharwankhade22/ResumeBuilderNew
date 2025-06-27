import React from 'react'
import style from './Editor.module.css'
import { Link, Outlet } from 'react-router-dom'

function Edit() {
  return (
    <div className={style.editor}>
        <aside className={style.sidebar}>
            <ul>
               <Link to="/editor/pd"><li>Personal Details</li></Link>
               <Link to="/editor/ps"><li>Profile Summary</li></Link>
               <Link to="/editor/exp"><li>Experience</li></Link>
               <Link to="/editor/edu"><li>Education</li></Link>
               <Link to="/editor/proj"><li>Projects</li></Link>
               <Link to="/editor/skill"><li>Skills</li></Link>
               <Link to="/editor/lang"><li>Languages</li></Link>
               <Link to="/editor/sml"><li>Social Media Links</li></Link>
            </ul>
        </aside>
        <main className={style.main}>
            <Outlet/>
        </main>
    </div>
  )
}

export default Edit