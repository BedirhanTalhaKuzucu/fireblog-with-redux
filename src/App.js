import AppRouter from "./app-router/AppRouter";
import "./App.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { userObserver } from "./redux/thunk/authThunk";

function App() {
  const dispatch =useDispatch();

  useEffect(() => {
    dispatch(userObserver)
  }, [dispatch]);
  
  return (
    <div className="App">
        <AppRouter />
        <ToastContainer />
    </div>
  );
}

export default App;
