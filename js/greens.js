// JavaScript Document
/* greens=new Object();
		greens.chname="";
		greens.enname="";
        greens.minpic="";
        greens.maxpic="";
        greens.craft="";
        greens.flavor="";
		greens.difficulty=0;
        greens.number=0;
        greens.readinesstime=0;
        greens.cookingtime=0;*/
	var stylecooking=new Array("Sichuan cuisine","Shandong cuisine");
    var difficulties=new Array("easy","normal","hard");
	//炒：fry；煮：boil；煎：decoct；焖：braise;蒸：evaporate；拨丝：Dial
    var cookingway=new Array("fry","boil","decoct","braise","dial");
	//0香辣：piquancy；1麻辣:spicy；2鱼香味：fish flavor；3咸鲜味：salty；4其他口味:others；5酱香味：sauce;6甜味：sweet 
    var flavors=new Array("piquancy","spicy","fish flavor","salty","others","sauce","sweet");
		path="img/styleofcooking/";
	    green=new Array();
		green[0]=new greens(0,0,"回锅肉","Sautéed Sliced Pork <br/>with Pepper and Chili","doublecookedporkslicesmin.jpg","doublecookedporkslicesmax.jpg",0,0,1,3,15,30,0);//回锅肉小图片
		green[1]=new greens(0,0,"水煮肉片","Poached Sliced Beef in <br/>Hot Chili Oil","poachedspicyslicesofporkmin.jpg","poachedspicyslicesofporkmax.jpg",1,1,0,1,10,15,1);//水煮肉片小图片
		green[2]=new greens(0,0,"鱼香肉丝","Yu-Shiang Shredded Pork","shreddedporkwithgarlicsaucemin.jpg","shreddedporkwithgarlicsaucemax.jpg",0,2,2,4,10,30,2);//鱼香肉丝小图片
		green[3]=new greens(0,0,"酸菜鱼","Boiled Fish with Pickled<br/> Cabbage and Chili","BoiledFishwithPickledCabbageandChilimin.jpg","BoiledFishwithPickledCabbageandChilimax.jpg",1,3,0,4,5,15,3);//酸菜鱼小图片
		
		green[4]=new greens(0,0,"麻婆豆腐","Mapo Tofu","mapotofumin.jpg","mapotofumax.jpg",2,3,0,1,5,5,4);//回锅肉小图片
		green[5]=new greens(0,0,"宫保鸡丁","Kung Pao Chicken","kungpaochickenmin.jpg","nonepic.png",0,4,2,2,30,60,5);//水煮肉片小图片
		green[6]=new greens(0,0,"辣子鸡","Sautéed Diced Chicken<br/>with Chili and Pepper","dicedchickenmin.jpg","dicedchickenmax.jpg",0,5,2,2,60,10,6);//鱼香肉丝小图片
		
		
		green[7]=new greens(0,1,"黄焖鸡","Braised Chicken","braisedchickenmin.jpg","braisedchickenmax.jpg",3,4,0,3,10,60,7);//酸菜鱼小图片
        green[8]=new greens(0,1,"梅菜肉饼","Preserved vegetable<br/> meat pie","Preservedvegetablemeatpiemin.jpg","Preservedvegetablemeatpiemax.jpg",4,3,1,2,30,15,8);//酸菜鱼小图片
		green[9]=new greens(0,1,"拨丝苹果","Dial the silk apple","Dialthesilkapplemin.jpg","Dialthesilkapplemax.jpg",4,6,0,2,10,30,9);//酸菜鱼小图片
        green[10]=new greens(0,1,"大虾烧白菜","Big shrimp burn cabbage","bigshrimpburncabbagemin.jpg","bigshrimpburncabbagemax.jpg",1,3,0,2,10,15,10);//酸菜鱼小图片
		
		
		green[11]=new greens(1,-1,"鱼香肉丝","Yu-Shiang Shredded Pork","discount75.png","shreddedporkwithgarlicsaucemax.jpg",0,2,2,4,10,30,2);//鱼香肉丝小图片
		green[12]=new greens(1,-1,"酸菜鱼","Boiled Fish with Pickled<br/> Cabbage and Chili","discount25.png","BoiledFishwithPickledCabbageandChilimax.jpg",1,3,0,4,5,15,3);//酸菜鱼小图片
		green[13]=new greens(1,-1,"梅菜肉饼","Preserved vegetable<br/> meat pie","discount50.png","Preservedvegetablemeatpiemax.jpg",4,3,1,2,30,15,8);//酸菜鱼小图片
		green[14]=new greens(1,-1,"拨丝苹果","Dial the silk apple","discount75.png","Dialthesilkapplemax.jpg",4,6,0,2,10,30,9);//酸菜鱼小图片
		
		green[15]=new greens(2,-1,"麻婆豆腐","Mapo Tofu","mapotofumin.jpg","mapotofumax.jpg",2,3,0,1,5,5,4);//回锅肉小图片
		green[16]=new greens(2,-1,"宫保鸡丁","Kung Pao Chicken","kungpaochickenmin.jpg","nonepic.gif",0,4,2,2,30,60,5);//水煮肉片小图片
		green[17]=new greens(2,-1,"辣子鸡","Sautéed Diced Chicken<br/>with Chili and Pepper","dicedchickenmin.jpg","dicedchickenmax.jpg",0,5,2,2,60,10,6);//鱼香肉丝小图片
		green[18]=new greens(2,-1,"大虾烧白菜","Big shrimp burn cabbage","bigshrimpburncabbagemin.jpg","bigshrimpburncabbagemax.jpg",1,3,0,2,10,15,10);//酸菜鱼小图片
    function greens(commoundtype,styleofcooking,chname,enname,minpic,maxpic,craft,flavor,difficulty,number,readinesstime,cookingtime,index)
    {
        this.commoundtype=commoundtype;//推荐类型
		this.styleofcooking=styleofcooking;//所属菜系 
        this.chname=chname;//中文名
        this.enname=enname;//英文名
        this.minpic=minpic;//小图标
        this.maxpic=maxpic;//大图标
		this.craft=craft;//工艺
        this.flavor=flavor;//口味
        this.difficulty=difficulty;//烹饪难度
        this.number=number;//适合人群数量
		this.readinesstime=readinesstime;//烹饪准备时间
        this.cookingtime=cookingtime;//烹饪时长
		this.index=index;//菜索引
    }
	function disdetials(){
		var res=document.getElementById("greendetials").style;
		res.display="none";
		}
    function detials(index){
		var res=document.getElementById("greendetials").style;
		res.display="block";
		res.backgroundColor="red";
		}
	function selectstyleofcooking(commoundtypes,styles){
		cols=4;
		rows=5;
// onMouseOver=\"detials("+green[i].index+")\"  onMouseOut=\"disdetials()\"
		results="<table cellspacing=\"10\"><tr>"
		line=1;
        nums=0;
        var commonstr1="<td ><div style=\"text-align:center;\" class=\"egreen\"><img src=\"";
        var commonstr2="\" class=\"imgsty\" id=imgid\"-";
        var commonstr3="-\"/></div><div style=\"height:30px\"><p class=\"namesty\">";
        var commonstr4="</p></div></td>";
        if(commoundtypes==0)
		for(i in green){
			names=green[i].minpic;
            if(green[i].styleofcooking==styles){
                linet=nums/cols;
                var commonstr=commonstr1+path+names+commonstr2+green[i].index+commonstr3+green[i].enname+commonstr4;
                if(line>linet)
			    results+=commonstr;
			    else {
			    results+="</tr><tr>"+commonstr;
				line+=1;
			    }
                nums+=1;
            }
			
		}
        else
        for(i in green){
			names=green[i].minpic;
            if(green[i].commoundtype==commoundtypes){
                linet=nums/cols;
                var commonstr=commonstr1+path+names+commonstr2+green[i].index+commonstr3+green[i].enname+commonstr4;
                if(line>linet)
			    results+=commonstr;
			    else {
			    results+="</tr><tr>"+commonstr;
				line+=1;
			    }
                nums+=1;
            }
			
		}
		results+="</tr></table>";
		document.getElementById("contents").innerHTML=results;
		
jQuery(
 function(){
  jQuery(".egreen").hover(
   function(e){
    Mouse(e);
	var str=e.currentTarget.innerHTML.split("-")[1];
	var index=Number(str);
document.getElementById("showinfoid").innerHTML="<div style=\"width:700px;height:250px;\">"+
"<div style=\"position:relative;float:left\">"+
"<img src=\""+path+green[index].maxpic+"\">"+
"</div>"+
"<div style=\"position:relative;left:20px;float:left\"><p style=\"font-size:20px;color:gray;\">"+green[index].enname+
"</p><li><span style=\"color:black;font-size:16px;\">BelongsTo:&nbsp&nbsp</span>"+
"<span style=\"color:red;font-size:16px;\">"+stylecooking[green[index].styleofcooking]+"</span></li>"+
"<li>Craft:&nbsp&nbsp"+cookingway[green[index].craft]+"</li>"+
"<li>Flavor:&nbsp&nbsp"+flavors[green[index].flavor]+"</li>"+
"<li>Difficulty:&nbsp&nbsp"+difficulties[green[index].difficulty]+"</li>"+
"<li>Fit:&nbsp&nbsp"+green[index].number+"Deal</li>"+
"<li>PrepareTime:&nbsp&nbsp"+green[index].readinesstime+"Minutes</li>"+
"<li>CookingTime:&nbsp&nbsp"+green[index].cookingtime+"Minutes</li>"+
"</div>"+
"</div>";
    jQuery(".showinfo").css({top:toppos,left:leftpos}).fadeIn(100);
   },function(){
    jQuery(".showinfo").hide();
    }
  )
 }
)
	}   
	
var MouseEvent = function(e){
 this.x = e.pageX
 this.y = e.pageY
}
var Mouse = function(e){
 var kdheight =  jQuery(document).scrollTop();
 mouse = new MouseEvent(e);
 subwid=document.body.clientWidth/2;
 subhei=document.body.clientHeight/2;
 leftpos = mouse.x;
 toppos = mouse.y-kdheight; 
 if(leftpos<subwid&&toppos<subhei){
	 }
 else if(leftpos>subwid&&toppos<subhei){
	 leftpos-=520; 
 }
  else if(leftpos>subwid&&toppos>subhei){
	 leftpos-=520;
	 toppos-=270;	 
 }
 else if(leftpos<subwid&&toppos>subhei){
	 toppos-=270;	 
 }
}
