import React, {Component} from 'react';
import{
  StyleSheet,
  ActivityIndicator,
  Text

} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout-video';
import PlayPause from '../components/play-pause';
import ControlLayout from '../components/control-layout';

class Player extends Component{
  state={
    loading: true,
    paused:false,
  }
  onBuffer=({isBuffering})=>{
    this.setState({
      loading:isBuffering
    })
  }
  playPause=()=>{
    this.setState({
      paused:!this.state.paused
    })
  }

  render(){

    return(
      <Layout
        loading={this.state.loading}
        video={
          <Video source={{uri:'https://r6---sn-cvb7ln7l.googlevideo.com/videoplayback?requiressl=yes&clen=7204249&mime=video%2Fwebm&ratebypass=yes&ipbits=0&fvip=6&expire=1546653724&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&pl=24&gir=yes&itag=43&key=cms1&ip=178.128.76.117&signature=0F4955D98869F539D59F8B4A259D003EB1948989.79103ECD9BECE4F4B301922C24A5F4F9A2E8CF6F&ei=vLsvXMqEHsmKkgbjzrqoCg&id=o-ACMFA3f_IX-2DyH_St7OQ48GtOCcaE3FDZKLtFgFqAAK&dur=0.000&txp=5411222&lmt=1546233886000451&source=youtube&c=WEB&utmg=ytap1&title=Avengers_4_EndGame_triler_en_Espaol_Latino_Marvel_Studios__Disney(youtube.com)&mip=190.14.235.252&redirect_counter=1&cm2rm=sn-hxqp5jvhh-cvbe7l&req_id=9be62ec02766a3ee&cms_redirect=yes&mm=29&mn=sn-cvb7ln7l&ms=rdu&mt=1546648084&mv=m'}}
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
            <Text style={[]}>ProgressBar |</Text>
            <Text style={[]}>Time left |</Text>
            <Text style={[]}>fullscreen |</Text>
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
