import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
// import { CounterApp2 } from './CounterApp2';
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp subTitle={ 123 } /> */}
        <CounterApp value={ 456 } />
        {/* <CounterApp2 value={ 789 } /> */}
    </React.StrictMode>
)