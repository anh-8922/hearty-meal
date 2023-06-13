import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import AddShoppingList from '../Components/AddShoppingList';
import MainLayout from "../Layouts/MainLayout";

export default function UserPage() {
  return(
    <MainLayout>
      <div className="UserPage">
        <div className="my-recipes">My Recipe</div>
        <div>
          <div>Favourites</div>
          <div><AddShoppingList/></div>
        </div>
      </div>
    </MainLayout>
  )
  
  
}

//<h3>@{post.author.name}</h3>