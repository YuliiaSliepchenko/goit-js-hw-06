const navElCategory = document.querySelectorAll('.item');
console.log('Number of categories:');
console.log(navElCategory.length);

navElCategory.forEach(element => {
    const textEl = element.firstElementChild;
    const listLiEl = element.lastElementChild.children;
    console.log('Category:' , textEl.textContent);
    console.log('Elements:' , listLiEl.length);
});

