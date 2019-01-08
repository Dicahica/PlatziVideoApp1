import React, {Component} from 'react';
import{
  StyleSheet,
  ActivityIndicator,
  Text,
  View

} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout-video';
import PlayPause from '../components/play-pause';
import ControlLayout from '../components/control-layout';
import Fullscreen from '../components/fullscreen';
import ProgressBar from '../components/progressbar';
class Player extends Component{
  state={
    loading: true,
    paused:true,
    fullscreen:false,
    progressUpdateInterval:250.0,
    currentTime: 10,
    duration: 30,
    startSeekVideo:5,
    endSeekVideo:25,

  }
  onBuffer=({isBuffering})=>{
    this.setState({
      loading:isBuffering,
    })
  }
  playPause=()=>{
    this.setState({
      paused:!this.state.paused
    })
  }
  fullScreen=()=>{
      this.setState({
        fullscreen:!this.state.fullscreen
      })
  }

  render(){

    return(
      <Layout
        loading={this.state.loading}
        video={
          <Video source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
          style={[styles.video]}
          resizeMode= "contain"
          onBuffer={this.onBuffer}
          paused={this.state.paused}

          />
        }

        loader={
          <ActivityIndicator color="gray"/>
        }
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <ProgressBar
            	currentTime = {this.state.currentTime}	// Required! Pass current time of video
            	duration = {this.state.duration}	// Required! pass duration
            	startSeekVideo = {this.startSeekVideo}	// Required! Callback when start to seek video
            	endSeekVideo = {this.endSeekVideo}	// Required! Callback when end to seek video

            />
            <Text style={[]}>Time left |</Text>
            <Fullscreen
            onPress={this.fullScreen}
            fullscreen={this.state.fullscreen}
            />
          </ControlLayout>
        }



      />

    )


  }

}
const styles= StyleSheet.create(
  {
    video:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,

    }
  }
)

export default Player;
