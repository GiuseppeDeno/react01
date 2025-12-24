import Socials from './Socials';

export const LeftColumn = () =>{
    return (
 <div className="left-column">
          <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Blog Author" className="profile-img"/>



            <div className="left-content">
              <h3>About the Author</h3>
              <p>Hello! I'm Alex, a passionate web developer and blogger. I love sharing knowledge about web technologies, design principles, and coding best practices.</p>
              <p>This blog is my space to share insights, tutorials, and thoughts about the ever-evolving world of web development.</p>

              

              <Socials />
            </div>
        </div>

    );
};
export default LeftColumn