import ProfileContent from '../components/Profile/ProfileContent.jsx';
import React, { useState } from 'react';
import BackButton from '../components/Profile/ProfileButton.jsx';
import '../pages/ProfilePage.css';
import Join2 from '../components/Profile/Join2.jsx';
import Join from '../components/Profile/Join.jsx';
import Display from '../components/Profile/Display.jsx';


  const ProfilePage = () => {
    const [numbers, setNumbers] = useState([]);
  
    const handleSubmit = (number, type) => {
      setNumbers([...numbers, { number: parseFloat(number), type }]);
    };

    return (
       <>
       <div className="profile-page">

        <BackButton />

        <div className="profile-content">
        <div className="profile-left">
          <ProfileContent />
        </div>
        <div className="profile-right"> 
            <Join onSubmit={handleSubmit} />
            <Display numbers={numbers} />
            
        </div>
             
        </div>
      </div>
      </>
    );
  }

export default ProfilePage