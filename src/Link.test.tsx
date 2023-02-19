import { render, screen, prettyDOM } from '@testing-library/react';
import { Link } from '@routing/Link';
import { routes } from '@routing/test-data/test-data';
import { describe, expect, it } from 'vitest';
import { Route } from './Route';
import { MemoryRouter } from './MemoryRouter';

describe('Link component', () => {
  it('should first', () => {
    const result = render(
      <MemoryRouter routeList={routes}>
        <Route path={routes.home.path}>
          <span>home</span>
          <Link to="/login">
            <span>hello</span>
          </Link>
        </Route>
        <Route path={routes.login.path}>
          <span>login</span>
        </Route>
      </MemoryRouter>
    );

    // screen.debug();

    //expect(screen.getByText('home')).toBeDefined();
  });
});
