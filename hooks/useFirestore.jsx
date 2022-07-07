import React from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "@firebase/firestore";
import { firestore } from "../config/firebase";

const addFavourite = async (UID, FavRecipeas) => {
  try {
    const newFavouritesDocRef = doc(
      firestore,
      "users",
      `${UID}`,
      "favourites",
      `${FavRecipeas.id}`
    );

    await setDoc(newFavouritesDocRef, FavRecipeas);
  } catch (e) {
    console.error("error: ", e);
  }
};

const deleteFavourites = async (UID, id) => {
    console.log(UID," ",id)
  try {
    const favouritesDocRef = doc(
      firestore,
      "users",
      `${UID}`,
      "favourites",
      `${id}`
    );

    await deleteDoc(favouritesDocRef);
    console.log('delete success')
  } catch (e) {
    console.error("error: ", e);
  }
};

const getFavourites = async (UID) => {
  let favouritesCards = [];

  try {
    const favouritesCollectionRef = collection(
      firestore,
      "users",
      `${UID}`,
      "favourites"
    );
    const data = await getDocs(favouritesCollectionRef);
    favouritesCards = data.docs.map((e) => {
      return { id: e.data().id, title: e.data().title, image: e.data().image };
    });
  } catch (e) {
    console.error("error: ", e);
  } finally {
    return favouritesCards;
  }
};

const useFirestore = () => {
  return { addFavourite, deleteFavourites, getFavourites };
};

export default useFirestore;
