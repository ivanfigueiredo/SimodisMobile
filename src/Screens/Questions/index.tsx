import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { RadioButton } from 'react-native-paper'
import { ButtonEnter } from "../../components/ButtonEnter";
import { useNavigation } from "@react-navigation/native";


export function Questions() {
    const [value, setValue] = useState('')

    const navigation = useNavigation ()
    
    
    function handleBack(){
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.table}>
                <Text style={styles.QuestionsNumber}>Pergunta 1</Text>
                <Text style={styles.title}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum quos, nobis voluptate culpa tempore sunt adipisci mollitia animi voluptatibus eum unde! Molestias necessitatibus, nemo beatae est inventore veritatis? Soluta?
                </Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={{flexDirection: "row", alignItems: 'center'}}>
                        <RadioButton value="first" />
                        <Text>First</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RadioButton value="Second" />
                        <Text>Second</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RadioButton value="Three" />
                        <Text>Three</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RadioButton value="Four" />
                        <Text>Four</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RadioButton value="Five" />
                        <Text>Five</Text>
                    </View>

                </RadioButton.Group>
                <View style={styles.FooterButton}>
                    <ButtonEnter title="Back" onPress={handleBack}/>
                    <ButtonEnter title="Next"/>
                </View>
            </View>

        </View>
    )
}
