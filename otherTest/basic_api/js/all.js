console.clear();

let newData ='';
let totalData = [
    
];

const urlPath = 'https://raw.githubusercontent.com/HsuehFan/json/main/region.json';
axios.get(urlPath).then(function(res){
    const data = res.data;  
    console.log(data[0]);
    gender();
})
.catch(function(error){
    console.log(error);
})

function gender(data){
    newData = data;
    console.log(newData)
    console.log(genderData.male);
    newData.forEach(i => {
        if (i.性別 == '男'){
            genderData.male += 1;
            console.log(i);
        } else if(i.性別 == '女'){
            genderData.famale += 1;
        }
    
    })
}