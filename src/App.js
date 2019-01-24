import React from 'react';
import MainLayout from './layouts/MainLayout';
import Separator from './components/Separator';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Languages from './pages/Languages';

export default () => {
  console.log('rendering INDEX');
  return (
  <MainLayout>
    <div className="container">
      <div className="row" style={{ paddingTop: 20 }}>
        <div className="col-12 col-sm-4 col-md-4">
          <Profile />
        </div>
        <div className="col-12 col-sm-1 col-md-1" />
        <div className="col-12 col-sm-7 col-md-7 scrollDiv">
          <Experience />
          <Separator />
          <Education />
          <Separator />
          <Languages />
          <Separator />
        </div>
      </div>
    </div>
  </MainLayout>
)};
