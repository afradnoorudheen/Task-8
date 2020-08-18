var text1=document.getElementById('text1');
var text2=document.getElementById('text2');
var text3=document.getElementById('text3');
var text4=document.getElementById('text4');
var text5=document.getElementById('text5'); 
var text6=document.getElementById('text6');

var icon1=document.getElementById('icon1');
var icon2=document.getElementById('icon2');
var icon3=document.getElementById('icon3');
var icon4=document.getElementById('icon4');
var icon5=document.getElementById('icon5');
var icon6=document.getElementById('icon6');

var Menuicon = [icon1,icon2,icon3,icon4,icon5,icon6];
var Menutext = [text1,text2,text3,text4,text5,text6];

var bor1 = document.getElementById('bor1');
var bor2 = document.getElementById('bor2');
var bor3 = document.getElementById('bor3');
var bor4 = document.getElementById('bor4');
var bor5 = document.getElementById('bor5');
var bor6 = document.getElementById('bor6');

var bor=[bor1,bor2,bor3,bor4,bor5,bor6];

bor[0].setAttribute("style","box-shadow: 5px 0px 0px 0px #4E71E7;");



document.getElementById('centerItems').innerHTML = document.getElementById("dashboardItems").innerHTML;
function show(param_div_id,num) {

    document.getElementById('centerItems').innerHTML = document.getElementById(param_div_id).innerHTML;
    
          
    var i;
    for(i=0;i<6;i++){
        Menutext[i].setAttribute("style","color:#B6B6B9;");
        bor[i].setAttribute("style","box-shadow:none");
        if(i==1)
        {
            Menuicon[i].setAttribute("style","font-size: 1.2em; color:#B6B6B9;");
        }
        else{
            Menuicon[i].setAttribute("style","fill:#B6B6B9;");
        }
        
    }
    if(num==1){
        Menuicon[num].setAttribute("style","font-size: 1.2em; color:#4E71E7;");
        Menutext[num].setAttribute("style","color:#000000;"); 
        }
        else{
        Menuicon[num].setAttribute("style","fill:#4E71E7;");
        Menutext[num].setAttribute("style","color:#000000;"); 
        }
    
     document.getElementById('centerHeading').innerHTML = Menutext[num].innerHTML;   
     bor[num].setAttribute("style","box-shadow: 5px 0px 0px 0px #4E71E7;");
    
  }