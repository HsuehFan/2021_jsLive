// 12月28日 2021年 第一次
let data, sortData, str;
let c3Data = [];
const list = document.querySelector('#list');
let url = 'https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json';
axios(url).then(res => {
    data = res.data;
    renderC3();
    sorted();
    renderList();
})
function renderC3(){
    let total = {};
    data.forEach(i => {
        if(total[i.jsGroup] === undefined){
            total[i.jsGroup] = 1;
        }else{
            total[i.jsGroup] += 1;
        }
    })
    let frontData = Object.keys(total);
    frontData.forEach(i => {
        let ary = [];
        ary.push(i);
        ary.push(total[i]);
        c3Data.push(ary);
    })
    let transC3 = c3.generate({
        bindto: '#chart',
        data: {
            columns: c3Data,
            type: 'donut'
        },
        donut: {
            title: '各組人數比例'
        }
    })
}
function sorted(){
    sortData = data.sort((a, b) => {
        let timeA = (a.practiceMinute)*60 + (a.practiceSecond);
        let timeB = (b.practiceMinute)*60 + (b.practiceSecond);
        return timeA - timeB;
    })
}
function renderList(){
    str = '';
    sortData.forEach(i => {
        str +=`<li>姓名：${i.slackName}，花費時間：${i.practiceMinute}分${i.practiceSecond}秒</li>`;
    })
    list.innerHTML = str;
}