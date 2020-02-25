import React, { useState } from 'react'
import {StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''))
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                
                <Card style={styles.inputContainter}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                        />
                    <View style={styles.buttonContainter}>
                        <View style={styles.button}>
                            <Button color={Colors.secondary} title="Reset" onPress={() => {}}/>
                        </View>
                        <View style={styles.button}>
                            <Button color={Colors.primary} style={styles.button} title="Confirm" onPress={() => {}}/>
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
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
    },
    buttonContainter:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button:{
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'

    }
})

export default StartGameScreen

