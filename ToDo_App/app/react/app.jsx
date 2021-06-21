import React, {useState} from "react";

export const App = () => {

    const [todoList, setTodoList] = useState([]);

    // tuple
    // the value that is passed to useState() is the value set to the variable in the array
    const [inputValue, setInputValue] = useState(''); 
    // setInputValue('TEST'); // inputValue now = 'TEST'

    return (
        <div> 
            <h1>My To Do App</h1>
            <ul>
                {todoList.map((listItem, i) => {
                    return <li key={i}>{listItem}</li> // react requires repeating elements to have a "key" attribute. Avoid using the index value.
                })}
            </ul>
            <form onSubmit={(e) => {
                e.preventDefault();
                setTodoList((list) => [...list, inputValue]);
                setInputValue('');
            }}>
                <label htmlFor="add-item">
                    Add a to do item:
                    <input type="text" id="add-item" value={inputValue} onChange={(e) => {
                        setInputValue(e.target.value);
                    }}/>
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}