import styled from 'styled-components'

export const TestimonialCardContainer = styled.div`
width: 100%;
max-width: 480px;
height: 300px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
border-radius: 20px;
display: flex;
margin: 10px;

`
export const TestimonialThumbnail = styled.img`
width: 40%;
height: 100%;
object-fit: cover;
border-radius: 10px 0 0 10px;
`

export const LogoAndQuotesContainer = styled.div`
width: 60%;
height: 100%;
display: flex;
flex-direction: column;
`

export const LogoContainer = styled.div`
width: 50%;
height: 25%;
padding-left: 20px;
padding-top: 10px;
`

export const Logo = styled.img`
width: 100%;
height: 100%;
object-fit: fill;
`
export const QuotesContainer = styled.div`
width: 100%;
height: 55%;
`

export const Quotes = styled.p`
padding: 20px;
font-size: 16px;
-webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`

export const GotoButton = styled.button`
align-self: center;
width: fit-content;
background-color: white;
border: 1px solid grey;
border-radius: 10px;
padding: 10px 30px;
cursor: pointer;

&:hover{
    background-color: #1877f2;
    color: white;
    border: none;
}
` 