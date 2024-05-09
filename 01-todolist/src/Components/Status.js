export default function Status({ children, quantity }) {

    return (
        <div className="status">
            <h2>{ children }</h2>
            <span className="status__number">{ quantity }</span>
        </div>
    );
}