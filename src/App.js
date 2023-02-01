import './App.css';
import { Provider } from 'react-redux';
import AppRoutes from './routes';
import store from './redux/store';

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
