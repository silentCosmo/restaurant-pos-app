import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { push, ref, onValue, update, remove } from 'firebase/database';

function Crud() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemIdToUpdate, setItemIdToUpdate] = useState('');

  // Load data from the database
  useEffect(() => {
    const itemsRef = ref(db, 'items');
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setItems(Object.entries(data).map(([id, item]) => ({ id, ...item })));
      }
    });
  }, []);


  // Add a new item to the database
  const handleAddItem = () => {
    const newItem = {
      name: itemName,
      description: itemDescription,
    };
    push(ref(db, 'items'), newItem);
    setItemName('');
    setItemDescription('');
  };

  // Update an existing item in the database
  const handleUpdateItem = () => {
    const itemRef = ref(db, `items/${itemIdToUpdate}`);
    update(itemRef, {
      name: itemName,
      description: itemDescription,
    });
    setItemIdToUpdate('');
    setItemName('');
    setItemDescription('');
  };

  // Delete an item from the database
  const handleDeleteItem = (itemId) => {
    remove(ref(db, `items/${itemId}`));
  };

  return (
    <div className='py-20'>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}{' '}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            <button onClick={() => setItemIdToUpdate(item.id)}>Edit</button>
          </li>
        ))}
      </ul>
      <h2>{itemIdToUpdate ? 'Edit item' : 'Add item'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />
      {itemIdToUpdate ? (
        <button onClick={handleUpdateItem}>Save</button>
      ) : (
        <button onClick={handleAddItem}>Add</button>
      )}
    </div>
  );
}

export default Crud;
