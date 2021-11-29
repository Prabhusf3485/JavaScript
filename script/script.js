function validation()
{
    var nameinfo = document.getElementById("name");
    var fname= document.getElementById("fname");
    var email= document.getElementById("mail");
    var date =document.getElementById("dob");
    var pnumber = document.getElementById("phone");
    var address1 =document.getElementById("ad1");
    var address2 =document.getElementById("ad2");
    var address11 =document.getElementById("ad11");
    var address22 =document.getElementById("ad22");
    var place =document.getElementById("city");
    var code1 =document.getElementById("pin1");
    var place1 =document.getElementById("city1");
    var code =document.getElementById("pin");
    var checkbox=document.getElementById("ck1").value;
    var pic = document.getElementById("photo");

    var regx =/^[a-zA-Z]{1,50}$/;
    var regx1 =/^[a-zA-Z]{2,50}$/;
    var regxmail =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,10})$/;
    var regxdob =/^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    var regxmob = /^[7-9]\d{9}$/;
    var regxplace=/^[a-zA-Z]{2,50}/;
    var regxpin=/^([0-9]{1})([0-9]{1})([0-9]{1})([0-9]{1})([0-9]{1})([0-9]{1})$/;
    
    if(regx.test(nameinfo.value))
    {
        
        document.getElementById("error").style.visibility=("hidden");
        
    }
    else if(nameinfo.value.trim()=="")
    {
        document.getElementById("error").style.visibility="visible";
        document.getElementById("name").style.border="2px red solid";

    }
    else  {
        document.getElementById("error").innerHTML="special character and numbers are not allowed";
        document.getElementById("error").style.visibility="visible";
        document.getElementById("name").style.border="2px red solid";
              
              
    
     }
    if(regx1.test(fname.value)){
        
       document.getElementById("error1").style.visibility="hidden";
       
    }
    else if (fname.value.trim()==""){
        
        document.getElementById("error1").style.visibility="visible";
        document.getElementById("fname").style.border="2px red solid";

    }
    else  {
        document.getElementById("error1").innerHTML="special character and numbers are not allowed";
        document.getElementById("error1").style.visibility="visible";
        document.getElementById("fname").style.border="2px red solid";

        
    
    }
    if(regxmail.test(email.value)){
        document.getElementById("errormail").style.visibility="hidden";

    }
    else if(email.value.trim()=="")
    {
            document.getElementById("errormail").style.visibility="visible";
            document.getElementById("mail").style.border="2px red solid";
    }
    else{
        document.getElementById("errormail").innerHTML="please enter valid mail";
        document.getElementById("errormail").style.visibility="visible";
        document.getElementById("mail").style.border="2px red solid";
    }
    if(regxdob.test(date.value)){
        document.getElementById("errordob").style.visibility=("hidden");

    }
    else if(date.value.trim()==""){
        document.getElementById("errordob").style.visibility="visible";
        document.getElementById("dob").style.boder="2px red solid";


    }
    else{
        document.getElementById("errordob").innerHTML="please enter valid dob";
        document.getElementById("errordob").style.visibility="visible";
        document.getElementById("dob").style.boder="2px red solid";

    }
    if(regxmob.test(pnumber.value)){
        document.getElementById("errornum").style.visibility="hidden";
    }
    else if(pnumber.value.trim()==""){
        document.getElementById("errornum").style.visibility="visible";
        document.getElementById("phone").style.border="2px red solid";

    }
    else{
        document.getElementById("errornum").innerHTML="please enter valid number";
        document.getElementById("errornum").style.visibility="visible";
        document.getElementById("phone").style.border="2px red solid";
    }
    if(address1.value.trim()==""){
        document.getElementById("errorad1").style.visibility="visible";
         document.getElementById("ad1").style.border="2px red solid";
        
        
     }
     else  {
        document.getElementById("errorad1").style.visibility="hidden";
        
              
 
     }
     
    
     if(address2.value.trim()==""){
        document.getElementById("errorad2").style.visibility="visible";
         document.getElementById("ad2").style.border="2px red solid";
        
        
     }
     else  {
        document.getElementById("errorad2").style.visibility="hidden";
      
              
      }
    if(regxplace.test(place.value)){
        document.getElementById("errorcity").style.visibility="hidden";

    }
    else if(place.value.trim()=="")
    {
            document.getElementById("errorcity").style.visibility="visible";
            document.getElementById("city").style.border="2px red solid";
    }
    else{
        document.getElementById("errorcity").innerHTML="please enter valid city";
        document.getElementById("errorcity").style.visibility="visible";
        document.getElementById("city").style.border="2px red solid";
    }
    if(regxpin.test(code.value)){
        document.getElementById("errorcity").style.visibility="hidden";

    }
    else if(code.value.trim()=="")
    {
            document.getElementById("errorpin").style.visibility="visible";
            document.getElementById("pin").style.border="2px red solid";
    }
    else{
        document.getElementById("errorpin").innerHTML="please enter valid pin";
        document.getElementById("errorpin").style.visibility="visible";
        document.getElementById("pin").style.border="2px red solid";
    }
    if(address11.value.trim()==""){
        document.getElementById("errorad11").style.visibility="visible";
         document.getElementById("ad11").style.border="2px red solid";
        
        
     }
     else  {
        document.getElementById("errorad11").style.visibility="hidden";
        
              
 
     }
     
    
     if(address22.value.trim()==""){
        document.getElementById("errorad22").style.visibility="visible";
         document.getElementById("ad22").style.border="2px red solid";
        
        
     }
     else  {
        document.getElementById("errorad22").style.visibility="hidden";
      
              
      }
    if(regxplace.test(place1.value)){
        document.getElementById("errorcity1").style.visibility="hidden";

    }
    else if(place1.value.trim()=="")
    {
            document.getElementById("errorcity1").style.visibility="visible";
            document.getElementById("city1").style.border="2px red solid";
    }
    else{
        document.getElementById("errorcity1").innerHTML="please enter valid city";
        document.getElementById("errorcity1").style.visibility="visible";
        document.getElementById("city1").style.border="2px red solid";
    }
    if(regxpin.test(code1.value)){
        document.getElementById("errorcity1").style.visibility="hidden";

    }
    else if(code1.value.trim()=="")
    {
            document.getElementById("errorpin1").style.visibility="visible";
            document.getElementById("pin1").style.border="2px red solid";
    }
    else{
        document.getElementById("errorpin1").innerHTML="please enter valid pin";
        document.getElementById("errorpin1").style.visibility="visible";
        document.getElementById("pin1").style.border="2px red solid";
    }
    if(pic.value.trim()==""){
        document.getElementById("errorphoto").style.visibility="visible";
        document.getElementById("photo").style.border="2px red solid";
    }
    else{
        document.getElementById("errorphoto").style.visibility="hidden";
    }



}
function copy(){
    var address111 =document.getElementById("ad11");
    var address222 =document.getElementById("ad22");
    var code11 =document.getElementById("pin1");
    var place11 =document.getElementById("city1");
    var checkbox1=document.getElementById("ck2").value;

    document.getElementById("ad1")=address111;
    document.getElementById("ad2")=address222;
    document.getElementById("pin")=code11;
    document.getElementById("city")=place11;
    document.getElementById("ck1")=checkbox1;



}
