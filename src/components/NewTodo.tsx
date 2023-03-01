import React, { useRef } from "react";

const NewTodo: React.FC = () => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        //  Prevent sending wrong requests
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
    };

    return <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type='text' id="todo-text" ref={textInputRef}></input>
        </div>
        <button type="submit">ADD TODO</button>
    </form>;
};

export default NewTodo;