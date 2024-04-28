// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx'
import './index.css'
import axios from "axios";

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App.jsx'
// import './index.css'
// import axios from "axios";
// import { ThemeProvider } from "@material-tailwind/react";

// axios.defaults.withCredentials = true;

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </ThemeProvider>
//   </React.StrictMode>
// );