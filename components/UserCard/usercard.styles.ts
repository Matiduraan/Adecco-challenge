import styled from "@emotion/styled";

export const UserName = styled.h2`
  color: #52575b;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
`;

export const Card = styled.button`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s;
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  :hover {
    background-color: #e8e8e8;
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  }
  @media (min-width: 640px) {
    width: auto;
    margin-top: 0;
  }
`;
