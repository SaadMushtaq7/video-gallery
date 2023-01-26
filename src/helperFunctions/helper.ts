import { RefObject } from "react";

const checkRightPosition = (videoRef:RefObject<HTMLDivElement>, containerRef:RefObject<HTMLDivElement>)=>{
if(videoRef.current && containerRef.current){
  if(videoRef.current?.offsetLeft + (2*videoRef.current?.offsetWidth)>containerRef.current?.offsetWidth){
    return true
  }
  return false
}
}

const checkLeftPosition = (videoRef:RefObject<HTMLDivElement>)=>{
  if(videoRef.current){
    if(videoRef.current?.offsetLeft - videoRef.current?.offsetWidth<=0){
      return true
    }
    return false
  }
  }

const checkTopPosition = (videoRef:RefObject<HTMLDivElement>)=>{
  if(videoRef.current){
    if(videoRef.current?.offsetTop - videoRef.current?.offsetHeight<=0){
      return true
    }
    return false
  }
  }
const checkBottomPosition = (videoRef:RefObject<HTMLDivElement>, containerRef:RefObject<HTMLDivElement>)=>{
  if(videoRef.current && containerRef.current){
    if(videoRef.current?.offsetTop + (2*videoRef.current?.offsetHeight)>containerRef.current.offsetHeight){
      return true
    }
    return false
  }
  }
        
  


export const fetchClassesForVideo = (index: number, playVideo?:number, videoRef?:RefObject<HTMLDivElement>, containerRef?:RefObject<HTMLDivElement>) => {
   
  let finalClass = "screen";
  
  if (videoRef?.current && checkTopPosition(videoRef) && checkLeftPosition(videoRef)) {
      finalClass += " extremeTopAndExtremeLeft";
      return finalClass;
    }
    if (videoRef?.current && containerRef?.current && checkTopPosition(videoRef) && checkRightPosition(videoRef,containerRef)) {
      finalClass += " extremeTopAndExtremeRight";
      return finalClass;
    }
    if (
      videoRef?.current && containerRef?.current &&  containerRef?.current && checkBottomPosition(videoRef,containerRef) && checkRightPosition(videoRef,containerRef)
    ) {
      finalClass += " extremeBottomAndExtremeRight";
      return finalClass;
    }
    if (
      videoRef?.current && containerRef?.current && checkBottomPosition(videoRef,containerRef) && checkLeftPosition(videoRef)
    ) {
      finalClass += " extremeBottomAndExtremeLeft";
      return finalClass;
    }
    
    if (videoRef?.current && checkTopPosition(videoRef)) {
      finalClass += " extremeTop";
      return finalClass;
     }
    if(videoRef?.current && containerRef?.current && checkRightPosition(videoRef,containerRef)){
      finalClass += " extremeRight"
      return finalClass
    }
    if(videoRef?.current && checkLeftPosition(videoRef)){
      finalClass += " extremeLeft"
    }
    if (videoRef?.current && containerRef?.current && checkBottomPosition(videoRef,containerRef)) {
      finalClass += " extremeBottom";
      return finalClass;
    }

     else {
      return finalClass;
    }
  };
