import React from 'react';
import classes from './App.css';
import video from './videos/sculpture.mp4';

function App() {

  // const [data, setData] = useState( [] ) 
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const result = await fetch("https://orangevalleycaa.org/api/videos").then(
  //       response => response.json()
  //     )
  //     setData(result);
  //   };
  //   fetchData(); 
  // }, []);

  return (
    <div className={classes.App}>
      <header>
        <h1>Art video</h1>
      </header>
      {/* {data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url} />
        </div>
      ))} */}
      <div className={classes.Video}>
        <video src={video} controls height={200}/>
      </div>
    </div>
  );
}
export default App;
