import './App.css';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import store from './api/Redux/store';

function App() {
  return (
 <Provider store={store}>
    <div className="App">
      <AppRoutes />
    </div>
    </Provider>

  );
}

export default App;
