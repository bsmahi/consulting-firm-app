import { Link } from "react-router-dom";

function WelcomeComponent() {
  return (
    <div className="Welcome">
      <div>
        Manage Bench Profiles - <Link to="/benchprofiles">Go here</Link>
      </div>
      <div>
        Manage Interviews - <Link to="/interviews">Go here</Link>
      </div>
    </div>
  );
}

export default WelcomeComponent;
