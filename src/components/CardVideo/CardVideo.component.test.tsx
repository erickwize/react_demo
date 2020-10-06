import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import AppProvider from '../../providers/App';
import AuthProvider, { AuthContext } from '../../providers/Auth';
import CardVideo from './CardVideo.component';

const customProvider = (ui) => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>{ui}</AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('CardVideo', () => {
  it('should render title', () => {
    const title = 'Card Title';
    act(() => {
      customProvider(<CardVideo title={title} description="" id="" imageSrc="" />);
    });
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should render description', () => {
    const description = 'Card description';
    act(() => {
      customProvider(<CardVideo title="" description={description} id="" imageSrc="" />);
    });
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should render favorite', () => {
    const { container } = render(
      <BrowserRouter>
        <AuthContext.Provider
          value={{ login: () => { }, logout: () => { }, authenticated: true }}
        >
          <AppProvider>
            <CardVideo title="" description="" id="" imageSrc="" />
          </AppProvider>
        </AuthContext.Provider>
      </BrowserRouter>
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should render favorite with selected', () => {
    const { container } = render(
      <BrowserRouter>
        <AuthContext.Provider
          value={{ login: () => { }, logout: () => { }, authenticated: true }}
        >
          <AppProvider>
            <CardVideo title="" description="" id="" imageSrc="" favorited />
          </AppProvider>
        </AuthContext.Provider>
      </BrowserRouter>
    );

    const path = container.querySelector('path');
    expect(path).not.toEqual(null);

    if (path !== null) {
      expect(path.getAttribute('d')).toEqual(
        'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
      );
    }
  });
});
