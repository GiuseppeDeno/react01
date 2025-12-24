export const Navbar = () =>{
    return(
            <nav className="navbar">
        <div className="logo">Simple<span>Blog</span></div>
        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">Articles</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Subscribe</a>
        </div>
      </nav>
    );
};
export default Navbar;