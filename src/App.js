import React, { Component } from 'react';
import './App.css';
import Off from './Off';
import Helmet from 'react-helmet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: !Off.check().offline
    };
  }

  componentDidMount(){
    Off.on('up', function(){
      this.setState({isOnline: true});
    }.bind(this));

    Off.on('down', function(){
      this.setState({isOnline: false});
    }.bind(this));
  }

  render() {
    const { isOnline } = this.state;

    return (
      <div>
        <Helmet>
          <title>{isOnline ? 'Online' : '-------'}</title>
        </Helmet>
        <div className={'App '+ (isOnline ? 'online' : 'offline')}>
          <h1 className="App-status">
            {isOnline ? 'Online' : 'FUUuuu.....'}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
