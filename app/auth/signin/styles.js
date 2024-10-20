import { StyleSheet } from "react-native";

import { Colors } from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreeText : {
        color: Colors.blue,
        marginHorizontal: 14
    },
    agreeTextBold : {
        fontWeight: 'bold'
    },
    button: {
        marginVertical: 20
    },
    footerText:{
        color: Colors.blue,
        marginBottom: 56,
        textAlign: 'center'
    },
    footerLink:{
        fontWeight: 'bold'
    }
})

export default styles