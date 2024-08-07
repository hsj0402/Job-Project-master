import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Widget from './Pages/Widget/Widget';
import Upload from './Components/Upload/Upload';
import Setting from './Pages/Setting/Setting';
import EditTranscript from './Components/EditTranscript/EditTranscript';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/upload/:projectId" element={<Upload />} />
          <Route path="/widget-configurations" element={<Widget />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/edit-transcript/:uploadId" element={<EditTranscript />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
