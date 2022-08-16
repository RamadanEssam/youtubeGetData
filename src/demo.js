import React, { Component } from 'react';
import axios from 'axios';

import { GoogleLogin } from 'react-google-login';


class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showVideos: false,
      videoTitle: '',
      videoItems: [],
    };
  }

  handleChange = (e) => {
    this.setState({ videoTitle: e.target.value })
  }


  responseGoogle = async (response) => {
    console.log(response);
    const config = {
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: {
        part: 'snippet',
        maxResults: 5,
        key: "AIzaSyADzrK-7ERquVkPBD6xVuj7-BizHosscII",
      },
    };
    config['params'] = { ...config['params'], q: this.state.videoTitle };
    await axios.get('/search', config).then(res => {
      console.log(res,'test');
      this.setState({ videoItems: res.data.items, showVideos: true })
    }).catch(err => { console.log(err); });
  }

  

  render() { 
    return (
      <>
        <form className="container">
          <div className="row p-5">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">title</label>
                <input type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={this.state.videoTitle}
                  onChange={(e) => this.handleChange(e)} />
              </div>
              <GoogleLogin
                clientId="1055724396772-30akr9ovncsmipk3qtr8ghg1tib07phc.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
          <div className="row p-5">
            {this.state.showVideos && this.state.videoItems.map((video,index) => (
              <div className="col-6" key={index}>
                <iframe
                  title={video.id.videoId}
                  className="video-iframe"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                />
              </div>
            ))}
          </div>
        </form>
      </>
    );
  }
}
export default Demo;
