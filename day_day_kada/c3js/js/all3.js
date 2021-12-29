// 12月25日 2021年
const url = 'https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json';
let data, str, sortedData;
const list = document.querySelector('#list');
const c3data = [];
axios(url).then(res => {
    data = res.data;
    randerC3();
    sortData();
    renderList();
})
function randerC3(){
    let fData = {};
    data.forEach(i => {
        if(fData[i.jsGroup] === undefined){
            fData[i.jsGroup] = 1;
        }else{
            fData[i.jsGroup] += 1;
        }
    })
    let bData = Object.keys(fData);
    bData.forEach(i => {
        let ary = [];
        ary.push(i);
        ary.push(fData[i]);
        c3data.push(ary);
    })
    let pic = c3.generate({
        bindto: '#chart',
        data: {
            columns: c3data,
            type: 'donut'
        },
        donut: {
            title: '各組人數比例'
        } 
    })
}
function sortData(){
    sortedData = data.sort((a, b) =>{
        let timeA = Number(a.practiceMinute)*60 + Number(a.practiceSecond);
        let timeB = Number(b.practiceMinute)*60 + Number(b.practiceSecond);
        return timeA - timeB;
    })
}
function renderList(){
    sortedData.forEach(i => {
        str += `<li>姓名：${i.slackName}，花費時間：${i.practiceMinute}分${i.practiceSecond}秒。</li>`;
    })
    list.innerHTML = str;
}