var flag=0;
function setData(num){
    if(flag==1){
    txt1.value+=num;
    console.log(num);
    }
}
function clearData(){
    if(flag==1){
    txt1.value=" ";
    }
}
function ev(){
    if(flag==1){
    txt1.value=eval(txt1.value);
    }
}
function Del(){
    if(flag==1){
    txt1.value=txt1.value.slice(0,-1);
    }
}

function OnOff(){
    
    if(flag==0){
        var element = document.getElementById("txt1");
        element.style.backgroundColor = "#00FC30";
        flag=1;
    }
    else{
        var element = document.getElementById("txt1");
        element.style.backgroundColor = "rgb(44, 165, 44)";
        clearData();
        flag=0;
    }
}