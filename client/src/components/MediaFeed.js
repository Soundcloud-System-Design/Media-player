import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import MediaPlayer from "./MediaPlayer.js";
import fake from "faker";

class MediaFeed extends React.Component {
  constructor(props) {
    super(props);
    const randomSong = fake.random.number({ min: 1, max: 10 });

    this.state = {
      songId: randomSong,
      currentSong: [],
    };
  }

  componentDidMount() {
    axios
      .get(`/songs/${this.state.songId}`)
      .then((music) => {
        this.setState({
          currentSong: music.data.data.rows[0],
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          {" "}
          <MediaPlayer currentSong={this.state.currentSong} />
        </div>
      </div>
    );
  }
}

export default MediaFeed;
