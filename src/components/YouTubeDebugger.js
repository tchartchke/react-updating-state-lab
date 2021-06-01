// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }); 
  }

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    });
  }

  render (){
    return <div>
      <button onClick={this.changeBitRate} className="bitrate">{this.state.settings.bitrate}</button>
      <button onClick={this.changeResolution} className="resolution">{this.state.settings.video.resolution}</button>
    </div>
  }
}