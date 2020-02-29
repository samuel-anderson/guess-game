import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

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
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="New Game" onPress={props.onRestart} />
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
    }
})

export default GaveOverScreen