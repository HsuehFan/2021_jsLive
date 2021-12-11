const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener('click',function(e){
    console.log(e.target.nodeName);
    console.log(e.target);
})

const link = document.querySelector('a');
console.log(link);
link.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector('h1').textContent = "google連結被取消了。";
})