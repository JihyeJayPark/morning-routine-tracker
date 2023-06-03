function AddRoutinesForm({ handleInputChange, handleSubmit, userInput }) {
    // const {handleInputChange, handleSubmit, userInput} = props;
    return (
        <form action="submit">
            <label htmlFor="newRoutine">Add a routine to your tracker</label>
            {/* binding our input:  */}
            <input id="newRoutine" type="text" onChange={handleInputChange} value={userInput} />
            <button onClick={handleSubmit}>Add Routine</button>
        </form>
    )
}

export default AddRoutinesForm;