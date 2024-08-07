
// import React, { useState, useContext } from 'react';
// import './WidgetRightSide.css';
// import { ProjectContext } from '../../Context/ProjectContext';

// const WidgetRightSide = () => {
//   const [activeTab, setActiveTab] = useState('general');
//   const { projectName } = useContext(ProjectContext);
//   const [isOn, setIsOn] = useState(false);

//   const toggleSwitch = () => {
//     setIsOn(!isOn);
//   };

//   return (
//     <div className="widget-content">
//       <div className="widget-content-header">
//         <div className="breadcrumb">/ {projectName}/ <span>Widget Configuration</span></div>
//         <div className="language-selector">
//           EN <span className="flag">🇬🇧</span>
//           <i className="fa-regular fa-bell"></i>
//         </div>
//       </div>
//       <div className="widget-header">
//         <h2>Configuration</h2>
//         <div className="widget-tabs">
//           <span
//             className={activeTab === 'general' ? 'active' : ''}
//             onClick={() => setActiveTab('general')}
//           >
//             General
//           </span>
//           <span
//             className={activeTab === 'display' ? 'active' : ''}
//             onClick={() => setActiveTab('display')}
//           >
//             Display
//           </span>
//           <span
//             className={activeTab === 'advanced' ? 'active' : ''}
//             onClick={() => setActiveTab('advanced')}
//           >
//             Advanced
//           </span>
//         </div>
//       </div>
//       <div className="line"></div>
//       {activeTab === 'general' && (
//         <div className="widget-tab-content">
//           <label>Chatbot Name</label>
//           <input type="text" placeholder="Lorem ipsum dolor sit Lorem ipsum dolor sit" />
//           <label>Welcome Message</label>
//           <input type="text" placeholder="Lorem ipsum dolor sit Lorem ipsum dolor sit" />
//           <label>Input Placeholder</label>
//           <input type="text" placeholder="Lorem ipsum dolor sit Lorem ipsum dolor sit" />
//         </div>
//       )}
//       {activeTab === 'display' && (
//         <div className="widget-tab-content">
//           <div className="widget-row">
//             <div className="widget-column">
//               <label>Primary Color</label>
//               <input type="text" placeholder="#7BD568" />
//             </div>
//             <div className="widget-column">
//               <label>Font Color</label>
//               <input type="text" placeholder="#3C3C3C" />
//             </div>
//           </div>
//           <div className="widget-tab-content1">
//             <div className="widget-row">
//               <div className="widget-column1">
//                 <label>Font Size (in px)</label>
//                 <input type="text" placeholder="25" />
//               </div>

//               <div className="widget-column1">
//                 <label>Chat Height (in % of total screen)</label>
//                 <input type="text" placeholder="Lorem ipsum" />
//               </div>
//             </div>
//             <div className="toggle-main">
//               <label>Show Sources</label>
//               <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
//                 <div className="toggle"></div>
//               </div>
//             </div>
//           </div>
//           <div className="line"></div>
//           <div className="widget-row">
//             <div className="widget-column">
//               <label>Chat Icon Size</label>
//               <select>
//                 <option>Small (48x48 px)</option>
//                 <option>Medium (48x48 px)</option>
//                 <option>Large (48x48 px)</option>
//               </select>
//             </div>
//             <div className="widget-column">
//               <label>Position on Screen</label>
//               <select>
//                 <option>Bottom Right</option>
//                 <option>Bottom Right</option>
//                 <option>Bottom Right</option>
//                 <option>Bottom Right</option>
//               </select>
//             </div>
//           </div>
//           <div className="widget-row">
//             <div className="widget-column">
//               <label>Distance from Bottom (in px)</label>
//               <input type="text" placeholder="20" />
//             </div>
//             <div className="widget-column">
//               <label>Horizontal Distance (in px)</label>
//               <input type="text" placeholder="20" />
//             </div>
//           </div>
//           <div className="widget-column">
//             <label>Bot Icon</label>
//             <button>Upload Image</button>
//             <p>Recommended Size: 48x48px</p>
//           </div>
//         </div>
//       )}
//       {activeTab === 'advanced' && (
//         <div className="widget-tab-content">
//           {/* Advanced settings content here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WidgetRightSide;





import React, { useState, useContext } from 'react';
import './WidgetRightSide.css';
import { ProjectContext } from '../../Context/ProjectContext';

