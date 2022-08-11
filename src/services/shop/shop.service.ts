import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin'
import { firestore } from 'firebase-admin';
import { Item } from 'src/models/shop.model';
@Injectable()
export class ShopService {
    db: admin.firestore.Firestore;
    constructor(){
        this.db = firestore();
    }

    async addItem(item: Item){
       if(item.id == undefined){
        item.id = Date.now().toString();
       }
    //    shop.createAt = Date.now();
       await this.db.collection("items").doc(item.id).set(item);
        // if(note.id == undefined){
        //     note.id = Date.now().toString();
        // }
        // note.createAt = Date.now();
        // this.db.set(note.id, note);

    }

    async getItemById(id: string){
        let item = await this.db.collection("items").doc(id).get();
        return item.data();
        // return this.db.get(id);
    }

    async getAllItems(){
        let items = await this.db.collection("items").get();
        return items.docs.map(doc => doc.data());
        // return Array.from(this.db.values());
    }

    async updateItem(id: string, item: Item){
        await this.db.collection("items").doc(id).set(item);
        // this.db.set(id, note);
    }

    async deleteItem(id: string){
        await this.db.collection("items").doc(id).delete();
        // this.db.delete(id);
    }
}
