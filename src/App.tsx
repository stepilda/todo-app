import TodoForm from './Todo/Form';
import TodoList from './Todo/List';
import { useState } from 'react';

function App(props: any) {
    const [todos, setTodos] = useState<string[]>(['Learn React', 'Build a Todo App', 'Master TypeScript']);
    const [isFormVisible, setFormVisible] = useState(false);

    const toggleForm = () => {
        setFormVisible(!isFormVisible);
    };

    const handleAddTodo = (todo: string) => {
        setTodos([...todos, todo]);
        setFormVisible(false);
    };

    return (
        <>
            <div className="bg-gray-100 min-h-screen p-4 space-y-8">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold">{props.title}</h1>
                        <p className="text-gray-500">{props.description}</p>
                    </div>

                    <button
                        className={`py-2 px-4 text-white rounded-lg cursor-pointer ${isFormVisible ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-800 hover:bg-gray-900'}`}
                        onClick={toggleForm}
                    >
                        {isFormVisible ? 'Close Form' : 'Add Todo'}
                    </button>
                </div>

                {isFormVisible ? <TodoForm onAddTodo={handleAddTodo} /> : <TodoList todos={todos} />}
            </div>
        </>
    );
}

export default App;
