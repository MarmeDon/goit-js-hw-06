const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);

itemEl.forEach(item => {
   console.log("Category:", item.querySelector('h2').textContent);
   console.log("Elements:", item.querySelectorAll('li').length);
})