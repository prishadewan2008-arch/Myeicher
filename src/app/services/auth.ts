import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth,
    private firestore: Firestore,
  ) {}

  async login(email: string, password: string, selectedRole: string) {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);

    const uid = userCredential.user.uid;

    const userDoc = await getDoc(doc(this.firestore, 'users', uid));

    if (userDoc.exists()) {
      const userData = userDoc.data();

      if (userData['role'] === selectedRole) {
        return true;
      } else {
        throw new Error('Wrong role selected');
      }
    } else {
      throw new Error('User data not found');
    }
  }

  dealerLogin(email: string, password: string) {
  return signInWithEmailAndPassword(
    this.auth,
    email,
    password
  );
}

customerLogin(email: string, password: string) {
  return signInWithEmailAndPassword(
    this.auth,
    email,
    password
  );
}

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
