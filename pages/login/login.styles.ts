import styled from "@emotion/styled";

export const Card = styled.div`
  color: #000;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 640px) {
    width: 70%;
    padding: 15px;
    aspect-ratio: 1;
  }
`;

export const FormContainer = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #52575b;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
`;
