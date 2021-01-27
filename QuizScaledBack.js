import React from 'react';
import { styles } from './Styles.js';
import { QuizQuestion } from './QuizQuestion.js';
import { Text, View, TouchableOpacity } from 'react-native';

export class QuizScaledBackScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: (new Array(10)).fill(0),
        };
    }

    _allAnswered() {
        let answer;
        let sum = 0;
        for (let i = 0; i < this.state.answers.length; i++) {
            answer = this.state.answers[i];
            if (answer === 0) return 0;
            sum += answer;
        }
        return sum;
    }

    _continueButton() {
        // if the user has answered the previous questions, allow them to move on
        let allAnswered = this._allAnswered();
        if (allAnswered) {
            return (
                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate('QuizResult', { points: allAnswered })}
                    disabled = {false}
                >
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Finish</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        // else keep the continue buttons disabled and faded
        return (
            <TouchableOpacity
                disabled = {true}
            >
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonTextFaded}>Finish</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _createQuestions(params) {
        var questions = [];
        for(let i = 0; i < params.length; i++) {
            let question = params[i][0];
            let answers = params[i][1];
            questions.push(this._createQuestion(i + 1, question, answers));
        }

        return (
            <View>
                {questions}
            </View>
        );
    }

    _createQuestion(indx, questn, answrs) {
        return (
            <QuizQuestion
                index = {indx}
                question = {questn} 
                answers = {answrs}
                callback = {this._updateQuestion}
            />
        )
    }

    _updateQuestion = (answer, index) => {
        this.state.answers[index - 1] = answer;
        this.forceUpdate();
    }

    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.title}>Scaled Back Furniture Page</Text>
                {this._createQuestions([
                    [
                        'The first thing you do when you get home from work is:', 
                        [
                            'Pour yourself a warm cup of tea and curl up under your hand-knit white throw by the fireplace while you catch up on your favorite street-style bloggers.',
                            'Hang your Helmut Lang coat neatly in the coat closet, place your keys and sunglasses inside your entry console, and turn up the eclectic jazz music on your Bang Olufsen sound system.',
                            'Home? You\'re more likely to peruse the newest art gallery opening before meeting up with friends for a late-night cocktail.',
                            'Take your shoes off, light a few candles, and wind down by meditating.',
                            'Put on your house slippers, pour yourself a whiskey on the rocks, and catch up on the latest New York Times.',
                            'Hang your vintage bike on your wall hook and continue accessorizing your reclaimed wood bookshelf with your latest flea market finds.'
                        ]
                    ],
                    [
                        'This object caught your eye at the flea market:',
                        [
                            'A hand-woven wall hanging.',
                            'An overscale black-and-white graphic print.',
                            'Lucite stacking boxes.',
                            'Vintage calligraphy brushes.',
                            'An iconic Platner stool.',
                            'Antique radio tubes.',
                        ]
                    ],
                    [
                        'A party at your place might look like this:',
                        [
                            'Lots of friends and family over to pour back a few glasses of vodka and enjoy an array of desserts before moving on to the newest disco-tech.',
                            'A few guests to enjoy a sampling of skillfully cooked concoctions by your friend who just opened up a nouveau cuisine restaurant.',
                            'Some friends enjoying light appetizers while taking in a new art piece that you\'ve been working on.',
                            'Only the finest fresh sushi skillfully paired arranged on bamboo platters complete with jasmine green tea shots.',
                            'A cocktail party with fine liquor, cigars, and plenty of dapper men and women.',
                            'Opening your loft doors to anyone as long as they bring beer to the party while your DJ friend spins.',
                        ]
                    ],
                    [
                        'Your favorite seat in the house would have to be:',
                        [
                            'Your wishbone chair that you inherited from your grandmother. Ever since you tossed a fur throw on it, it has become your happy place.',
                            'Sitting in your sun-soaked dining nook- the morning light hits it just right though the large floor-to-ceiling glass windows and it warms the space just perfectly.',
                            'Your black le Corbusier leather chair. You\'ve had it forever and you could never get sick of its sleek lines.',
                            'Your teak lounger outside in your courtyard- the perfect place to watch the koi as they swim around in the pond.',
                            'Your Charles Eames lounge chair and ottoman after a long day of work at the office. It\'s the perfect place to kick off your shoes and enjoy a good book.',
                            'Your vintage architect\'s bar stool. Whenever you sit there you can\'t help but think about all the different people who have loved it throughout the years.'
                        ]
                    ],
                    [
                        'You love shopping here for your home:',
                        [
                            'Ikea',
                            'I already have enough stuff.',
                            'The nearest modern art museum store.',
                            'Your favorite Japanese store, Muji.',
                            'Design Within Reach.',
                            'The Brooklyn Flea Market'
                        ]
                    ],
                    [
                        'Which two colors would you want to love with for the rest of your life?',
                        [
                            'Blue and white.',
                            'White and black.',
                            'Slate blue and burgundy.',
                            'Moss green and taupe.',
                            'Chartreuse and light peachy-pink.',
                            'Stone and iron.'
                        ]
                    ],
                    [
                        'The item most likely to sit pretty on your bookshelf is:',
                        [
                            'A hand-turned blond wood candlestick holder collection.',
                            'I like to keep my space clean and free of clutter.',
                            'A hand-blown glass vessel.',
                            'A vintage brass singing bowl from Tibet.',
                            'A teak serving tray.',
                            'Your great-grandfather\'s typewriter.'
                        ]
                    ],
                    [
                        'You\'d rather live here:',
                        [
                            'Stockholm',
                            'Tokyo',
                            'Milan',
                            'Bali',
                            'Palm Springs',
                            'New York City'
                        ]
                    ],
                    [
                        'Your favorite thing to do before you go to bed is to:',
                        [
                            'Curl up in front of the fire.',
                            'Read from your tablet.',
                            'Binge-watch the latest Nettflix series on your big screen.',
                            'Relax through meditation.',
                            'Smoke a cigar or sip on a little scotch.',
                            'Tinker with something.'
                        ]
                    ],
                    [
                        'Dressing up for you looks a little like:',
                        [
                            'A simple A-line dress- with pockets for function, obviously.',
                            'Something structured, classic, and memorable',
                            'A piece that doesn\'t call too much attention to itself: fitted, simple, and modest.',
                            'Anything linen- comfortable, organic, soft, and flowy',
                            'Something iconic and sexy, and maybe adorned with a vintage brooch that says come on over and chat.',
                            'You\'re not one for dressing up, but you always look cool: skinny jeans, a gray T-shirt, and a vintage cognac moto jacket.'
                        ]
                    ]
                ])}
                {this._continueButton()}
            </View>
        );
    }
}
