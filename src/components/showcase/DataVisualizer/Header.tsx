import styled from "styled-components";

interface HeaderProps {
  headerCopy: string;
  clients: string;
  members: string;
}

const HeaderRow = styled.div`
  display: flex;
`;

const HeaderLeftCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const MainHeader = styled.h3`
  margin: 0 0 15px;
  padding-right: 40px;
  font-size: 28px;
`;

const GraphHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  min-height: 40px;
  padding: 0px 8px 0px 12px;
  border-radius: 6px;
`;

const GraphHeader = styled.div`
  margin: 2px auto 0px 0px;
  font-size: 22px;
  font-weight: 900;
  line-height: 1;
`;

const HeaderRightCol = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 186px;
  font-size: 20px;
`;

const OrangePinkSpan = styled.span`
  color: #fac2b6;
`;

const BoldSpan = styled.span`
  font-weight: 900;
`;

const Header: React.FC<HeaderProps> = ({ headerCopy, clients, members }) => (
  <>
    {headerCopy && (
      <>
        <HeaderRow>
          <HeaderLeftCol>
            <MainHeader>
              Proven book of business outcomes by industry
            </MainHeader>
            <GraphHeaderWrapper>
              <GraphHeader>{headerCopy}</GraphHeader>
            </GraphHeaderWrapper>
          </HeaderLeftCol>
          <HeaderRightCol>
            <div>
              <OrangePinkSpan># of Clients:&nbsp;</OrangePinkSpan>
              <BoldSpan>{clients}</BoldSpan>
            </div>
            <div>
              <OrangePinkSpan>Members:&nbsp;</OrangePinkSpan>
              <BoldSpan>{members}</BoldSpan>
            </div>
          </HeaderRightCol>
        </HeaderRow>
      </>
    )}
  </>
);

export default Header;
