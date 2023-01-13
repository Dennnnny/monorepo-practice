import styled from '@emotion/styled';
import { Banner } from '@web/shared/ui';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ShopProps {}

const StyledShop = styled.div`
  color: pink;
`;

export function Shop(props: ShopProps) {
  return (
    <StyledShop>
      <h1>Welcome to Shop!</h1>
      <Banner text="this is shop" />
      <Link to="/cart">View Cart</Link>
    </StyledShop>
  );
}

export default Shop;
