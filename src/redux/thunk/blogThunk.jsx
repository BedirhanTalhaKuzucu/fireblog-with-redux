import { getDatabase, ref, onValue } from "firebase/database";
import { setDataArray } from '../actions/blogActions';


export const getData = (dispatch) => {
    const db = getDatabase();
    const userRef = ref(db, "blog");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const blogArray = [];
      for (let id in data) {
        blogArray.push({ id, ...data[id] })
      }
      // setDataArray(blogArray);
      dispatch(setDataArray(blogArray));
    });
  }