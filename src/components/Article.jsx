export const Article =( {title, text , meta })=>{
    return(
      <article className="blog-post">
            <h2>{title}</h2>
            <div className="post-meta">
      
  {meta.map(item => 
   <span key={item.id}>
            <i className={item.icon}></i> {item.text}
          </span>
        )}
            </div>
            <p>{text }</p>
            <a href="#" className="read-more">Read More</a>
          </article>

);
};

export default Article 

/* struttora dati da mattere in App.jsx 
const meta = [
  {
    id: 'date',
    icon: 'far fa-calendar',
    text: 'June 15, 2023',
  },
  {
    id: 'author',
    icon: 'far fa-user',
    text: 'Alex Johnson',
  },
  {
    id: 'category',
    icon: 'far fa-folder',
    text: 'Web Design',
  },
];
 */