console.clear();
const account = document.querySelector('.account');
const password = document.querySelector('.password');
const send = document.querySelector('.send');

send.addEventListener('click',function(e){
    signUp();
})

function signUp(){
    if(account.value=='' || password.value ==''){
        return alert("請填寫正確資訊");
    }
    const path = 'https://hexschool-tutorial.herokuapp.com/api/signup';
    let obj = {}
            obj.email= account.value;
            obj.password = password.value;
    axios.post(path, obj).then(function(res){
        if(res.data.message=="帳號註冊成功"){
            alert("恭喜帳號註冊成功");
        }else{
            alert("帳號註冊失敗，有可能有人用你的email註冊！");
        }
            account.value = "";
            password.value="";
        })
        .catch(function(error){
            console.log(error);
        })
}
