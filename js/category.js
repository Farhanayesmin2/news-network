
// category api
fetch(' https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => loadCategories(data.data.news_category));

const loadCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(category => {
       
        const liCategories = document.createElement('ul');
        liCategories.innerHTML = `
        
        <li class="list-unstyled list-items">${category.category_name}</li>
        
        `;
        categoriesContainer.appendChild(liCategories);
        // console.log(category.news_category);
        console.log(category);
    }) 
}

 
/*    
 categories.forEach(category => {})
for (const category of categories ) {  } */
