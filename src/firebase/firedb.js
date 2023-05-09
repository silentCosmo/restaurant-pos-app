import { onValue, push, ref, set } from "firebase/database";
import { db } from "./config";

// Load data from the database
const getDatabase = (dbRef)=>{
    return new Promise((resolve,reject)=>{

        const itemsRef = ref(db, dbRef);
        onValue(itemsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                resolve(Object.entries(data).map(([id, item]) => ({ id, ...item })));
                console.log('resolveDB', (Object.entries(data).map(([id, item]) => ({ id, ...item }))));
            }else{
                resolve([]);
            }
        },(error)=>{
            reject(error);
        });
    })
    
}
const mid =(item)=>{
    // Set the item ID manually
    const itemId = "item-123";

    // Set the item data
    const itemRef = ref(db, `items/${itemId}`);
    set(itemRef, item);
}
// Add a new item to the database
const addToDatabase = (order,tableId)=>{
    push(ref(db, `orders/table-${tableId}/${order.id}`), order);
    return new Promise((resolve,reject)=>{
        console.log('child: ', order)
            mid(order)
            set(ref(db, `orders/table-${tableId}/${order.id}`), order);
    })
}

export {getDatabase, addToDatabase}