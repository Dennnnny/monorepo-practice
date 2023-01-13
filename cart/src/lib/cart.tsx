import styled from '@emotion/styled';
import { Banner } from '@web/shared/ui';
import { Link } from 'react-router-dom';
/* eslint-disable-next-line */
export interface RoutesCartProps {}

const StyledShop = styled.div`
  color: pink;
`;

export function RoutesCart(props: RoutesCartProps) {
  return (
    <StyledShop>
      <Banner text="welcome~~~~" />
      <Link to="/">
        <h1>Welcome to Shop!</h1>
      </Link>
    </StyledShop>
  );
}

export default RoutesCart;
