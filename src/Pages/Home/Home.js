import './Home.css';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';

function Home() {
  return (
    <>
    <Navbar />
    <div className="bg">
        <div>
        <div className="wel">WELCOME TO SWIFT</div>
        </div>
        <div className="info">
            <p>
                SWIFT is a smart way of ordering your products from
                the comfort of your homes. It helps you to order all 
                the neccessary products and sudden craving of yours.
            <br />
            <br />
                All you have to do is click on Login and login with your
                ID and Passwords and then you will be automatically redirected
                to our products page.
            <br />
            <br />
                HAPPY TO BE AT YOUR SERVICE.
            </p>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default Home;