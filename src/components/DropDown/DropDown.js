import React from 'react'

import { poseImages } from '../../utils/pose_images'

import './DropDown.css'

export default function DropDownList({ poseList, currentPose, setCurrentPose }) {
return (
        <div
        className='dropdown dropdown-container'
         
      >
        <button 
            className="btn btn-secondary dropdown-toggle"
            type='button'
            data-bs-toggle="dropdown"
            id="pose-dropdown-btn"
            aria-expanded="false"
        >{currentPose}
        </button>
        <ul className="dropdown-menu dropdown-custom-menu" aria-labelledby="dropdownMenuButton1">
            {poseList.map((pose, index) => (
                <li key={index} onClick={() => setCurrentPose(pose)}>
                    <div className="dropdown-item-container">
                        <p className="dropdown-item-1"><strong>{pose}</strong></p>
                        <img 
                            src={poseImages[pose]}
                            className="dropdown-img"
                            alt = "poses"
                        />
                        
                    </div>
                </li>
            ))}
            
        </ul>
              
          
      </div>
    )
}
 