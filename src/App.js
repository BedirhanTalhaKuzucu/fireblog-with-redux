import AppRouter from "./app-router/AppRouter";
import "./App.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { userObserver } from "./redux/thunk/authThunk";

function App() {
  const dispatch =useDispatch();
  const {currentUser}= useSelector((state) => state.auth);

  useEffect(() => {
    /* const userInfo = auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
    });
    return userInfo; //! clean-up function */
   
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
