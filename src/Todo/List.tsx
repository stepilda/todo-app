function TodoList(props: { todos: string[] }) {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <ul className="space-y-2">
                {props.todos.length === 0 ? (
                    <li className="text-gray-500">No todos yet. Add some!</li>
                ) : (
                    props.todos.map((todo, index) => (
                        <li key={index} className="border border-gray-300 rounded-lg p-3">
                            {todo}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;
