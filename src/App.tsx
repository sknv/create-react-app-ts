import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="text-center">
        <header className="bg-blue-dark m-6 p-6 rounded">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-white">Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
