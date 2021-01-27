import React from 'react';
import { styles } from './Styles.js';
import { QuizQuestion } from './QuizQuestion.js';
import { Text, View, TouchableOpacity } from 'react-native';

export class QuizOrnateScreen extends React.Component {
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
            sum += answer + 6;
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
                <Text style={styles.title}>Ornate Furniture Page</Text>
                {this._createQuestions([
                    [
                        'Your ideal ride is a:', 
                        [
                            'Restored 1951 Ford pickup.',
                            'Why ride when you can simply put your thumb out and glide?',
                            '1970s Volkswagen Bus ready for a road trip.',
                            'Rolls-Royce, outfitted with my own driver.',
                            'DeLorean, especially one that time-travels.',
                            'Jaguar, because it\'s classic and beautiful.'
                        ]
                    ],
                    [
                        'You can\'t get enough of this textile:',
                        [
                            'A natural cowhide rug.',
                            'A worn Turkish kilim.',
                            'An intricately detailed macrame tapestry.',
                            'A luxurious mohair throw pillow.',
                            'A graphic neon pillow.',
                            'A sumptuous cable knit throw.'
                        ]
                    ],
                    [
                        'Your Saturday morning routine looks a little like this:',
                        [
                            'A walk around the lakeside.',
                            'A visit to the farmers\' market.',
                            'Dancing around in your underwear.',
                            'Sleeping in because you may or may not have had too much to drink last night.',
                            'A good phone chat with a friend.',
                            'Waking up to the sound and smell of sizzling bacon and fried eggs.'
                        ]
                    ],
                    [
                        'You would die to live on this movie set:',
                        [
                            'Rosalyn Rosenfield\'s bold ranchhouse in American Hustle.',
                            'The Grey Gardens house (before the raccoons got to it).',
                            'Polly\'s eclectic apartment in Along Came Polly.',
                            'Gatsby\'s home in the original or remake.',
                            'That awesome art deco beach house in Weekend at Bernie\'s',
                            'Jane Adler\'s gorgeous house in It\'s Complicated.'
                        ]
                    ],
                    [
                        'At the flea market, you\'re probably eyeing this type of object:',
                        [
                            'An antler set that you can\'t wait to hang on your wall.',
                            'A Moroccan wedding blanket- the perfect extra layer for your bed.',
                            'Retro string art, which looks cool in the right color palette.',
                            'A silky little number: a hot pink maxi dress from the thirties.',
                            'A sleek brass table lamp.',
                            'A linen wingback chair with upholstery in perfect condition. Yeah!'
                        ]
                    ],
                    [
                        'The plant most likely to grow in your living room is:',
                        [
                            'A tall potted cactus that looks plucked off a ranch.',
                            'A sprawling, jungle-like fiddle leaf fig.',
                            'A resilient, feathery Boston fern.',
                            'Who has time to water plants?',
                            'A neon green, trailing ivy plant.',
                            'A classic spiral-shaped cedar topiary.'
                        ]
                    ],
                    [
                        'You\'re likely to re-cover your favorite arm chair in this fabric:',
                        [
                            'A soft off-white or beige linen weave.',
                            'A bright vintage Indian sari.',
                            'An oversized poppy floral print.',
                            'Luxurious velvet demask.',
                            'Sleek white leather.',
                            'Something with and Old World vibe, like a chinoiserie print.'
                        ]
                    ],
                    [
                        'You could live by this quote:',
                        [
                            '"Ah! There is nothing like staying home, for real comfort," said Jane Austen.',
                            'As Allen Ginsberg once advised, "Follow your inner moonlight; don\'t mind the madness."',
                            '"I want to rock and roll all night, and party every day," as Gene Simmons would have us do.',
                            'Marilyn Monroe put it best: "Fear is stupid. So are regrets."',
                            'Like David Bowie, you believe, "I don\'t know where I\'m going from here, but I promise it won\'t be boring."',
                            '"One is born with good taste. It\'s very hard to acquire. You can acquire the patina of taste," as noted by the one and only Diana Vreeland.'
                        ]
                    ],
                    [
                        'You\'re ready to start a new collection. You start stocking up on:',
                        [
                            'A collection of oil paintings- all landscapes of quiet countrysides.',
                            'Antique Turkish and Moroccan textiles that remind you of your trip abroad.',
                            'Vintage wicker and rattan baskets and accessories- you love the natural color and textures they bring to your room.',
                            'Luxe Lucite accessories or vintage fur- you find them irresistable.',
                            'Fun brass objects that bring a little bling home.',
                            'Antique plates and teapots- you\'re always on the search for more of your grandmother\'s wedding pattern.'
                        ]
                    ],
                    [
                        'Long day at work. You order this at the bar:',
                        [
                            'Nothing fancy- Jack on the rocks should do it.',
                            'A Mai Tai, or whatever comes with an umbrella so you can pretend you\'re far, far away.',
                            'Make it a Harvery Wallbanger (you\'re always a sucker for a throwback drink).',
                            'Martini, of course. You know exactly how to order it: extra dry and a little dirty.',
                            'Oh, why not? Sex on the Beach would be fun to try.',
                            'Always a glass of their best Merlot.'
                        ]
                    ]
                ])}
                {this._continueButton()}
            </View>
        );
    }
}
