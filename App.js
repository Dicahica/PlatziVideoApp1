import React, {Component} from 'react';
import {
  Text,
  View,
  } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/header.js';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api'
import CategoryList from './src/videos/containers/category-list';
import Video from 'react-native-video';
type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList:[],
    categoryList:[],
  }
  async componentDidMount(){
    const movies =await API.getSuggestion(10);
    const categories =await API.getMovies(10);
    console.log(movies);
    console.log(categories)
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    })
  }
  render() {
    return (
      <Home>

        <Header/>
        <View style={{
          flex: 1,
          height: 100,
        }}>
          <Video source={{uri:'https://r5---sn-cvb7ln7l.googlevideo.com/videoplayback?mime=video%2Fwebm&requiressl=yes&clen=7294502&txp=5411222&key=cms1&source=youtube&signature=640BCF8A34359B8561861AF7632A27BEC9605DB2.0DF1A764A089CF59A027009C55872236E0E56883&ipbits=0&itag=43&ratebypass=yes&gir=yes&pcm2=yes&pl=24&c=WEB&expire=1546228076&dur=0.000&ip=2604%3Aa880%3A2%3Ad0%3A%3A21a0%3Aa001&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,itag,lmt,mime,mip,mm,mn,ms,mv,pcm2,pl,ratebypass,requiressl,source&id=o-AH57-6nHV4rIGls8wAVexDm4lsCQyJqpzBqpePqzdyPA&ei=DD0pXIvcIpiFkgar_IKIDg&lmt=1545917280639535&fvip=5&utmg=ytap1&title=Black_Mirror_Bandersnatch_Netflix_-_Trailer_subtitulado_en_espaol_HD(youtube.com)&mip=190.14.235.252&redirect_counter=1&cm2rm=sn-hxqp5jvhh-cvbe7l&fexp=23763603&req_id=eab1c4d1308fa3ee&cms_redirect=yes&mm=29&mn=sn-cvb7ln7l&ms=rdu&mt=1546206405&mv=m'}}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            
          }}

          />
        </View>


        <Text>Buscador</Text>
        <Text>Categorías</Text>
        <CategoryList
          list ={this.state.categoryList}
        />
        <SuggestionList
          list ={this.state.suggestionList}
        />

      </Home>

    );
  }
}
