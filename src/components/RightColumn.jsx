import Article from "./Article";


const articles = [
  {
    id: 1,
    title: "Getting Started with CSS Grid",
    text: "CSS Grid is a powerful layout system available in CSS...",
    meta: [
      { id: "date", icon: "far fa-calendar", text: "June 15, 2023" },
      { id: "author", icon: "far fa-user", text: "Alex Johnson" },
      { id: "category", icon: "far fa-folder", text: "Web Design" },
    ],
  },
  {
    id: 2,
    title: "React Basics for Beginners",
    text: "React lets you build user interfaces using components...",
    meta: [
      { id: "date", icon: "far fa-calendar", text: "July 2, 2023" },
      { id: "author", icon: "far fa-user", text: "Maria Rossi" },
      { id: "category", icon: "far fa-folder", text: "React" },
    ],
  },
  {
    id: 3,
    title: "Why JavaScript is Everywhere",
    text: "JavaScript runs on the browser, server, and more...",
    meta: [
      { id: "date", icon: "far fa-calendar", text: "August 10, 2023" },
      { id: "author", icon: "far fa-user", text: "Luca Bianchi" },
      { id: "category", icon: "far fa-folder", text: "JavaScript" },
    ],
  },
];

export const RightColumn = ()=>{

    return  (
         <div className="right-column">
         

         {articles.map(article => (
        <Article
          key={article.id}
          title={article.title}
          text={article.text}
          meta={article.meta}
        />
      ))}

         
        </div>
    );
};

export default RightColumn;