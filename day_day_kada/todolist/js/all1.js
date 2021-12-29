// 12月25日 2021年
const btn = document.querySelector('.save');
let txt = document.querySelector('.text');
const list = document.querySelector('.list');
let data = [];
let str = '';
btn.onclick = addList;
list.onclick = del;
function rander(){
    str = '';
    data.forEach ((i,index) => {
        str +=`<li>${i.todo}<button type="button" data-num="${index}">刪除</button></li>`;
    })
    list.innerHTML = str;
}
rander();

function addList(){
    if(txt.value ==='') return list.innerHTML = `<p>請輸入正確資料。</p>`;
    let obj = {};
    obj.todo = txt.value;
    data.push(obj);
    rander();
    txt.value = '';
}

function del(e){
    let num = e.target.getAttribute('data-num');
    console.log(num);
    data.splice(num, 1);
    rander();
}