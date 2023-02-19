import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link } from '@routing/Link';
import { RouterProvider } from './RouterContext';
import { routes } from '@routing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Route } from './Route';

describe('Link component', () => {
  it('should first', () => {
    render(
      <RouterProvider routeList={routes}>
        <Route path={routes.home.path}>
          <span>home</span>
          <Link to="/login">
            <span>hello</span>
          </Link>
        </Route>
        <Route path={routes.login.path}>
          <span>login</span>
        </Route>
      </RouterProvider>
    );

    expect(screen.getByText('home')).toBeDefined();
  });
});
