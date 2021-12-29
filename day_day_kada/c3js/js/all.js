// 12月21日 2021年
const url = "https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json";
let data, sortData, c3Data, str;
let total = [];
let list = document.querySelector('#list');
let chart = document.querySelector('#chart');

axios(url).then(res =>{
    data = res.data;
    //sortedData()作用：把原資料按時間排好，時間由短到長;
    sortedData();
    renderList();
    rederC3();
})

function sortedData(){
    sortData = data.sort(function(a, b){
        let timeA = Number(a.practiceMinute)*60 + Number(a.practiceSecond);
        let timeB = Number(b.practiceMinute)*60 + Number(b.practiceSecond);
        return timeA - timeB;
    })
}

function renderList(){
    str = '';
    sortData.forEach(i => {
        str += `<li>姓名：${i.slackName}，花費時間：${i.practiceMinute}分${i.practiceSecond}秒</li>`;
    })
    list.innerHTML = str;
}
function rederC3(){
    let frontData = {};
    data.forEach(i => {
        if(frontData[i.jsGroup] === undefined){
            frontData[i.jsGroup] = 1;
        }else{
            frontData[i.jsGroup] += 1;
        }
    })
    let objkey = Object.keys(frontData);
    objkey.forEach(i => {
        let ary = [];
        ary.push(i);
        ary.push(frontData[i]);
        total.push(ary);
        })
        let reder = c3.generate({
            hindto: '#chart',
            data: {
                columns: total,
                type: 'donut'
            },
            donut: {
                title: '各組人數比例'
            }
        })
    }