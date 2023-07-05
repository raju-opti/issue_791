import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import optimizelySdk from '@optimizely/optimizely-sdk';
import { v4 } from 'uuid';

const loadOptimizely = async (setDone: (done: boolean) => void) => {
  try {
    console.log('uuid: ' + v4());

    const optimizelyInstance = optimizelySdk.createInstance({
      logLevel: 'error',
      sdkKey: 'your-sdk-key',
    });

    if (!optimizelyInstance) {
      throw new Error('Unable to create new Optimizely instance.');
    }

    await optimizelyInstance.onReady();

    const userId = 'test-user-1';
    const user = optimizelyInstance.createUserContext(userId);

    if (!user) {
      throw new Error(
        `Error: Unable to create new Optimizely User Context for default user (${userId}).`,
      );
    }

    const decision = user.decideAll();

    console.log(decision);
    setDone(true);
  } catch (e) {
    console.error('Unable to load Optimizely.');
    console.error(e);
  }
};


function App() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    loadOptimizely(setDone);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          {done ? 'test done, please check console' : 'testing sdk'}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
