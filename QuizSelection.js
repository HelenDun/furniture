import React from 'react';
import { styles } from './Styles.js';
import { QuizQuestion } from './QuizQuestion.js';
import { Text, View, TouchableOpacity } from 'react-native';

export class QuizSelectionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qA: 0,
            qB: 0,
            quiz1: 'QuizScaledBack',
            quiz2: 'QuizOrnate',
        };
    }

    updateQuestionA = (answer, index) => { this.setState({qA: answer}); }
    updateQuestionB = (answer, index) => { this.setState({qB: answer}); }
    allAnswered = () => { return this.state.qA && this.state.qB }

    continueButtons() {
        // if the user has answered the previous questions, allow them to move on
        if (this.allAnswered()) {
            // if the user answered no to either qA or qB, recommend scaled-back furniture quiz 
            if (this.state.qA == 2 || this.state.qB == 2) return (
                <View style={styles.options}>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate(this.state.quiz1)}
                        disabled = {!this.allAnswered()}
                    >
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Scaled-Back Style Quiz</Text>
                            <Text style={styles.textRecommend}>Recommended</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate(this.state.quiz2)}
                        disabled = {!this.allAnswered()}
                    >
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Ornate Style Quiz</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
            // else recommend ornate furniture quiz
            return (
                <View style={styles.options}>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate(this.state.quiz1)}
                        disabled = {!this.allAnswered()}
                    >
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Scaled-Back Style Quiz</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate(this.state.quiz2)}
                        disabled = {!this.allAnswered()}
                    >
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Ornate Style Quiz</Text>
                            <Text style={styles.textRecommend}>Recommended</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
        // else keep the continue buttons disabled and faded
        return (
            <View style={styles.options}>
                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate(this.state.quiz1)}
                    disabled = {!this.allAnswered()}
                >
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonTextFaded}>Scaled-Back Style Quiz</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate(this.state.quiz2)}
                    disabled = {!this.allAnswered()}
                >
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonTextFaded}>Ornate Style Quiz</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate('QuizResult', { points: 75 })}
                >
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonTextFaded}>Test Results</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.title}>Furniture Quizzes Page</Text>
                <QuizQuestion 
                    index = 'A' 
                    question = 'You tend to like furniture with decorative curves, rather than streamlined, straighter styles:' 
                    answers = {['Yes','No']}
                    callback = {this.updateQuestionA}
                />
                <QuizQuestion 
                    index='B' 
                    question='You love to fill your bookshelf with lots of objects, books and accessories:' 
                    answers={['Yes','No']}
                    callback = {this.updateQuestionB}
                />
                <div style={{margin: 20}}></div>
                <Text style={styles.header}>Take one of the following furniture style quizzes!</Text>
                {this.continueButtons()}
                <Text style={styles.text}>{`
The Scaled Back Style Quiz will determine your preference between styles such as Minimalism, Zen and Scandinavian.
The Ornate Style Quiz will determine your preference between styles such as Traditional, Modern Glam and Modern.
                `}</Text>
            </View>
        );
    }
}
