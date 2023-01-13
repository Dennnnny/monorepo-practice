import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';
import { RoutesCart } from '@web/cart';
import Shop from './shop/shop';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<RoutesCart />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
