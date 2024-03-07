const baseurl=" https://v6.exchangerate-api.com/v6/9b83f90436dcc6fe56350e0d/latest/USD"
const dropdown=document.querySelectorAll(".dropdown select")


for(let select of dropdown){
    for (currcode in countrylist){
        let newOption=document.createElement("option");
        newOption.innerText=currcode;
        newOption.value=currcode;
        if(select.name==='from' && currcode==='INR'){
            newOption.selected="selected";}
            else if(select.name==='to' && currcode==='USD'){
                newOption.selected="selected";}
        select.append(newOption);
    }
}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
const updateFlag=()=>{
   let currcode=element.value;
   let countrycode=countrylist[currcode];
   let newsrc='https://flagsapi.com/${countrycode}/flat/64.png';
}
