import {
  collection,
  onSnapshot,
  query,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  orderBy,
  Timestamp,
  runTransaction,
  where,
  addDoc,
  getFirestore,
  DocumentData,
  Firestore,
  QueryDocumentSnapshot,
  FieldValue,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./clientApp";

export interface Location {
  id?: string;
  name: string;
  key: string;
  total: number;
  description: string;
  file: any;
  timestamp: string;
}

export interface Cities {
  name: string;
  key: string;
  current_coklit: number;
  total_coklit: number;
}

const citiesConverter = {
  toFirestore: (location: Cities) => {
    return { ...location };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot) => {
    const data = snapshot.data() as any;
    return {
      ...data,
    } as Cities;
  },
};

const locationConverter = {
  toFirestore: (location: Location) => {
    return { ...location };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot) => {
    const data = snapshot.data() as any; // Cast to any for accessing non-typed properties
    return {
      id: snapshot.id,
      ...data, // Convert timestamp to JS Date if it exists
    } as Location; // Cast back to Location after adding ID and timestamp
  },
};

export async function uploadLocationData(data: Location) {
  try {
    const docRef = collection(db, `locations/${data.key}/posts`);
    const result = await addDoc(docRef, data);
    console.log("Document written with ID: ", result.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function uploadRecentData(data: Location) {
  try {
    const docRef = collection(db, "recent");
    const result = await addDoc(docRef, data);
    console.log("Document written with ID: ", result.id);
  } catch (error) {
    console.error("Error adding docment", error);
  }
}

export async function updateLocation(path: string, id: string, data: Location) {
  let docRef = doc(collection(db, `locations/${path}/posts`), id);
  const result = await setDoc(docRef, { data });
}

export async function updateTotal(path: string, total: number) {
  let docRef = doc(collection(db, "locations"), path);
  await updateDoc(docRef, {
    current_coklit: total,
  });
}

export async function getCurrentCities(path: string): Promise<Cities> {
  let q = doc(collection(db, "locations"), path).withConverter(citiesConverter);
  const result = await getDoc(q);
  return result.data() as Cities;
}

export async function getLocation(path: string): Promise<Location[]> {
  let q = query(
    collection(db, `locations/${path}/posts`).withConverter(locationConverter)
  );
  const result = await getDocs(q);
  return result.docs.map((doc) => doc.data() as Location);
}

export async function getPost(path: string, id: string): Promise<Location> {
  let q = doc(collection(db, `locations/${path}/posts`), id);

  const result = await getDoc(q);
  return result.data() as Location;
}

export async function getRecentLocation(): Promise<Location[]> {
  let q = query(collection(db, "recent").withConverter(locationConverter));

  const result = await getDocs(q);
  return result.docs.map((doc) => doc.data() as Location);
}

export async function getAllLocations(): Promise<Cities[]> {
  let q = query(collection(db, "locations").withConverter(citiesConverter)); // Use converter

  const result = await getDocs(q);
  return result.docs.map((doc) => doc.data() as Cities);
}

export async function deleteLocationData(path: string, id: string) {
  let docRef = doc(collection(db, `locations/${path}/posts`), id);
  await deleteDoc(docRef);
}
