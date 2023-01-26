export const fetchClassesForVideo = (index: number, rowSize:number,noOfFiles:number, playVideo?:number) => {
    let finalClass = "screen";
    if (index % rowSize === 0 && index >= 0 && index < rowSize) {
      finalClass += " extremeTopAndExtremeLeft";
      return finalClass;
    }
    if (index % rowSize === rowSize - 1 && index >= 0 && index < rowSize) {
      finalClass += " extremeTopAndExtremeRight";
      return finalClass;
    }
    if (
      index % rowSize === rowSize-1 &&
      index > noOfFiles - (rowSize + 1) &&
      index < noOfFiles
    ) {
      finalClass += " extremeBottomAndExtremeRight";
      return finalClass;
    }
    if (
      index % rowSize === 0 &&
      index > noOfFiles - (rowSize + 1) &&
      index < noOfFiles
    ) {
      finalClass += " extremeBottomAndExtremeLeft";
      return finalClass;
    }
    if (index % rowSize === 0) {
      finalClass += " extremeLeft";
      return finalClass;
    }
    if (index > noOfFiles - rowSize && index < noOfFiles) {
      finalClass += " extremeBottom";
      return finalClass;
    }

    if (index >= 0 && index < rowSize) {
      finalClass += " extremeTop";
      return finalClass;
    }
    if (index % rowSize === rowSize - 1) {
      finalClass += " extremeRight";
      return finalClass;
    }
    if (index === playVideo) {
      finalClass = "screenWithoutHover";
      return finalClass;
    } else {
      return finalClass;
    }
  };
