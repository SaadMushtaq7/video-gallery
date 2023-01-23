import styled from 'styled-components'

export const VideoGalleryContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;

.allowFullScreen{
  display: inline-block;
  overflow: hidden;
  position: relative;
  padding: 0;
}
.outerContainer{
  width: 80%;
  height: 90%;
  
}
`
export const GalleryScreen = styled.div`
width: 100%;
max-width: 100%;
z-index: 998;
height: 100%;
max-height: 100%;
overflow: scroll;
display: grid;
grid-template-columns: repeat(6,300px);
column-gap: 10px;
padding: 20px;


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
  max-width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
}
`

export const Screen = styled.video`
width: 100%;
max-width: 300px;
height: 200px;
border-radius: 13px;
object-fit: cover;
margin: 10px 5px 0 5px;
cursor: pointer;
transition:max-width 0.4s ease-in-out;
`