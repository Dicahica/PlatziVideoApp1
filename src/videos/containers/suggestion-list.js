import React, {Component} from 'react';
import{
  FlatList,
  Text,
  View,
  StyleSheet

}from 'react-native';
import Layout from '../components/suggestion-list-layout.js';
import Empty from '../components/empty.js';
import Separator from '../components/vertical-separator.js';
import Suggestion from '../components/suggestion.js';

class SuggestionList extends Component {
  keyExtractor= (item) => item.id.toString()
  renderEmpty=()=> <Empty text="Cargando sugerencias"/>
  itemSeparatorComponent=()=> <Separator/>
  renderItem=({item})=> {
    return(
      <Suggestion {...item}/>
    )
  }
  render() {
    return(

      <Layout title='Recomendado para ti'>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          renderItemSeparatorComponent={this.itemSeparatorComponent}
          renderItem={this.renderItem}
        />

      </Layout>

    )
  }
}

export default SuggestionList
