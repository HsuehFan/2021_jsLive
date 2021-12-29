// 12月24日 2021年
const url = 'https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json';
let list = document.querySelector('#list');
let data, sortedData, str; 
let c3Data = [];

axios.get(url).then(res => {
    data = res.data;
    rendrC3();
    sortData();
    renderList();
})
function rendrC3(){
    let frontData = {};
    data.forEach(i => {
        if(frontData[i.jsGroup] === undefined){
            frontData[i.jsGroup] = 1;
        }else{
            frontData[i.jsGroup] +=1;
        }
    })
    let secData = Object.keys(frontData);
    secData.forEach(i => {
        let ary = [];
        ary.push(i);
        ary.push(frontData[i]);
        c3Data.push(ary);
    })
    let c3rander = c3.generate({
        bindto: '#chart',
        data: {
            columns: c3Data,
            type: 'donut'
        },
        donut:{
            title:  '各組人數比例'
        }
    })
}
function sortData(){
    sortedData = data.sort(function(a, b){
        let timeA = parseInt(a.practiceMinute)*60 + parseInt(a.practiceSecond);
        let timeB = parseInt(b.practiceMinute)*60 + parseInt(b.practiceSecond);
        return timeA - timeB;
    })
} 

function renderList(){
    sortedData.forEach(i =>{
        str += `<li>姓名：${i.slackName}，花費時間${i.practiceMinute}分${i  .practiceSecond}秒。</li>`;
    })
    list.innerHTML = str;
}