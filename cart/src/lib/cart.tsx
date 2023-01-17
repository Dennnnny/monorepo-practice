import styled from '@emotion/styled';
import { Banner } from '@web/shared/ui';
import { Link } from 'react-router-dom';
import { getText } from '@web/shared/utils';

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
        <h1>Welcome to Shop! {getText()}</h1>
      </Link>
    </StyledShop>
  );
}

export default RoutesCart;
