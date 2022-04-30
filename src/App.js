import AppRouter from "./app-router/AppRouter";
import "./App.scss";
import BlogContextProvider from "./contexts/BlogContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { userObserver } from "./redux/thunk/authThunk";
import { setCurrentUser } from "./redux/actions/authActions";
import { auth } from "./helpers/authFunctions";

function App() {
  const dispatch =useDispatch();
  const {currentUser}= useSelector((state) => state.auth);

  useEffect(() => {
    /* const userInfo = auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
    });
    return userInfo; //! clean-up function */
   
    dispatch(userObserver())
  }, [dispatch]);
  

  return (
    <div className="App">
      <BlogContextProvider>
        <AppRouter />
        <ToastContainer />
      </BlogContextProvider>
    </div>
  );
}

export default App;
