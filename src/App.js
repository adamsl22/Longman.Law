import React from 'react';
import './App.css';
import PageContainer from './Containers/PageContainer'
import Nav from './Components/Nav'

class App extends React.Component {
  state = {
    view: 'home'
  }

  handleNavClick = (e) => {
    let page = e.target.name
    this.setState({
      view: page
    })
  }
  
  render(){
    return (
      <div className="App">
        <Nav handleNavClick={this.handleNavClick}/>
      </div>
    );
  }
}

export default App;
