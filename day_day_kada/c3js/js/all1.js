// 12月23日 2021年
console.clear();
let oData, sortData, str, c3Data, total;
const list = document.querySelector('#list');
const url = "https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json";
axios(url).then(res =>{
    oData = res['data'];
    //sortedData()用來排列時間大小順序
    sortedData();
    // renderList() 將 排列好大小順序的資料渲染到題目二
    renderList();
    // renderC3() 按組分人數，並使用c3作圖;
    renderC3();
}) 
function sortedData(){
    sortData = oData.sort((a, b) => {
        let timeA = Number(a.practiceMinute)*60 + Number(a.practiceSecond);
        let timeB = Number(b.practiceMinute)*60 + Number(b.practiceSecond);
        return timeA - timeB;
    })
    console.log(sortData);
}
function renderList(){
    str='';
    sortData.forEach(i => str += `<li>姓名：${i.slackName}，花費時間${i.practiceMinute}分${i.practiceSecond}秒</li>`);
    list.innerHTML = str;
}
function renderC3(){
    total = {};
    c3Data = [];
    sortData.forEach(i =>{
        if (total[i.jsGroup] === undefined){
            total[i.jsGroup] = 1;
        }else{
            total[i.jsGroup] += 1;
        }
    })
    let ary = Object.keys(total);
    ary.forEach(i => {
        let aryData = [];
        aryData.push(i);
        aryData.push(total[i]);
        c3Data.push(aryData);
    })
    let pic = c3.generate({
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
