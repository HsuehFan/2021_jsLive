// JS - 4 - Cooley

// 第一階段：請寫 printBmi 函式，並印出對應狀態
// printBmi( 178, 20) >> 印出 console.log 文字為 '您的體重過輕'
// printBmi( 178, 70) >> 印出 console.log 文字為 '您的體重正常'
// printBmi( 178, 85) >> 印出 console.log 文字為 '您的體重過重'
// printBmi( 178, 90) >> 印出 console.log 文字為 '您的體重輕度肥胖'
// printBmi( 178, 110) >> 印出 console.log 文字為 '您的體重中度肥胖'
// printBmi( 178, 130) >> 印出 console.log 文字為 '您的體重重度肥胖'
// printBmi("身高","體重") >> 印出 console.log 文字為 '您的數值輸入錯誤，請重新輸入'

// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。
// printBmi( 178, 20) >> 印出 console.log 文字為 '您的體重過輕，健康指數為藍色'
// printBmi( 178, 70) >> 印出 console.log 文字為 '您的體重正常，健康指數為紅色'
// printBmi( 178, 85) >> 印出 console.log 文字為 '您的體重過重，健康指數為澄色'
// printBmi( 178, 90) >> 印出 console.log 文字為 '您的體重輕度肥胖，健康指數為黃色'
// printBmi( 178, 110) >> 印出 console.log 文字為 '您的體重中度肥胖，健康指數為黑色'
// printBmi( 178, 130) >> 印出 console.log 文字為 '您的體重重度肥胖，健康指數為綠色'
// printBmi("身高","體重") >> 印出 console.log 文字為 '您的數值輸入錯誤，請重新輸入'

 // 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

  // printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
  // printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
  // printBmi(178, 85) >> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
  // showHistoryData() >> 印出 console.log 文字為 '您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重


const bmiStatesData = {
    overThin: {
        state: '過輕',
        color: '藍色',
    },
    normal: {
        state: '正常',
        color: '紅色',
    },
    overWeight: {
        state: '過重',
        color: '澄色',
    },
    mildFat: {
        state: '輕度肥胖',
        color: '黃色',
    },
    moderateFat: {
        state: '中度肥胖',
        color: '黑色',
    },
    severeFat: {
        state: '重度肥胖',
        color: '綠色',
    },
};

 

const historyData = [];

function mappingData(bmi, state){
    let transStr = bmiStatesData[state];
    historyData.push({state: transStr.state, color: transStr.color});
    console.log(`您的體重是${bmi}公斤，${transStr.state}，健康指數為${transStr.color}。`);
}

function bmiPrint(height, weight){
    if((typeof(weight) !== 'number')||(typeof(height) !== 'number')) {return console.log("你輸入的不是數字型別資料");}
    const bmi = (weight / (height/100)**2).toFixed(2);
    if (bmi >= 35){mappingData(bmi, 'severeFat');
    }else if(bmi >= 30){ mappingData(bmi, 'moderateFat');
    }else if(bmi >= 27){ mappingData(bmi, 'mildFat');
    }else if(bmi >= 24){ mappingData(bmi, 'overWeight');
    }else if(bmi >= 18.5){ mappingData(bmi, 'normal');
    } else { mappingData(bmi, 'overThin'); }
}
function showHistoryData(){
    const dataLeng = historyData.length;
    console.log(`您總共計算${dataLeng}次 BMI記錄，最後一次 BMI 指數為${historyData[dataLeng-1].color}。`);
}

bmiPrint(178, 20);
bmiPrint(178, 70);
bmiPrint(178, 85);
// bmiPrint(178, 90);
// bmiPrint(178, 110);
// bmiPrint(178, 130);
// bmiPrint('身高', '體重');
showHistoryData();