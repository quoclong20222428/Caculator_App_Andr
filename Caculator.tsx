import { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native"

const { height: scrHeight } = Dimensions.get('window');

const Caculator = () => {
    const [input, setInput] = useState<string>('');

    const handleInput = (value: string) => {

        if (value === 'AC') {
            setInput('');
        }
        else {
            setInput(input === '' ? value : input + value);
        }
    }
    const handleCaculator = () => {
        try{
            const result = eval(input);
            //Number.isFinite(result) ? setInput(result.toString()) : (alert('Can not divide with 0'), setInput('0'));
            Number.isFinite(result) ? 
            setInput(result.toString()) 
            : 
            (setInput(''), alert('Cannot divide with 0'));
        } catch(error) {
            setInput('Not implemented');
            setTimeout(() => setInput(''), 2300);
        }
    }

    {/*Phan xu ly bo cuc phim*/}
    const layout = [
        [
            {inputVal: '7', style: styles.button, handler: handleInput},
            {inputVal: '8', style: styles.button, handler: handleInput},
            {inputVal: '9', style: styles.button, handler: handleInput},
            {inputVal: '/', style: styles.btnOperate, handler: handleInput},
        ],
        
        [
            {inputVal: '4', style: styles.button, handler: handleInput},
            {inputVal: '5', style: styles.button, handler: handleInput},
            {inputVal: '6', style: styles.button, handler: handleInput},
            {inputVal: '-', style: styles.btnOperate, handler: handleInput},
        ],
        [
            {inputVal: '1', style: styles.button, handler: handleInput},
            {inputVal: '2', style: styles.button, handler: handleInput},
            {inputVal: '3', style: styles.button, handler: handleInput},
            {inputVal: '*', style: styles.btnOperate, handler: handleInput},
        ],
        [
            {inputVal: '0', style: styles.button, handler: handleInput},
            {inputVal: '.', style: styles.button, handler: handleInput},
            {inputVal: 'AC', style: styles.btnOperate, handler: handleInput},
            {inputVal: '+', style: styles.btnOperate, handler: handleInput},
        ],

        [
            {inputVal: '=', style: styles.btnEqual, handler: handleCaculator},
        ]

    ]
    

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                {/* editable la chinh sua phan nhap data: false = ko dc sua */}
                <TextInput multiline={false} style={styles.input} editable={false}>
                    {input}
                </TextInput>
            </View>
                <View style={styles.btnContainer}>
                    {layout.map(row => (
                        <View style={styles.row}>
                            {row.map(row => (
                                <TouchableOpacity key={row.inputVal} style={row.style} onPress={() => row.handler(row.inputVal)}>
                                    <Text style={styles.btnText}>
                                        {row.inputVal}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}

                    {/* <Button title="Hãy nhấn đây để TEST" onPress={() => alert("Successed")}/>      */}
                </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#000',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 40
    },
    
    button: {
        backgroundColor: '#333333',
        flex: 1,
        padding: 16,
        borderRadius: 60,
        margin: 6,
    },

    btnContainer: {
        flex: 3,
        justifyContent: 'space-around',
    },

    inputContainer: {
        height: '40%',
        justifyContent: 'flex-end',
    },

    // phan hien thi so
    input: {
        fontSize: 48,
        color: '#fff',
        textAlign: 'right',
    },

    row: {
        flexDirection: 'row',
    },

    btnText: {
        fontSize: 28,
        textAlign: 'center',
        color: '#fff',
    },

    btnEqual: {
        backgroundColor: 'green',
        flex: 1,
        padding: 16,
        borderRadius: 60,
        margin: 6,
        width: '100%',
    },

    btnOperate: {
        backgroundColor: 'orange',
        flex: 1,
        padding: 16,
        borderRadius: 60,
        margin: 6,
    },

    btnTextAC: {
        color: 'red',
        fontSize: 28,
    },
});

export default Caculator;