import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 2rem 0;
  & > Button {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  & > span {
    line-height: 36px;
    font-size: 14px;
    font-family: Noto Sans JP;
  }
`;

const Container = styled.div`
  display: block;
  width: 80%;
  margin: 0 auto;
`;
export { Row, Container };
