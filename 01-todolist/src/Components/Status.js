export default function Status({ children }) {

    return (
        <div className="status">
            <h2>{ children }</h2>
            <span className="status__number">0</span>
        </div>
    );
}