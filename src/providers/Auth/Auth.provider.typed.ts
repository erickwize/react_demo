export interface IProps {
  children: React.ReactNode;
}

export interface Context {
  login: () => void;
  logout: () => void;
  authenticated: boolean;
}
