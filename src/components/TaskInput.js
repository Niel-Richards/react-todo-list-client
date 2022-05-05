const TaskInput = (props)=> {

    function clickHandler(event) {
        const userInput = document.querySelector('.TaskInput__input');
        let taskModel = [{'description':userInput.value}];
        props.addTask(taskModel);
        userInput.value = "";
        userInput.focus();
        // event.preventDefault();
    }

    return (
        <div className="TaskInput__wrapper">
            <input type="text" className="TaskInput__input px-1" autoFocus/>
            <button className="TaskInput__add-btn" onClick={clickHandler}>
                Add
            </button>
        </div>
    );  
}

export default TaskInput;