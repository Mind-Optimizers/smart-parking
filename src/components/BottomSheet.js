import React, {useState} from 'react'
import { View, Text } from 'react-native'
import RNBottomSheet from 'react-native-raw-bottom-sheet'
import { RadioButton, Button } from 'react-native-paper'

const BottomSheet = props => {

    const [duration, setDuration] = useState(null)

    return (
        <View>
            <RNBottomSheet 
            ref={props.innerRef}
            height={350}
            openDuration={250}
            customStyles={{
                container: {
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    borderRadius: 10
                }
            }}
            >
                <Text style={{
                    fontSize: 20,
                    marginBottom: 10
                }}>Duration</Text>
                <Text style={{
                    fontSize: 14,
                    marginBottom: 10
                }}>Choose your desired parking duration.</Text>
                <RadioButton.Group
                    style={{
                        width: '100%'
                    }}
                    onValueChange={val => setDuration(val)}
                    value={duration}
                >
                    <View style={styles.buttonContainer}>
                        <RadioButton value={1} st/>
                        <View style={{
                            justifyContent: 'center'
                        }}>
                        <Text style={styles.btnText}>1 hour</Text>
                        <Text style={styles.btnTextSm}>₹25</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <RadioButton value={2} />
                        <View style={{
                            justifyContent: 'center'
                        }}>
                            <Text style={styles.btnText}>2 hours</Text>
                            <Text style={styles.btnTextSm}>₹40</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <RadioButton value={3} />
                        <View style={{
                            justifyContent: 'center'
                        }}>
                            <Text style={styles.btnText}>3 hours</Text>
                            <Text style={styles.btnTextSm}>₹60 and ₹15 per extra hour</Text>
                        </View>
                        
                    </View>
                </RadioButton.Group>
                <Button mode="contained" disabled={!duration} onPress={props.onChoose}>CONTINUE</Button>
            </RNBottomSheet>
        </View>
    )
}

const styles = {
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    btnText: {
        width: 300
    },
    btnTextSm: {
        fontSize: 15,
    },
}

export default BottomSheet
