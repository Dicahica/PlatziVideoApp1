import React,{ Component } from 'react';
import{
  View,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';

import Empty from '../components/empty.js';
import Separator from '../components/horizontal-separator.js';
import Suggestion from '../components/suggestion.js';
import Layout from '../components/category-list-layout.js'

class CategoryList extends Component{
  keyExtractor= (item) => item.id.toString()
  renderEmpty=()=> <Empty text="No hay sugerencias"/>
  itemSeparatorComponent=()=> <Separator/>
  renderItem=({item})=> {
    return(
      <Suggestion {...item}/>
    )
  }
  render(){
    return(
      <Layout title="Categorías">
        <FlatList
          horizontal
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

export default CategoryList
