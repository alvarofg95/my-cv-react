import React, { Component } from 'react';
import MainLayout from './layouts/MainLayout';
import Separator from './components/Separator';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Languages from './pages/Languages';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'spanish'
    };
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }

  onChangeLanguage() {
    this.setState(prevState => ({
      language: prevState.language === 'spanish' ? 'english' : 'spanish'
    }));
  }

  render() {
    const { language } = this.state;
    return (
      <MainLayout language={language} onClick={this.onChangeLanguage}>
        <div className="container">
          <div className="row padding-top-20">
            <div className="col-12 col-sm-4 col-md-4">
              <Profile language={language} />
            </div>
            <div className="col-12 col-sm-1 col-md-1" />
            <div className="col-12 col-sm-7 col-md-7 scrollDiv">
              <Experience language={language} />
              <Separator />
              <Education language={language} />
              <Separator />
              <Languages language={language} />
              <Separator />
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default App;
