import '../App.css';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
// push, remove
import firebase from '../firebase';
// import AddRoutinesForm from '../components/AddRoutinesForm.js';

const UsersTracker = () => {
    const [routines, setRoutines] = useState([]);
    const [userInput, setUserInput] = useState('');
    useEffect(() => {
        // create a variable that holds our database details
        const database = getDatabase(firebase)

        // we then create a variable that makes reference to our database
        const dbRef = ref(database)

        // add an event listener to that variable that will fire
        // from the database, and call that data 'response'.
        onValue(dbRef, (response) => {
            // here we're creating a variable to store the new state we want to introduce to our app
            const newData = [];

            // here we store the response from our query to Firebase inside of a variable called data.
            // .val() is a Firebase method that gets us the information we want
            const data = response.val();
            // data is an object, so we iterate through it using a for in loop to access each book name 
            console.log(data);

            for (let key in data) {
                // inside the loop, we push each book name to an array we already created inside the onValue() function called newState
                // newData.push(data[key]);
                const routineData = {
                    key: key,
                    name: data[key]
                }
                newData.push(routineData);
            }

            // then, we call setBooks in order to update our component's state using the local array newState
            setRoutines(newData);
        })
    }, [])

    // this event will fire every time there is a change in the input it is attached to
    const handleInputChange = (event) => {
        // we're telling React to update the state of our `App` component to be 
        // equal to whatever is currently the value of the input field
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        // event.preventDefault prevents the default action (form submission and page refresh)
        event.preventDefault();

        // create a reference to our database
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        // push the value of the `userInput` state to the database
        push(dbRef, userInput);

        // reset the state to an empty string
        setUserInput('');
    }

    const handleRemoveRoutine = (routineId) => {
        // here we create a reference to the database 
        // this time though, instead of pointing at the whole database, we make our dbRef point to the specific node of the book we want to remove
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${routineId}`);

        // using the Firebase method remove(), we remove the node specific to the book ID
        remove(dbRef)
    }

    return (
        <div className='wrapper'>
            <ul>
                {routines.map((routine) => {
                    return (
                        <li key={routine.key}>
                            <p>{routine.name}</p>
                            {/* book.key needs to go into handleRemoveBook BUT HOW */}
                            <button onClick={() => handleRemoveRoutine(routine.key)}>Remove</button>
                        </li>
                    )
                })}
                
            </ul>
            <form action="submit">
                <label htmlFor="newRoutine">Add a routine to your tracker</label>
                <input 
                    type="text" 
                    id="newRoutine" 
                    onChange={handleInputChange} 
                    value={userInput}
                />
                <button onClick={handleSubmit}>Add Routine</button>
            </form>
            {/* <AddRoutinesForm
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    userInput={userInput}
                /> */}
        </div>
        
    )
}

export default UsersTracker;

