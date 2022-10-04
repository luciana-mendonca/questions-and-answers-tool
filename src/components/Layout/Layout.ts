import styled from "styled-components";

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
  padding: 30px;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export default Layout;
