exports.getDate=function (){
    let today= new Date();
    let options = {weekday: "long",day : "numeric", month: "long",year:"numeric",time:"numeric"};

    var day = today.toLocaleDateString("eng-US",options);
    var day = today.toLocaleTimeString("eng-US",options);
    return day;
}