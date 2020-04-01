import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import MediaPlayer from './MediaPlayer.js';

class MediaFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: []
    }
  }

  componentDidMount() {
    axios.get('http://3.21.207.156:3305/songs')
      .then(music => this.setState({
        currentSong: music.data.data[0]
      }))
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <MediaPlayer
            currentSong={this.state.currentSong}
          />
        </div>
      </div>
    )
  }
}

export default MediaFeed;