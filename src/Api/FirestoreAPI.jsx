import { fireStore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";
/*
!addDoc means add Document
!collection ->functions that are used to create a collection
*/
let postRef = collection(fireStore, "posts");
let userRef = collection(fireStore, "users");

export const postStatus = (object) => {
  addDoc(postRef, object)
    .then((response) => {
      toast.success("Document has been added successfully");
    })
    .catch((error) => {
      toast.error(error);
    });
};

export const getStatus = (setAllStatus) => {
  onSnapshot(postRef, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then((response) => {})
    .catch((error) => {
      toast.error(error);
    });
};

export const getCurrentUser = (setCurrentUser) => {
  let currentEmail = localStorage.getItem("userEmail");
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), userID: docs.id };
        })
        .filter((item) => {
          return item.email === currentEmail;
        })[0] //to acces the first element in array
    );
  });
};