const WidgetRightSide = () => {
  const [activeTab, setActiveTab] = useState('general');
  const { projectName } = useContext(ProjectContext);
  const [isOn, setIsOn] = useState(false);
  
  // State for color pickers
  const [primaryColor, setPrimaryColor] = useState('#7BD568');
  const [fontColor, setFontColor] = useState('#3C3C3C');

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const handlePrimaryColorChange = (e) => {
    setPrimaryColor(e.target.value);
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  return (
    <div className="widget-content">
      <div className="widget-content-header">
        <div className="breadcrumb">/ {projectName}/ <span>Widget Configuration</span></div>
        <div className="language-selector">
          EN <span className="flag">🇬🇧</span>
          <i className="fa-regular fa-bell"></i>
        </div>
      </div>
      <div className="widget-header">
        <h2>Configuration</h2>
        <div className="widget-tabs">
          <span
            className={activeTab === 'general' ? 'active' : ''}
            onClick={() => setActiveTab('general')}
          >
            General
          </span>
          <span
            className={activeTab === 'display' ? 'active' : ''}
            onClick={() => setActiveTab('display')}
          >
            Display
          </span>
          <span
            className={activeTab === 'advanced' ? 'active' : ''}
            onClick={() => setActiveTab('advanced')}
          >
            Advanced
          </span>
        </div>
      </div>
      <div className="line"></div>
      {activeTab === 'general' && (
        <div className="widget-tab-content">
          <label>Chatbot Name</label>
          <input type="text" placeholder="Lorem ipsum dolor sit Lorem ipsum dolor sit" />
          <label>Welcome Message</label>
          <input type="text" placeholder="Lorem ipsum dolor sit Lorem ipsum dolor sit" />
          <label>Input Placeholder</label>
          <input type="text" placeholder="Lorem ipsum dolor sit Lorem ipsum dolor sit" />
        </div>
      )}
      {activeTab === 'display' && (
        <div className="widget-tab-content">
          <div className="widget-row">
            <div className="widget-column">
              <label>Primary Color</label>
              <div className="color-picker-container">
                <input
                  type="text"
                  value={primaryColor}
                  onChange={handlePrimaryColorChange}
                />
                <input
                  type="color"
                  value={primaryColor}
                  onChange={handlePrimaryColorChange}
                />
              </div>
            </div>
            <div className="widget-column">
              <label>Font Color</label>
              <div className="color-picker-container">
                <input
                  type="text"
                  value={fontColor}
                  onChange={handleFontColorChange}
                />
                <input
                  type="color"
                  value={fontColor}
                  onChange={handleFontColorChange}
                />
              </div>
            </div>
          </div>
          <div className="widget-tab-content1">
            <div className="widget-row">
              <div className="widget-column1">
                <label>Font Size (in px)</label>
                <input type="text" placeholder="25" />
              </div>

              <div className="widget-column1">
                <label>Chat Height (in % of total screen)</label>
                <input type="text" placeholder="Lorem ipsum" />
              </div>
            </div>
            <div className="toggle-main">
              <label>Show Sources</label>
              <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
                <div className="toggle"></div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="widget-row">
            <div className="widget-column">
              <label>Chat Icon Size</label>
              <select>
                <option>Small (48x48 px)</option>
                <option>Medium (48x48 px)</option>
                <option>Large (48x48 px)</option>
              </select>
            </div>
            <div className="widget-column">
              <label>Position on Screen</label>
              <select>
                <option>Bottom Right</option>
                <option>Bottom Right</option>
                <option>Bottom Right</option>
                <option>Bottom Right</option>
              </select>
            </div>
          </div>
          <div className="widget-row">
            <div className="widget-column">
              <label>Distance from Bottom (in px)</label>
              <input type="text" placeholder="20" />
            </div>
            <div className="widget-column">
              <label>Horizontal Distance (in px)</label>
              <input type="text" placeholder="20" />
            </div>
          </div>
          <div className="widget-column">
            <label>Bot Icon</label>
            <button>Upload Image</button>
            <p>Recommended Size: 48x48px</p>
          </div>
        </div>
      )}
      {activeTab === 'advanced' && (
        <div className="widget-tab-content">
          {/* Advanced settings content here */}
        </div>
      )}
    </div>
  );
};

export default WidgetRightSide;

