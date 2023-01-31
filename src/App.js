import './App.css';
import { Provider, useSelector } from 'react-redux';
import AppRoutes from './routes';
import store from './Redux/store';
import NavBar from './components/navbar/NavBar';
import './media-queries/Small.css';
import './media-queries/Large.css';
import './media-queries/XLarge.css';
import './media-queries/XXLarge.css';
import './media-queries/Desktop.css';
import MobileNavBar from './components/navbar/MobileNavBar';

function App() {
  // let user = JSON.parse(localStorage.getItem('userDetails'));
  // const userState = useSelector((state) => state.user);
  // // const music = useSelector((state) => state.musics.musics);
  // if (!user) {
  //   user = userState;
  // }

  return (
    <Provider store={store}>
      <div className="App">
        {/* {user.authenticated ? : null}
        {user.authenticated ? : null} */}
        <NavBar />
        <MobileNavBar />
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
