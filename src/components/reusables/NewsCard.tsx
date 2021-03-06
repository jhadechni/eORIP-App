import React from "react";
import styled from "styled-components";
import gray from "../../assets/pngs/gray.png";

const Container = styled.div`
  &:first-child {
      grid-row-start: 1;
       grid-column: 1 / span 2;
       @media (max-width: 768px) {
        grid-column: 1 / span 1;
      }
  }
  &:nth-child(2) {
    grid-row-start: 2;
    grid-column: 2 / span 2;
    @media (max-width: 768px) {
      grid-column: 1 / span 1;
    }
  }
  

`;

const StyledLink = styled.a`
  background: white;
  text-decoration: none;
  color: rgb(68, 68, 68);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  top: 0px;
  transition: all 0.1s ease-in 0s;
  top: -2px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px;
`;

interface ImgProps {
  readonly img: string;
}

const ImageBackground = styled.div<ImgProps>`
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.img});
`;

const StyledArticle = styled.article`
  padding: 20px;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 15px;
  margin: 0px;
  color: rgb(51, 51, 51);
  @media (min-width: 60em) {
    font-size: 20px;
  }
`;

const Content = styled.span`
  font-size: 9px;
  font-weight: bold;
  color: rgb(153, 153, 153);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
const ContentSource = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
const ContentDate = styled.span`
  font-size: 12px;
  color: rgb(153, 153, 153);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const NewsCard = (props: any) => {
  return (
    <>
      <Container>
        <StyledLink href={props.news.link} target='_blank'>
          <ImageBackground
            img={props.news.media !== null ? `${props.news.media}` : `${gray}`}
         
          />
          <StyledArticle>
            <div>
              <Content>
                {props.news.author !== null ? props.news.author : "Anonimo"}
              </Content>{" "}
              <ContentDate>
                {props.news.published_date?.substring(0, 10)}
              </ContentDate>
            </div>
            <Title>{props.news.title}</Title>

            <Content>{props.news.summary?.substring(0, 150)}...</Content>

            <ContentSource>{props.news.clean_url}</ContentSource>
          </StyledArticle>
        </StyledLink>
      </Container>
    </>
  );
};

export default NewsCard;
