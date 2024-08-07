import React from 'react'
import './Widget.css'
import ProjectNav from '../../Components/ProjectNav/ProjectNav'
import WidgetRightSide from '../../Components/WidgetRightSide/WidgetRightSide'

const Widget = () => {
  return (
    <div className='widget'>
      <ProjectNav/>
      <WidgetRightSide/>
    </div>
  )
}

export default Widget
