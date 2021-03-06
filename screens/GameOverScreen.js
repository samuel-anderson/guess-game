import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'
const GaveOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={300}
                    //for local image 
                    //source={require('../assets/success.png')} 

                    //for web image, copied image address
                    source={{uri:'https://cdn5.vectorstock.com/i/1000x1000/11/69/game-over-glitch-vector-18841169.jpg'}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            </View>
            <MainButton onPress={props.onRestart}>
                New Game
            </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor:  'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width:'100%',
        height:'100%'
    },
    resultContainer:{
        marginHorizontal:30,
        marginVertical: 15
    },
    resultText:{
        textAlign:'center',
        fontSize:20
    },
    highlight:{
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
})

export default GaveOverScreen