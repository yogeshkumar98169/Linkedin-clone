import { fireStore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";
/*
!addDoc means add Document
!collection ->functions that are used to create a collection
*/

const dbRef = collection(fireStore, "posts");

export const postStatus = (status) => {
  let data = {
    status: status,
  };
  addDoc(dbRef, data)
    .then((response) => {
      toast.success("Document has been added successfully");
    })
    .catch((error) => {
      toast.error(error);
    });
};

export const getStatus = (setAllStatus) => {
  onSnapshot(dbRef, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};
