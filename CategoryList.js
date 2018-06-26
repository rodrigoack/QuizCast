import React, { Component }  from 'react';
import { FlatList, Text } from 'react-native';

// Components
import CategoryItem from './CategoryItem';

class CategoryList extends Component {
  render() {
    const categories = this.props.questions.map(
      (question, index) => { return { key: index + '', category: question.category } }
    );

    return (
      <FlatList
        data={categories}
        renderItem={ ({item}) => <CategoryItem category={item.category}/> }
        keyExtractor={(item) => item.key }
      />
    );
  }
}

export default CategoryList;
