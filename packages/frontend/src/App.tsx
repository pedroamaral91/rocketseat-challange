import React from 'react';
import { hot } from 'react-hot-loader/root'

function App() {
  return (
    <div className="App">
      hello world
    </div>
  );
}

export default process.env.NODE_ENV === "development" ? hot(App) : App

