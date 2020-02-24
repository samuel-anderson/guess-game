import React from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.inputContainter}> 
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainter}>
                    <Button title="Reset" onPress={() => {}}/>
                    <Button title="Confirm" onPress={() => {}}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    
    },
    inputContainter: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.26 ,
        shadowRadius: 6,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10

    },
    buttonContainter:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})

export default StartGameScreen

