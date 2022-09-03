
// category api
const url1 = `https://openapi.programming-hero.com/api/news/categories`;
fetch(url1)
    .then(res => res.json())
    .then(data => loadCategories(data.data.news_category));

const loadCategories = (categories) => {
   
    const categoriesContainer = document.getElementById('categories-container');
   
    categories.forEach(category => {
        const liCategories = document.createElement('ul');
        liCategories.innerHTML =`
        <li onClick="loadMenus('${category.category_id}')" class="list-unstyled list-items">${category.category_name}</li>
        `;
        
        categoriesContainer.appendChild(liCategories);
      
        // console.log(category.news_category);
      //  console.log(category);
       
    }) 
  // toggleSpinner(false);
}

 // Toggle spinner function...
/* const toggleSpinner = isLoading => {
    const loaderSpinner = document.getElementById('loader');
  
    if (isLoading) {
      loaderSpinner.classList.remove('d-none');
    }
    else {
      loaderSpinner.classList.add('d-none');
    }
  }  */



const loadMenus=async(category_id) => {
    
    const url2 = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    console.log(url2);
    const res = await fetch(url2);
    const data = await res.json();

    displayMenus(data.data);
     /*  fetch(url)
          .then(res => res.json())
          .then(data => displayPhones(data.data)); */
        
       
  }
  
const displayMenus= (menus) => {
   // toggleSpinner(true);
    const postContainer = document.getElementById('post-container');
   postContainer.innerHTML="";
    menus.forEach(menu => {
        const postRow = document.createElement('div');
        postRow.classList.add('row');
        postRow.innerHTML =`
        <div class="col-lg-12 col-sm-12 container" > 
        <div class="card mb-3 border border-primary shadow-lg rounded-4">
            <div class="row g-0 ">
               <div class="col-md-4">
                 <img src="${menu.thumbnail_url}" alt="...">
             </div>
              <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title fw-bolder">${menu.title}</h5>
                        <p class="card-text text-secondary text-muted"> <small>The five main principles of UX design. We've broken them down into five main concepts: Empathy, strategy, usability, inclusivity, and validation.</small></p>
                        <p  class=" card-text text-info fw-bold">Price:98$</p>
                    </div>
              </div>
         </div>
       </div>
     </div>
        `;
        postContainer.appendChild(postRow);
        console.log(menu);
    })
   
}





/*  */