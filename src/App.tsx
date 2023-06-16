import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import optimizelySdk from '@optimizely/optimizely-sdk';
import { v4 } from 'uuid';

const loadOptimizely = async () => {
  try {
    console.log('uuid: ' + v4());

    const optimizelyInstance = optimizelySdk.createInstance({
      logLevel: 'error',
      sdkKey: 'your-sdk-key',
    });

    if (!optimizelyInstance) {
      throw new Error('Unable to create new Optimizely instance.');
    }

    const { success, reason } = await optimizelyInstance.onReady();

    const userId = 'test-user-1';
    const user = optimizelyInstance.createUserContext(userId);

    if (!user) {
      throw new Error(
        `Error: Unable to create new Optimizely User Context for default user (${userId}).`,
      );
    }

    const decision = user.decideAll();

    console.log(decision);
  } catch (e) {
    console.error('Unable to load Optimizely.');
    console.error(e);
  }
};

function App() {
  useEffect(() => {
    loadOptimizely();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
