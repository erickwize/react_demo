import React from 'react';
import Grid from '@material-ui/core/Grid';

// import { useAuth } from '../../providers/Auth';
// import './Home.styles.css';
import CardVideo from '../../components/CardVideo';

function HomePage() {
  // const history = useHistory();
  // const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return (
    <Grid container spacing={3} alignItems="center">
      <CardVideo imageSrc="https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg" />
      <CardVideo imageSrc="https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg" />
      <CardVideo imageSrc="https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg" />
      <CardVideo imageSrc="https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg" />
      <CardVideo imageSrc="https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg" />
      <CardVideo imageSrc="https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg" />
      <CardVideo imageSrc="https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg" />
    </Grid>
  );
}

export default HomePage;
