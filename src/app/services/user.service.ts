import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../user';
import { Jelentkezo } from '../jelentkezes';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  collectionName = "Users";
  constructor(private afs: AngularFirestore) { }
  //CRUD
  create(user: User) {
    this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }
  getAll() {
    return this.afs.collection<User>(this.collectionName).valueChanges();
  }
  update(user: User) {
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }
  delete(id: string) {
    return this.afs.collection<User>(this.collectionName).doc(id);
  }
}
