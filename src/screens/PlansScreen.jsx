import React, { useEffect, useState } from 'react';
import './PlansScreen.css';
import db from '../firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

function PlansScreen() {
  const [products, setProducts] = useState([]);

  // const fetchData = async () => {
  //   const q = query(collection(db, 'products'), where('active', '==', true));
  //   const querySnapshot = await getDocs(q);

  //   querySnapshot.forEach(async (productDoc) => {
  //     const products = {};
  //     products[productDoc.id] = productDoc.data();
  //     const priceSnap = await getDocs(collection(productDoc.ref), 'prices');
  //     console.log(productDoc);
  //     const prices = {};
  //     priceSnap.forEach((doc) => {
  //       products[productDoc.id].prices = {
  //         priceId: doc.id,
  //         priceData: doc.data(),
  //       };
  //     });
  //     setProducts(products);
  //   });
  // };

  //

  const fetchData = async () => {
    const q = query(collection(db, 'products'), where('active', '==', true));
    const querySnapshot = await getDocs(q);

    const updatedProducts = {};

    for (const productDoc of querySnapshot.docs) {
      const productData = productDoc.data();
      const priceSnap = await getDocs(collection(productDoc.ref, 'prices'));

      const prices = [];
      priceSnap.forEach((doc) => {
        prices.push({
          priceId: doc.id,
          priceData: doc.data(),
        });
      });

      productData.prices = prices;
      updatedProducts[productDoc.id] = productData;
    }

    console.log(updatedProducts);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);

  return <div className="plansScreen"></div>;
}

export default PlansScreen;
