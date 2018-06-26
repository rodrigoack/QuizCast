import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import CategoryList from './CategoryList';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CategoryList questions={QUESTIONS}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24
  },
});

const QUESTIONS = [{
  "category": "General Knowledge",
  "type": "multiple",
  "difficulty": "easy",
  "question": "Which American president appears on a one dollar bill?",
  "correct_answer": "George Washington",
  "incorrect_answers": ["Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin"]
}, {
  "category": "Science: Computers",
  "type": "multiple",
  "difficulty": "easy",
  "question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
  "correct_answer": "Final",
  "incorrect_answers": ["Static", "Private", "Public"]
}, {
  "category": "Science: Mathematics",
  "type": "multiple",
  "difficulty": "hard",
  "question": "How many zeptometres are inside one femtometre?",
  "correct_answer": "1,000,000",
  "incorrect_answers": ["10", "1,000,000,000", "1000"]
}, {
  "category": "Sports",
  "type": "boolean",
  "difficulty": "easy",
  "question": "Peyton Manning retired after winning Super Bowl XLIX.",
  "correct_answer": "False",
  "incorrect_answers": ["True"]
}, {
  "category": "General Knowledge",
  "type": "multiple",
  "difficulty": "medium",
  "question": "What was the destination of the missing flight MH370?",
  "correct_answer": "Beijing",
  "incorrect_answers": ["Kuala Lumpur", "Singapore", "Tokyo"]
}, {
  "category": "General Knowledge",
  "type": "multiple",
  "difficulty": "medium",
  "question": "What direction does the Statue of Liberty face?",
  "correct_answer": "Southeast",
  "incorrect_answers": ["Southwest", "Northwest", "Northeast"]
}, {
  "category": "Entertainment: Video Games",
  "type": "multiple",
  "difficulty": "hard",
  "question": "How many trophies are there in &quot;Super Smash Bros. for Nintendo 3DS&quot;?",
  "correct_answer": "685",
  "incorrect_answers": ["1360", "716", "1155"]
}, {
  "category": "Entertainment: Television",
  "type": "multiple",
  "difficulty": "medium",
  "question": "Who was the winner of the 2016 WWE Royal Rumble?",
  "correct_answer": "Triple H",
  "incorrect_answers": ["Roman Reigns", "AJ Styles", "Dean Ambrose"]
}, {
  "category": "Entertainment: Cartoon & Animations",
  "type": "multiple",
  "difficulty": "hard",
  "question": "In &quot;Rick and Morty&quot;, from which dimension do Rick and Morty originate from?",
  "correct_answer": "C-137",
  "incorrect_answers": ["J1977", "C-136", "C500-a"]
}, {
  "category": "Science: Computers",
  "type": "multiple",
  "difficulty": "easy",
  "question": "Which programming language shares its name with an island in Indonesia?",
  "correct_answer": "Java",
  "incorrect_answers": ["Python", "C", "Jakarta"]
}];

export default App;
