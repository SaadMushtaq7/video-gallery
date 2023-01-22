import React from "react";
import {
  GotoButton,
  Logo,
  LogoAndQuotesContainer,
  LogoContainer,
  Quotes,
  QuotesContainer,
  TestimonialCardContainer,
  TestimonialThumbnail,
} from "./styles";

const TestimonialCard = () => {
  return (
    <TestimonialCardContainer>
      <TestimonialThumbnail
        src="https://plus.unsplash.com/premium_photo-1661347846011-ffceae651eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <LogoAndQuotesContainer>
        <LogoContainer>
          <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Ally_Financial.svg/2560px-Ally_Financial.svg.png"
            alt=""
          />
        </LogoContainer>
        <QuotesContainer>
          <Quotes>
            Ally financial deployed Zoom to enable an agile, digital first
            approach that improved customer and employee experience alike.
          </Quotes>
        </QuotesContainer>

        <GotoButton>Watch Video</GotoButton>
      </LogoAndQuotesContainer>
    </TestimonialCardContainer>
  );
};

export default TestimonialCard;
