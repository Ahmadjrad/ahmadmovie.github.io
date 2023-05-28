var movieList = [
    {
       name: 'The Dark Knight',
       quality: '4k',
       date: '2008',
       category: 'Action/Crime/Drama',
       rate: '9.0',
       time: '2h 32m',
       imgSrc: 'image/d.jpg'
    },
    {
        name: 'Forrest Gunp ',
        quality: 'FHD',
        date: '1994',
        category: 'Romance/Drama',
        rate: '8.8',
        time: '2h 22m',
        imgSrc: 'image/f.jpg'
     },
     {
        name: 'The Godfather',
        quality: 'HD',
        date: '1972',
        category: 'Crime/Drama',
        rate: '9.2',
        time: '2h 55m',
        imgSrc: 'image/g.jpg'
     },
     {
        name: 'Inception',
        quality: '4k',
        date: '2010',
        category: 'Action/Adventure/Sci-Fi',
        rate: '8.8',
        time: '2h 28m',
        imgSrc: 'image/i.jpg'
     },
     {
        name: 'Shutter Island',
        quality: 'FHD',
        date: '2010',
        category: 'Mystery/Thriller',
        rate: '9.0',
        time: '2h 32m',
        imgSrc: 'image/s.jpg'
     },
    
]

var filteredList = [
   ...movieList
];

createMovieList();

var searchInput = document.getElementById('searchInput');

function onSearch() {
    console.log(searchInput.value)
    filteredList = movieList.filter(movie => movie.name.toLocaleLowerCase().startsWith(searchInput.value.toLocaleLowerCase()))

    console.log({filteredList});

   removeChildren('.col-12', document.body);
 
   createMovieList();

}

function removeChildren(cssSelector, parentNode){
   var elements = parentNode.querySelectorAll(cssSelector);
   let fragment = document.createDocumentFragment(); 
   fragment.textContent=' ';
   fragment.firstChild.replaceWith(...elements);
}

function createMovieList() {


   filteredList.forEach(movie => {
      var div = document.createElement('div');

      var content = `
      <div class="card">
   
      <div class="details">
   
          <div class="left">
   
              <p class="name">${movie.name}</p>
              <div class="date_quality">
                  <p class="quality">${movie.quality}</p>
                  <p class="date">${movie.date}</p>
              </div>
              <p class="category">${movie.category}</p>
   
              <div class="info">
   
                  <div class="rate">
                      <i class="fa-solid fa-star"></i>
                      <p>${movie.rate}</p>
                  </div>
                  <div class="time">
                      <i class="fa-regular fa-clock"></i>
                      <p>${movie.time}</p>
                  </div>
   
              </div>
   
          </div>
   
          <div class="right">
   
              <i class="fa-solid fa-play"></i>
   
          </div>
   
      </div>
   
      <img src="${movie.imgSrc}">
   
   </div>
      `;

      div.innerHTML = content;
      div.className = "col-lg-3 col-md-4 col-sm-6 col-12";
      document.getElementById('myBox').appendChild(div);
   });

 
}