// 12月28日 2021年 第一次

let txt = document.querySelector('.text');
let save = document.querySelector('.save');
let list = document.querySelector('.list');
let data = [];
let str ='';
save.onclick = addlist;
list.onclick = del;
init();
function init(){
    str ='';
    data.forEach((i, index) => {
        str += `<li>${i['todolis']}<button data-num='${index}'>刪除</button></li>`;
    })
    list.innerHTML = str;
}
function addlist(){
    if(txt.value == '' ) return list.innerHTML = `<p>請輸入正確資料</p>`;
    data.push({todolis: txt.value});
    init();
    txt.value = '';
}
function del(e){
    let num = e.target.getAttribute('data-num');
    data.splice(num, 1);
    init();
}
