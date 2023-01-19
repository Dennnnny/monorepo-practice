import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { sharedUtils, getText } from '@web/shared/utils';
import { Input } from '@web/shared/ui';
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Input />
              <Link to="/page-2">Click here for page 2.5</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
