import app from "./firebase";
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import { toastWarnNotify } from "../helpers/toastNotify";
import { useState, useEffect  } from 'react';

const database = getDatabase(app);

export const addNewBlog = (info) => {
    const db = getDatabase();
    const blogDatas = ref(db, "blog");
    const newBlogRef = push(blogDatas);
    if (info) {
        set((newBlogRef), {
            title: info.title,
            imgUrl: info.imgUrl,
            content: info.content,
            date: info.date,
            email: info.email,
            userId: info.userId,
            id: newBlogRef._path.pieces_[1]
        })
    }
}

export const GetDetailsData = (id) => {
    const [details, setDetails] = useState();
    useEffect(() => {
        const db = getDatabase();
        const detailsRef = ref(db, "blog/" + id);
        onValue(detailsRef, (snapshot) => {
            const details = snapshot.val();
            setDetails(details)
        })
    }, [id])
    return { details }
}

export const DeleteUser = (id, navigate) => {
    const db = getDatabase();
    const userRef = ref(db, "blog");
    remove(ref(db, "blog/" + id));
    navigate("/");
    toastWarnNotify("Blog is deleted")
}

export const EditUser = (info, currentUserId) => {
    if (info) {
        const db = getDatabase();
        const updates = {};
        updates["blog/" + info.id] = info;
        return update(ref(db), updates);
    }
}

export const handleFavoriteIcon = (e, data, currentUser) => {
    e.stopPropagation();
    if (!currentUser) {
      toastWarnNotify("please login to like")
    } else {
        if (data.likedUserIds) {
          if (data.likedUserIds.includes(currentUser.uid)) {
            EditUser({ ...data, likedUserIds: data.likedUserIds.filter((item) => !(item === currentUser.uid)) })
          } else {
            data.likedUserIds.push(currentUser.uid)
            EditUser({ ...data, likedUserIds: data.likedUserIds })
          }
        } else {
          EditUser({ ...data, likedUserIds: currentUser.uid.split(" ") })
        }
    }
  }