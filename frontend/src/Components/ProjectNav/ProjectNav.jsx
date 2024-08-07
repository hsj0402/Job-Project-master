import React from 'react';
import './ProjectNav.css';
import logo1 from '../Assets/logo1.png'
import { Link } from 'react-router-dom';

const ProjectNav = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={logo1} alt="Lama Logo" className="logo" />
                {/* <h1>LAMA.</h1> */}
            </div>
            <div className="nav-section">
                <h2>Podcast Upload Flow</h2>
                <div className="list">

                    <div className="nav-item active"><span>1</span> Projects</div>

                    {/* <div className="nav-item"><span>2</span> Widget Configurations</div> */}
                    <div className="nav-item">
                        <Link to="/widget-configurations">
                            <span>2</span> Widget Configurations
                        </Link>
                    </div>
                    <div className="nav-item"><span>3</span> Deployment</div>
                    <div className="nav-item"><span>4</span> Pricing</div>
                    <div className="settings nav-item">
                        <div>
                            <Link to="/setting">
                                <span><i class="fa-solid fa-gear"></i></span> Settings
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default ProjectNav;


