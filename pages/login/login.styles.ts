import styled from "@emotion/styled";

export const Card = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  @media (min-width: 640px) {
    width: 70%;
    color: #000;
    padding: 15px;
    aspect-ratio: 1;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  color: #fff;
  @media (min-width: 640px) {
    background: #fff;
    color: #000;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  @media (min-width: 640px) {
    color: #52575b;
  }
`;

export const Subtitle = styled.p`
  color:#fff
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  @media (min-width: 640px) {
    color: #6b7280;
  }
`;
