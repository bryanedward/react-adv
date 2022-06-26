import { Link, Outlet } from 'react-router-dom';
import { Navigation } from './routes/Navigation';
import { ProductCard } from './components/ProductCard';

function App() {
  return (
    <div style={{display:'flex'}}>
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
        <ProductCard/>
      </div>
    </div>
  );
}

export default App;
