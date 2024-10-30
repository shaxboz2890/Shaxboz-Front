document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded!");
    
    const addNewsArticle = (title, content, date) => {
        const newsSection = document.querySelector('.news');
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <span>Published on: ${date}</span>
        `;
        newsSection.appendChild(article);
    };

   
    addNewsArticle("New Talents in Football", "A look at the rising stars in football.", "2024-10-21");
});
