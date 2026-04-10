import { useState } from 'react';

function TodoForm({ onAddTodo }: { onAddTodo: (todo: string) => void }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!input.trim()) return;

        onAddTodo(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-4 gap-4 flex items-center">
            <input
                className="border border-gray-400 outline-none px-3 py-2 rounded-lg"
                type="text"
                placeholder="Enter a new todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button className="bg-gray-800 px-4 py-2 text-white rounded-lg cursor-pointer" type="submit">
                Submit
            </button>
        </form>
    );
}

export default TodoForm;
