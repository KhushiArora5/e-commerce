import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className="header">
        <h1 className="name">SWIFT</h1>
        <div>
        <a className="link" href="/login">LOGIN</a><br />
        <a className="link" href="/products">PRODUCTS</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;