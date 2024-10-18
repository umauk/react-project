import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { ReduxStore } from '../store/store.js';



createRoot(document.getElementById('root')).render(
  <Provider store={ReduxStore}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
