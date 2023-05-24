import { Link } from "react-router-dom"

export default function Unauthorized() {
    return (
        <div>
            <h1>Unauthorized page</h1>
            <p>You don't have permission to access this page.</p>
            <Link to="/">Go back Home.</Link>
        </div>
    )
}
