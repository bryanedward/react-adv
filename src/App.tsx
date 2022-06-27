import { Link, Outlet } from 'react-router-dom';
import { Principal } from './pages/Principal';



function App() {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>
        <Link to="/">Invoices</Link> |{" "}
        <Link to="/lazy1">Expenses</Link>
        <Link to="/lazy2">Expenses</Link>
        <Outlet />
      </nav>
      <div>
       <Principal/>
      </div>
    </div>
  );
}

export default App;
