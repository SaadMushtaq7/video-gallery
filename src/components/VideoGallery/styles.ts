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
grid-template-columns: repeat(auto-fill,minmax(300px,auto));
grid-auto-rows: auto;
align-items: center;
justify-content: center;
padding:0 10px 10px 10px;
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
  max-width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  border-radius: 0;
  object-fit: fill;
  z-index: 999;
}

`
export const ScreenContainer = styled.div`
width: 100%;
max-width: 287px;
height: 200px;
border-radius: 5px;
margin: 10px 0 0 0;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

.screen{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
}
`

export const Screen = styled.video `
width: 100%;
height: 100%;
border-radius: 5px;
object-fit: cover;
`