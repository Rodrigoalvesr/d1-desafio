import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function RenderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

RenderApp();

export default RenderApp;
