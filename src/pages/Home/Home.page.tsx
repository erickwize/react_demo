import React from 'react';

// import { useAuth } from '../../providers/Auth';
// import './Home.styles.css';
import { Grid } from '@material-ui/core';
import CardVideo from '../../components/CardVideo';
import { useApp } from '../../providers/App';

const mockedImage = process.env.NODE_ENV;
console.log(mockedImage);

function HomePage() {
  // const history = useHistory();
  // const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  const { videos } = useApp();

  return (
    <>
      <Grid container>
        {videos.length > 0 &&
          videos.map((video) => (
            <CardVideo
              key={video.id.videoId}
              imageSrc={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
            />
          ))}
      </Grid>
    </>
  );
}

export default HomePage;
