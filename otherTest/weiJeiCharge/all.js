console.clear();
let data = [
    {
        Charge: "免費",
        name:"廖洧杰充電站"
    },
    {
        Charge: "投幣式",
        name:"小花充電站"
    },
    {
        Charge: "投幣式",
        name:"小明充電站"
    },
    {
        Charge: "投幣式",
        name:"小天充電站"
    }
]

const simpleType = {
    free: [],
    paid: []
}
data.forEach(i => {
    if(i.Charge == "免費"){
        console.log(i.Charge);
        simpleType['free'].push(i.Charge);
    }else{
        console.log(i.Charge);
        simpleType['paid'].push(i.Charge);
        }
    })
console.log(`目前免費充電站有${simpleType.free.length}處`);
console.log(`目前投幣式充電站有${simpleType.paid.length}處`);



const filter = document.querySelector('.filter');
const list = document.querySelector('.list');
let dataName = document.querySelector('.stationName');
let dataCharge = document.querySelector('.stationCharge');
let showInfo = document.querySelector('.show-info');
let saveBtn = document.querySelector('.btn');
let str = '';

function init(){
    str = ''
    data.forEach(i => {
        str += `<li>${i.name}，${i.Charge}</li>`;
        list.innerHTML = str;
    })
}
init();


filter.addEventListener('click',function(e){
    str = '';
    console.log(e.target.value);
    if (e.target.value == undefined) return list.innerHTML = "<li>你點到空值。</li>";
    data.forEach(i => {
        
        if( i.Charge === e.target.value){
            str += `<li>${i.name}，${i.Charge}</li>`;
            list.innerHTML = str;
        }else if(e.target.value == "全部"){
            init();
        }
    })
})

saveBtn.addEventListener("click", function(e){
    if (dataName.value == '' || dataCharge.value == '') return showInfo.innerHTML = `<h3 class='red'>你輸入的是空值，請重新輸入。</h3>`;
    if ((dataCharge.value == "投幣式")|| (dataCharge.value =="免費")){
        obj={};
        obj.name = `${dataName.value}充電站`;
        obj.Charge = `${dataCharge.value}`;
        data.push(obj);
        showInfo.innerHTML = `<h3 class='red'>你輸入的資料是：${dataName.value}充電站，${dataCharge.value}。</h3>`;
        init();
        dataName.value = '';
    } else {
        showInfo.innerHTML = `<h3 class='red'>請輸入 投幣式"or"免費"。</h3>`;
    }
})