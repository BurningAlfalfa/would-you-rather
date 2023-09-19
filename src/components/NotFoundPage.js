import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function NotFoundPage() {
    return (
      <div>
        <h1>404 - Not Found</h1>
        <p>The question you were looking for does not exist.</p>
        <Link to="/home">Go to Home</Link>
      </div>
    );
  }