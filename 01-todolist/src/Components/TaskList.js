
export default function TaskList({ children }) {


    return (
        <main className="main">
           

            <ul className="task-list">
               { children }
            </ul>
        </main>
    );
}
