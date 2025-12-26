const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Simple Blog &copy; 2023. All rights reserved.</p>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </div>

        <p className="copyright">
          Designed with{" "}
          <i
            className="fas fa-heart"
            style={{ color: "#e74c3c" }}
          ></i>{" "}
          for the web community
        </p>
      </div>
    </footer>
  );
};

export default Footer;
