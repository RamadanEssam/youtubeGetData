import React, { Component } from 'react';
import axios from 'axios';

class chanal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            YOUTUBE_Chanal_API: 'https://youtube.googleapis.com/youtube/v3/channels',
            YOUTUBE_API_KEY: "AIzaSyAgY7vRV3DbShdyEjCKSXkTKTddU4aNqW4",
            Id:"UChdtNMMOWKkw9-YWg64K07w",
            data: [],
        }
    }
    componentDidMount() {
        // async function getServciersideProps() {
        //   const res = await fetch(`${YOUTUBE_Playlist_API}?part=snippet&chanalId=PLEWtpTkGhCPI227kmlslKfhmBTZuxG-D7&maxResults=50&key=${YOUTUBE_API_KEY}`);
        //   const data = await res.json();
        //   setItems(data)
        // }

        axios.get(`${this.state.YOUTUBE_Chanal_API}?part=snippet&id=UChdtNMMOWKkw9-YWg64K07w&key=${this.state.YOUTUBE_API_KEY}`).then(res => {
            console.log(res);
            this.setState({ data: res.data.items })
        }).catch(err => { console.log(err); });
    }
    render() {
        return (
            <>
                <h3>Get chanal</h3>
                <div className="row p-5">

                    
                    {/* {this.state.data.map(item => {
                        const { id, snippet = {} } = item;
                        const { title, thumbnails = {}, resourceId } = snippet;
                        const { medium = {} } = thumbnails;
                        return (
                            <div className="col-6" key={id}>
                                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                                    <p>
                                        <img src={medium.url} width={medium.width} height={medium.height} alt="" />
                                    </p>
                                    <h3>{title}</h3>
                                </a>
                            </div>
                        )
                    })} */}

                </div>
            </>
        );
    }
}

export default chanal;