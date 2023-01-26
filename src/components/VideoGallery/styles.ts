import styled from 'styled-components'

export const VideoGalleryContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

.allowFullScreen{
  display: inline-block;
  width: 100vw;
  height: 100vh;
  object-fit: fill;
  overflow: hidden;
  position: relative;
  padding: 0;
 }

`
export const GalleryScreen = styled.div`
width: 100vw;
height: 100vh;
z-index: 998;
overflow: scroll;
display: grid;
grid-template-columns: repeat(6,1fr);
column-gap: 10px;
grid-template-rows: auto;
padding:0 1% 10px 1%;
background-color: black;

.closeVideo{
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 20px;
  z-index: 1000;
  cursor: pointer;
  color: white;
}

.zoomOutScreen{
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  border-radius: 0;
  object-fit: cover;
  z-index: 999;
}

.grid-row-span-2{
    grid-row: span 2;
}

.grid-row-span-1{
    grid-row: span 1;
}

`
export const ScreenContainer = styled.div`
min-height: 200px;
border-radius: 5px;
margin: 10px 0 0 0;
position: relative;
border-radius: 5px;
cursor: pointer;


.screenWithoutHover{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.screen{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  -webkit-transition: -webkit-transform 0.6s ease-out;
	transition: -webkit-transform 0.6s ease-out;
	transition: transform 0.6s ease-out;
	transition: transform 0.6s, -webkit-transform 0.6s ease-out; 
  &:hover{
    z-index: 2000;
    -webkit-transform: scale(1.7);
	  transform: scale(1.7);
  }
}

.extremeTop:hover{
  transform-origin: top;
}
.extremeLeft:hover{
  transform-origin: left;
}
.extremeRight:hover{
  transform-origin: right;
}
.extremeBottom:hover{
  transform-origin: bottom;
}

.extremeTopAndExtremeLeft:hover{
  transform-origin: top left;
}
.extremeTopAndExtremeRight:hover{
  transform-origin: top right;
}
.extremeBottomAndExtremeLeft:hover{
  transform-origin: bottom left;
}
.extremeBottomAndExtremeRight:hover{
  transform-origin: bottom right;
}
`