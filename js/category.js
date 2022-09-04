
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
      
      
    }) 
   
}

 // Toggle spinner function...
 const toggleSpinner = isLoading => {
    const loaderSpinner = document.getElementById('loader');
  
    if (isLoading) {
      loaderSpinner.classList.remove('d-none');
    }
    else {
      loaderSpinner.classList.add('d-none');
    }
  }  



const loadMenus=async(category_id) => {
  toggleSpinner(true)
    const url2 = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    console.log(url2);
    const res = await fetch(url2);
    const data = await res.json();

    displayMenus(data.data);
     /*  fetch(url)
          .then(res => res.json())
          .then(data => displayPhones(data.data)); */
          
         
  }
 
const displayMenus = (menus) => {
 

  const displayText = document.getElementById('display-message');
 /*  const postRow = document.createElement('p'); */

  displayText.innerText = menus.length;
  if (menus.length===1) {
    displayText.parentNode.classList.add('d-none');
   
  }
  else {
    
    displayText.parentNode.classList.remove('d-none'); 
  } 


  const postContainer = document.getElementById('post-container');

   postContainer.innerHTML="";
  menus.forEach(menu => {

        const postRow = document.createElement('div');
        postRow.classList.add('row');
        postRow.innerHTML =`
        <div class="col-lg-12 col-sm-12 container" > 
        <div class="card mb-3 border border-primary shadow-lg rounded-4">
            <div class="row g-0 ">
               <div class="col-md-4 ">
                 <img class="menu-thumbnail" src="${menu.thumbnail_url}" alt="...">
             </div>
              <div class="col-md-8 ">
                    <div class="card-body">
                        <h5 class="card-title fw-bolder">${menu.title}</h5>
                        <p class="card-text text-secondary "> <small>${menu.details.length >300 ? menu.details.slice(0,300)+'...' : menu.details}</small></p>
                
                    </div>
                    <div class="d-flex">

  <div class="px-3 d-flex align-items-center justify-content-start">
    <img class="rounded-circle author-img" src="${menu.author.img}" alt="">
    <div>
      <h6 class="pt-3">${menu.author.name ? menu.author.name : 'Author not Found.' }</h6>
      <p> ${menu.author.published_date ? menu.author.published_date : 'Date not found.'  }<p>
    </div>
  </div>
   <div class="d-flex align-items-center justify-content-between ">
   <div class="px-3">
      <i class="bi bi-eye-fill"></i>
      <span>${menu.total_view ? menu.total_view : 'Not Found.' }K<span>
      </div>
      <div class="px-5">
    <span >${menu.rating.number}</span>
      <i class="bi bi-star-fill "></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-half"></i>
      </div>
    <div class="pt-3" >
       <button onClick="loadViewDetails('${menu._id}')" class="btn btn-info shadow-lg p-2 mb-4 text-bold bg-body text-info border-info border border-3 rounded" data-bs-toggle="modal" data-bs-target="#modalDetail">Show Details</button>  
  </div>
  </div>
         
              </div>
         </div>
       </div>
     </div>
        `;
      postContainer.appendChild(postRow);
    menu.details.slice(0, 300);

    console.log(menu.details.length);
  
    })
 
    toggleSpinner(false);
    
}

// View details

 const loadViewDetails = async news_id => {
  const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  loadViewDetailsDisplay(data.data);
}
const loadViewDetailsDisplay = viewall => {
  const modalTitle = document.getElementById('modalDetailLabel');
  modalTitle.textContent = '';
  for (const view of viewall) {
    modalTitle.innerText =view.title;

    const modalBody = document.getElementById('modal-body-detail');
  modalBody.innerHTML= ` <div>
  <img class="menu-thumbnail" src="${view.image_url}" alt="...">
  
   

  <p class="card-text text-secondary "> <small>${view.details}</small></p>

</div>
<div class="d-flex align-items-center justify-content-between ">
<div class="px-3 ">
   <i class="bi bi-eye-fill"></i>
   <span>${view.total_view ? view.total_view : 'Not Found.' }<span>
   
   </div>
   <h6 class="pt-3">Author:${view.author.name ? view.author.name : 'Author not Found.' }</h6>
   </div>
 
   `;
  // console.log(phone);
  console.log(view)
  }
}




