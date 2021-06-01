//IMPORTS
import { gsap } from "gsap";
//import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase } from "gsap/CustomEase";

//register Plugins
gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin,CustomEase);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  let mainTL = gsap.timeline({id:"main"});

  let PERC = {num: 0}
  let PERC_num = document.querySelector("#Speed200 tspan")

  //***********  onUpdateFunction ****************

  function percentHandler (){

  PERC_num.textContent=PERC.num

  }


  function init(){
    //***********  LogoStartTL init ****************
    gsap.set(["#Logo_Whole"], {scale:3,y: +350, transformOrigin: "center"});
    gsap.set(["#Logo_Center"], {transformOrigin: "center"});
    gsap.set(["#Logo_TopRight"], {scale:0, transformOrigin: "bottom left"});
    gsap.set(["#Logo_TopLeft"], {scale:0, transformOrigin: "bottom right"});
    gsap.set(["#Logo_BotRight"], {scale:0, transformOrigin: "top left"});
    gsap.set(["#Logo_BotLeft"], {scale:0, transformOrigin: "top right"});
    gsap.set(["#Logo_TopCenter"], {alpha: 0, y: "+=30", transformOrigin: "bottom"});

    //*********** LogoDivider init ****************
    gsap.set(["#LogoDivider"], {drawSVG: "50% 50%"});

    //*********** Gauges init ****************
    gsap.set(["#Speed_Outline"], {drawSVG: "50% 50%"});
    gsap.set(["#Oil_Out"], {drawSVG: "50% 50%"});
    gsap.set(["#Oil_In"], {drawSVG: "50% 50%"});
    gsap.set(["#Fuel_Out"], {drawSVG: "50% 50%"});
    gsap.set(["#Fuel_In"], {drawSVG: "50% 50%"});
    gsap.set(["#Speed_Inside"], {alpha: 0});
    gsap.set(["#Fuel_Fill"], {alpha: 0});
    gsap.set(["#Oil_Fill"], {alpha: 0});
    gsap.set(["#OILPercent"], {alpha: 0});
    gsap.set(["#FUELPercent"], {alpha: 0});
    gsap.set(["#MPH"], {alpha: 0});
    gsap.set(["#Fuel100"], {alpha: 0});
    gsap.set(["#Oil100"], {alpha: 0});
    gsap.set(["#MPH30"], {alpha: 0});

    //*********** Gauges2 init ****************
    gsap.set(["#Speed2"], {alpha: 0});
    gsap.set(["#Speed3"], {alpha: 0});
    gsap.set(["#Speed4"], {alpha: 0});
    gsap.set(["#Speed5"], {alpha: 0});
    gsap.set(["#Speed6"], {alpha: 0});
    gsap.set(["#Speed7"], {alpha: 0});
    gsap.set(["#Speed8"], {alpha: 0});
    gsap.set(["#Speed9"], {alpha: 0});
    gsap.set(["#Speed10"], {alpha: 0});
    gsap.set(["#Speed10ALT"], {alpha: 0});
    
    

    //*********** Gears init ****************
    gsap.set(["#Drive_Alt"], {alpha: 0});
    gsap.set(["#Neutral_Alt"], {alpha: 0});
    gsap.set(["#Reverse_Alt"], {alpha: 0});
  

    //*********** Blinkers init ****************

    //*********** TopUI init ****************

    gsap.set(["#Call_UI"], {alpha: 0});
    gsap.set(["#TopUIMain"], {y: -200});


  }

  //Nested Timelines
  //***********  LogoStartTL  ****************
  function LogoStartTL(){
    let tl = gsap.timeline();
    tl.from ("#Logo_Center", {alpha: 0, duration: 1.5})
      .to ("#Logo_TopLeft", {scale: 1, duration: 0.5}, "corners")
      .to ("#Logo_BotRight", {scale: 1}, "corners")
      .to ("#Logo_TopRight", {scale: 1}, "corners")
      .to ("#Logo_BotLeft", {scale: 1}, "corners")
      .to ("#Logo_TopCenter", {alpha: 100, y: "-=30", duration: 1})
      .to ("#Logo_Whole", {scale:2, duration: 0.5})
      .to ("#Logo_Whole", {alpha: 0, scale:20, duration: 0.5}) 

      ;
      return tl; // total time 4 seconds
  }

  //*********** LogoFinalPlacementTL ****************
  function LogoFinalPlacementTL(){
    let tl = gsap.timeline();
    tl.to ("#Logo_Whole", {scale: 1, y:+700, alpha: 0, duration: 0.5})
      .to ("#Logo_Whole", {y:+585, alpha: 100, duration: 1})
      .to ("#LogoDivider", {duration: 1, drawSVG: true})
    ; 
    return tl;
  }

  //*********** MainStartUpTL ****************
  function MainStartUpTL(){
    let tl = gsap.timeline();
    tl.to ("#Speed_Outline", {duration: 1, drawSVG: true}, "Outline")
      .to ("#Oil_In", {drawSVG: true}, "Outline")
      .to ("#Oil_Out", {drawSVG: true}, "Outline")
      .to ("#Fuel_In", {drawSVG: true}, "Outline")
      .to ("#Fuel_Out", {drawSVG: true}, "Outline")
      .to ("#FUELPercent", {alpha: 100}, "Outline")
      .to ("#OILPercent", {alpha: 100}, "Outline")
      .to ("#MPH", {alpha: 100}, "Outline")
      
      
    ; 
    return tl;
  }

  //*********** TopUIStartTL ****************
  function TopUIStartTL(){
    let tl = gsap.timeline();
    tl.to ("#TopUIMain", {duration: 1, y: -1})
      .from ("#time",{alpha: 0, duration: 1}, "fadeIN")
      .from ("#Weather",{alpha: 0}, "fadeIN")
      
    ; 
    return tl;
  }
  //*********** GearShiftTL ****************
  function GearShiftTL(){
    let tl = gsap.timeline();
    tl.from ("#Gears_Norm", {duration: 2, alpha: 0})
      
    ; 
    return tl;
  }

  //*********** BlinkersTL ****************
  function BlinkersTL(){
    let tl = gsap.timeline();
    tl.from ("#Blinkers_Off", {duration: 2, alpha: 0})
      .from ("#Blinkers_On", {duration: 1, alpha: 0, repeat: 3},"Blinking")
      .to ("#Blinkers_On", {duration: 1, alpha: 0})
      .from ("#Speed1", {duration: 1, alpha: 0, repeat: 3},"Blinking")
      .from ("#Park_Alt", {duration: 1, alpha: 0, repeat: 3},"Blinking")
    
      
    ; 
    return tl;
  }
    //*********** GaugesREVTL ****************
    function GaugesREVTL(){
      let tl = gsap.timeline();
      tl .from ("#Speed1ALT", {duration: 0.05, alpha: 0})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed2"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed3"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed4"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed5"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed6"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed7"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed8"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed9"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed10"})
        
        
      ; 
      return tl;
    }

     //*********** GaugeSETTLETL ****************
     function GaugesSETTLETL(){
      let tl = gsap.timeline();
      tl.to ("#Speed1", {duration: 0.05, morphSVG: "#Speed9"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed8"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed7"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed6"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed5"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed4"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed3"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed2"})
        .to ("#Speed1", {duration: 0.05, morphSVG: "#Speed1"},"SpeedFade")
        .to ("#Speed1", {alpha: 0},"SpeedFade")
        .to ("#Speed1ALT", {alpha: 0},"SpeedFade")
        
      ; 
      return tl;
    }

    //*********** Numbers1TL ****************

    function Numbers1TL(){
      let tl = gsap.timeline();
      tl.from ("#Speed200", {duration: 0.25, alpha: 0})
      tl.to (PERC, {duration: 0.5,num: "+=200", roundProps: "num", onUpdate:percentHandler})
      
        
      ; 
      return tl;
    }

    //*********** Numbers2TL ****************
    function Numbers2TL(){
      let tl = gsap.timeline();
      tl.to (PERC, {duration: 0.5,num: "-=200", roundProps: "num", onUpdate:percentHandler})
      
      
        
      ; 
      return tl;
    }

  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
  mainTL.add(LogoStartTL())
        .add(LogoFinalPlacementTL(),"-=0.05")
        .add(MainStartUpTL(),"-=1")
        .add(TopUIStartTL())
        .add(GearShiftTL(),"-=1")
        .add(BlinkersTL(),"-=3")
        .add(Numbers1TL(), "speed")
        .add(GaugesREVTL(), "speed")
        .add(GaugesSETTLETL(),"+=0.5")
        .add(Numbers2TL(),"-=0.5")
        
        
     


  ;//tl END





});
