import React, { useEffect, useState } from 'react';
import firebase from './firebase';
import style from './DataShow.css'

const DataShow = () => {
    const [values, setValues] = useState([])
    useEffect(() => {
        const db = firebase.firestore();
        db.collection("users")
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data); // array of users objects
            setValues(data)
          });
    }, [])
    return (
        <div>              
            <table style={style}>
                <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>                    
                </tr>
                </thead>
                <tbody>
                    {values.map((dt, index) => 
                        <tr key={index}>
                            <td>{dt.fullname} </td>
                            <td>{dt.email} </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
           
        </div>
    );
};

export default DataShow;