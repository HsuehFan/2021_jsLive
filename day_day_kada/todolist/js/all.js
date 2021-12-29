// 12月23日 2021年
let text = document.querySelector('.text');
const saveBtn = document.querySelector('.save');
const list = document.querySelector('.list');
let str;
let data=[];
saveBtn.addEventListener('click', addData);
list.addEventListener('click', del);
function init(){
    str = '';
    data.forEach((i, index) => {
        str += `<div class="d-flex"><li class="me-5">${i['toDoList']}</li><i class="far fa-trash-alt" data-num="${index}"></i></div>`;
    })
    list.innerHTML = str;
}
init();
function addData(){
    if(text.value === '') return list.innerHTML = `<p style="color: red;">請勿輸入空值。</p>`;
    data.push({'toDoList': text.value});
    init();
    text.value = '';
}
function del(e){
    let num = e.target.getAttribute('data-num');
    data.splice(num, 1);
    init();
}