import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'material-icons/iconfont/material-icons.css';
import { Provider } from 'react-redux'
import { store } from './state/store.ts'
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
