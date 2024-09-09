import { Link } from 'react-router-dom';

function WelcomeComponent() {
    return (
        <div className="Welcome">
            Manage Bench Profiles - <Link to="/benchprofiles">Go here</Link>
        </div>
    )
}

export default WelcomeComponent