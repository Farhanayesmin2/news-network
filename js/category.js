
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
   toggleSpinner(false);
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
    toggleSpinner(true);
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
                        <p class="card-text text-secondary "> <small>${menu.details}</small></p>
                       
                    </div>
                    <button onClick="loadViewDetails('${menu._id}')" class="btn btn-info shadow-lg p-2 mb-4 text-bold bg-body text-info border-info border border-3 rounded" data-bs-toggle="modal" data-bs-target="#modalDetail">Show Details</button>
                   
              </div>
         </div>
       </div>
     </div>
        `;
      postContainer.appendChild(postRow);
      

    console.log(menu);
    })
   
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
  modalBody.innerText = 'Hello';
  // console.log(phone);
  console.log(view)
  }

 
  
  
  
}
   
/*   }) */





/*  <img src="${phone.image}" alt="">
  <p>Realse Date: ${phone.releaseDate ? phone.releaseDate : 'No Realse Date Found.'}</p>
  <h2>Phone Details: </h2>

 <p> DisplaySize:${phone.mainFeatures.displaySize} </p>
 <p> Memory: ${phone.mainFeatures.memory}  </p>
  Storage:${phone.mainFeatures.storage}
  </p>
  <h3>Other Details: </h3>
  <p>Bluetooth: ${phone.others ? phone.others.bluetooth : 'No Bluetooth information Found.'}</p>
  
  
   <button onClick="loadViewDetails('${menu.category_id}')" class="btn btn-info shadow-lg">View Details </button>*/