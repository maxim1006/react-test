import React, { useState, useEffect } from 'react';
import firebase from '../firebase/firebase';

const useNames = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('react-test')
            .onSnapshot(snapshot => {
                const newNames = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setNames(newNames);
            });
    }, []);
    return names;
};

const TodoNamesListComponent = () => {
    const names = useNames();
    return (
        <div>
            <h2>Name List</h2>
            <ol>
                {names.map(name => (
                    <li key={name.id}>
                        <div>
                            {name.name} {name.surname}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoNamesListComponent;
