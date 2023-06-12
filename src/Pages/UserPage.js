import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

import MainLayout from "../Layouts/MainLayout";

export default function UserPage() {
  return(
    <MainLayout>
      <div className="UserPage">test</div>
    </MainLayout>
  )
  
  
}

//<h3>@{post.author.name}</h3>