import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: '#F5E0BC',
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
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
        margin: 20,
    },
    textRecommend: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'normal',
        color: 'red',
    },
    buttonContainer: {
        flexDirection: 'column',
        padding: 5,
        margin: 10,
        height: 55,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    buttonText: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonTextFaded: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey',
    },
});