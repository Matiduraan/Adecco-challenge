import styled from "@emotion/styled";

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    line-height: 1.4;
    color: #555;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limita a 2 líneas */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

export const ModalTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const AlbumCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    background-color: #f2f2f2;
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  }
`;
