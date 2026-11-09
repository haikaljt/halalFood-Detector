function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} HalalFood Detector. All rights
          reserved.
        </p>

        <p>Helping you identify food ingredients with AI.</p>
      </div>
    </footer>
  );
}

export default Footer;
