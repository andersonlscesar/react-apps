export default function Status({ children, amount }) {

    return (
        <div className="status">
            <h2>{ children }</h2>
            <span className="status__number">{ amount() }</span>
        </div>
    );
}