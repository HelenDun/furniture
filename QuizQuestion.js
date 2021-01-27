import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';

export class QuizQuestion extends React.Component {
    constructor(props) {
        super(props);
        this._returnOptions = this._returnOptions.bind(this);
        this._returnCheckBox = this._returnCheckBox.bind(this);
        this.state = {
            comp: 'Quiz Question',
            answer: 0,
        };
    }

    _returnCheckBox(index) {
        return(
            <CheckBox
                title = {this.props.answers[index - 1]}
                checked = {this.state.answer == index}
                uncheckedColor = 'black'
                checkedColor = 'black'
                containerStyle = {styles.checkbox}
                textStyle = {styles.text}
                onPress = {() => {
                    let newAnswer = index * (this.state.answer != index);
                    this.props.callback(newAnswer, this.props.index);
                    this.setState({answer: newAnswer});
                }}
            />
        )
    }

    _returnOptions() {
        var options = [];
        for(let i = 1; i <= this.props.answers.length; i++) {
            options.push(this._returnCheckBox(i))
        }

        return (
            <View style={styles.options}>
                {options}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.question}>
                <Text style={styles.header}>Question {this.props.index}</Text>
                <Text style={styles.text}>{this.props.question}</Text>
                {this._returnOptions()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    question: {
        margin: 5,
        marginBottom: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    header: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'normal',
        fontFamily: 'Times New Roman',
    },
    options: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    checkbox: {
        borderRadius: 15,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
});