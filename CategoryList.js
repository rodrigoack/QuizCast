import React, { Component }  from 'react';
import { FlatList, Text } from 'react-native';

// Components
import CategoryItem from './CategoryItem';

// Mocks
import QUESTIONS from './data.js';

class CategoryList extends Component {
  render() {
    const categories = QUESTIONS.map(
      (item, index) => {
        return {
          key: index + '',
          category: item.category,
          question: item.question
        }
      }
    );

    return (
      <FlatList
        data={categories}
        renderItem={ ({item}) =>
          <CategoryItem category={item.category} question={item.question}/>
        }
        keyExtractor={(item) => item.key }
      />
    );
  }
}

export default CategoryList;
