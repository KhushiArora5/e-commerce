import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className="header">
        <h1 className="name">SWIFT</h1>
        <div className="link">
        <a href="/login">LOGIN</a><br />
        <a href="/products">PRODUCTS</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;