class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
    this.setCurrentVideo = this.setCurrentVideo.bind(this);
  }

  componentDidMount() {
    this.getYoutubeVideos('corgis');
  }

  getYoutubeVideos(query) {
    var options = {
      key: this.props.API_Key,
      query: query
    };
    this.props.searchYouTube(options, videos => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  setCurrentVideo(selectedVideo) {
    this.setState({
      currentVideo: selectedVideo
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} setCurrentVideo={this.setCurrentVideo}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
