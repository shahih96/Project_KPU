import {
  onAuthStateChanged as _onAuthStateChanged,
  Auth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./clientApp";

export function onAuthStateChanged(cb: (user: any) => void) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInWithEmail(
  email: string,
  password: string
): Promise<boolean> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.error("Nge bug lmao Error signing out", error);
    return false;
  }
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out", error);
  }
}
