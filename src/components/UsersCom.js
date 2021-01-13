import React, { useState } from 'react';
import firebase from './firebase';
import DataShow from './DataShow';


const UsersCom = () => {
    const [update, setUpdate] = useState({
      fullname: '',
      email: ''
    })

  
    
    const handleUpdate = (e) => {
        const db = firebase.firestore();
        const userRef = db.collection('users').add({
          fullname: update.fullname,
          email: update.email
        });  
        setUpdate(userRef)
        console.log(update)
        console.log(update.fullname, update.email);
        
    }
    
    const updateValue = (e) => {
      setUpdate({
        ...update,
        [e.target.name]: e.target.value
      })
    }
    
    return (
        <div>
            
            <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            onChange={updateValue}
            
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={updateValue}
          />
          <button type="submit">Submit</button>
        </form>
            <DataShow/>
        </div>
        
    );
};

export default UsersCom;