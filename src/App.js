import './App.css';
import { Provider } from 'react-redux';
import AppRoutes from './routes';
import store from './Redux/store';

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
