import React,{ Component } from 'react';
import{
  View,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';

import Empty from '../components/empty.js';
import Separator from '../components/horizontal-separator.js';
import Category from '../components/category.js';
import Layout from '../components/category-list-layout.js';
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    list:state.categoryList
  }
}
class CategoryList extends Component{
  keyExtractor= (item) => item.id.toString()
  renderEmpty=()=> <Empty text="Cargando categorías"/>
  itemSeparatorComponent=()=> <Separator/>
  renderItem=({item})=> {
    return(
      <Category {...item}/>
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


export default connect(mapStateToProps)(CategoryList);
