import { Provider } from 'react-redux';
import AppRoutes from './routes';
import store from './redux/store';
import NavBar from './components/navbar/NavBar';
import './media-queries/Small.css';
import './media-queries/Large.css';
import './media-queries/XLarge.css';
import './media-queries/XXLarge.css';
import './media-queries/Desktop.css';
import MobileNavBar from './components/navbar/MobileNavBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <MobileNavBar />
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
