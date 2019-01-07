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
          <Video source={{uri:'https://r2---sn-hxqp5jvhh-cvbe.googlevideo.com/videoplayback?expire=1546840368&ei=0JQyXNmBLJCHkgbkoY2wBA&dur=0.000&txp=5511222&requiressl=yes&ip=2604%3Aa880%3A2%3Ad0%3A%3A21a0%3Aa001&ipbits=0&pl=24&mime=video%2Fwebm&id=o-AFJRPg33Fp2kDRRoN3PVLyW5Tlk_vy0B3xALlum9WSWN&fvip=2&gir=yes&lmt=1540489834111687&key=cms1&itag=43&c=WEB&signature=3C7FE5B4E6B65421CD8F9F4BA2FAEAF1E5E7D434.5A265859B9854EA2AC326DE731E8485C792CE4E0&ratebypass=yes&source=youtube&clen=14923468&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&utmg=ytap1&title=CMO_ENTRENAR_A_TU_DRAGN_3_Trailer_2_Espaol_Latino_2019(youtube.com)&cms_redirect=yes&mip=190.14.235.252&mm=31&mn=sn-hxqp5jvhh-cvbe&ms=au&mt=1546818696&mv=m'}}
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
