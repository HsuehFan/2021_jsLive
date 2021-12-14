// let data = [
//         {
//             "id": 0,
//             "name": "肥宅心碎賞櫻3日",
//             "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
//             "area": "台北",
//             "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
//             "group": 87,
//             "price": 1400,
//             "rate": 10
//         },
//         {
//             "id": 1,
//             "name": "貓空纜車雙程票",
//             "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//             "area": "台北",
//             "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
//             "group": 99,
//             "price": 240,
//             "rate": 2
//         },
//         {
//             "id": 2,
//             "name": "台中谷關溫泉會1日",
//             "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//             "area": "台中",
//             "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
//             "group": 20,
//             "price": 1765,
//             "rate": 7
//         },
//         {
//             "id": 3,
//             "name": "綠島自由行套裝行程",
//             "imgUrl": "./img/QXa1fMZ.png",
//             "area": "高雄",
//             "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合。",
//             "group": 109,
//             "price": 2400,
//             "rate": 9
//         },
//         {
//             "id": 4,
//             "name": "清境高空觀景步道",
//             "imgUrl": "./img/4UHm8WX.png",
//             "area": "台中",
//             "description": "清境農場青青草原數十公頃碧草，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
//             "group": 49,
//             "price": 1240,
//             "rate": 6
//         },
//         {
//             "id": 5,
//             "name": "山林悠遊套票",
//             "imgUrl": "./img/H97Wgfn.png",
//             "area": "高雄",
//             "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點。",
//             "group": 35,
//             "price": 1565,
//             "rate": 8
//         }
        
//     ];



const form = document.querySelector('.addTicket-form');
let ticketName = document.querySelector('#ticketName');
let ticketImgUrl = document.querySelector('#ticketImgUrl');
let ticketRegion = document.querySelector('#ticketRegion');
let ticketPrice = document.querySelector('#ticketPrice');
let ticketNum = document.querySelector('#ticketNum');
let ticketRate = document.querySelector('#ticketRate');
let ticketDescription = document.querySelector('#ticketDescription');
const addTicketBtn = document.querySelector('.addTicket-btn');
let cardArea = document.querySelector('.ticketCard-area');
let str = '';
let dataLong = document.querySelector('#searchResult-text');
let selectRegion = document.querySelector('.regionSearch');
let urlData = '';

//網路請求 Axios
let urlPath = "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";
axios(urlPath).then(function(res){
    urlData = res.data.data;
    init();
    addTicketBtn.addEventListener('click', inputMessge);
    selectRegion.addEventListener('change', function(){
        
        urlData.forEach(i => {
            if(i.area == selectRegion.value){
                searchData(selectRegion.value);
                console.log(selectRegion.value);
            };
                
            });
        })  
});


// 把表單資料寫入 data 內
    function inputMessge(){
        
        urlData.push({
            id: Date.now(),
            name: ticketName.value,
            imgUrl: ticketImgUrl.value,
            area: ticketRegion.value,
            description: ticketDescription.value,
            group: Number(ticketRate.value), 
            price: Number(ticketPrice.value),
            rate: Number(ticketNum.value)
        });
        init();
        total();
        form.reset();
    }



//顯示所有資料共有幾筆
function total(){
    dataLong.textContent = `本次搜尋共 ${urlData.length} 筆資料`;
};


//資料初始化--- 一開始把所資料渲染出來。
function init(){
    str='';
    urlData.forEach(i => {
        str +=`
        <li class="ticketCard">
        <div class="ticketCard-img">
        <a href="#">
            <img src="${i.imgUrl}" alt="">
        </a>
        <div class="ticketCard-region">${i.area}</div>
        <div class="ticketCard-rank">${i.rate}</div>
        </div>
        <div class="ticketCard-content">
        <div>
            <h3>
            <a href="#" class="ticketCard-name">${i.name}</a>
            </h3>
            <p class="ticketCard-description">
            ${i.description}
            </p>
        </div>
        <div class="ticketCard-info">
            <p class="ticketCard-num">
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCard-num"> ${i.group} </span> 組
            </p>
            <p class="ticketCard-price">
            TWD <span id="ticketCard-price">$${i.price}</span>
            </p>
        </div>
        </div>
    </li>
        `;
    })
    cardArea.innerHTML = str;
    
}

// 依地區改變 渲染資料

function searchData(fileData){    
    str='';
    const leamon = '';
    leamon = urlData.filter(i => {
        if(i.area == fileData){
        str += `
            <li class="ticketCard">
            <div class="ticketCard-img">
            <a href="#">
                <img src="${i.imgUrl}" alt="">
            </a>
            <div class="ticketCard-region">${i.area}</div>
            <div class="ticketCard-rank">${i.rate}</div>
            </div>
            <div class="ticketCard-content">
            <div>
                <h3>
                <a href="#" class="ticketCard-name">${i.name}</a>
                </h3>
                <p class="ticketCard-description">
                ${i.description}
                </p>
            </div>
            <div class="ticketCard-info">
                <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${i.group} </span> 組
                </p>
                <p class="ticketCard-price">
                TWD <span id="ticketCard-price">$${i.price}</span>
                </p>
            </div>
            </div>
        </li>
            `;
        }
        return str;
    })
    cardArea.innerHTML = leamon;
    console.log(str);
}