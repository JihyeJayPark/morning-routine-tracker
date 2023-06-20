import '../App.css';
// import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import firebase from '../firebase';
import ToggleSwitch from './ToggleSwitch';
import Footer from './Footer';

const UsersTracker = () => {
    const [routines, setRoutines] = useState([]);
    const [userInput, setUserInput] = useState("");
    useEffect(() => {
        const database = getDatabase(firebase)

        const dbRef = ref(database)

        onValue(dbRef, (response) => {
            const newData = [];

            const data = response.val()

            for (let key in data) {
                const routineData = {
                    key: key,
                    name: data[key]
                }
                newData.push(routineData);
            }

            setRoutines(newData);
        })
    }, [])

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        push(dbRef, userInput);

        setUserInput("");
    }

    const handleRemoveRoutine = (routineId) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${routineId}`);

        remove(dbRef)
    }

    return (
        <div className="app">
            <main className="main">
                <div className="wrapper mainBox">
                    <h2>What are your plans for this morning?</h2>
                    <form action="submit">
                        <input 
                            type="text" 
                            id="newRoutine" 
                            placeholder="Add a routine to your tracker"
                            onChange={handleInputChange} 
                            value={userInput}
                        />
                        <button onClick={handleSubmit}>Add Routine</button>
                    </form>
                    <ul>
                        {routines.map((routine) => {
                            return (
                                <li key={routine.key}>
                                    <p>{routine.name}</p>
                                    <ToggleSwitch />
                                    <button onClick={() => handleRemoveRoutine(routine.key)}>Remove</button>
                                </li>
                            )
                        })}
                        
                    </ul>
                    
                </div>
            </main>
            <Footer />
        </div>
        
        
    )
}

export default UsersTracker;

