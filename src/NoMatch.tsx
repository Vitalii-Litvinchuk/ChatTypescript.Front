import { Link } from "react-router-dom";

const NoMatch = () => {
    return (<div className="container mt-5">
        <h1 className="text-center">Nothing to see here!</h1>
        <p className="text-center">
            <Link to="/" className="btn btn-success">Go to the home page</Link>
        </p>
    </div>
    );
}

export default NoMatch;