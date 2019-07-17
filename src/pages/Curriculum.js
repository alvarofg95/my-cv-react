import React from 'react';
import Separator from '../components/Separator';
import Profile from '../pages/Profile';
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import Languages from '../pages/Languages';

const SCREEN_HEIGHT = window.innerHeight;

export default () => (
  <div className="container" style={{ height: SCREEN_HEIGHT - SCREEN_HEIGHT * 0.15 }}>
    <Profile />
    <div className="rightPart scrollDiv">
      <Experience />
      <Separator />
      <Education />
      <Separator />
      <Languages />
    </div>
  </div>
);
