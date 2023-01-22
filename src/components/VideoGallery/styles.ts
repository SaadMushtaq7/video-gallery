import styled from 'styled-components'

export const VideoGalleryContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

#bgVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
}
.allowFullScreen{
  display: inline-block;
  overflow: hidden;
  position: relative;
  padding: 0;
}
.outerContainer{
  border: 20px solid black;
  z-index: 2000;
  border-radius: 20px;
  background-color: black;
}
`
export const GalleryScreen = styled.div`
width: 100%;
max-width: 960px;
z-index: 998;
height: 100%;
max-height: 600px;
overflow: scroll;
display: grid;
grid-template-columns: repeat(6,300px);
column-gap: 10px;
scrollbar-width: 4px;
-ms-overflow-style: #f1f1f1;
&::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
&::-webkit-scrollbar-track{
  background-color: #f1f1f1;
}
&::-webkit-scrollbar-thumb {
  background: #888;
}
&::-webkit-scrollbar-thumb:hover {
  background: #555;
}

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