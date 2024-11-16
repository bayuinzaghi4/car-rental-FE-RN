import { Text, Pressable, StyleSheet } from "react-native";

export default function Button({
    onPress,
    title,
    children,
    color,
    style,
    borderRadius
}) {
    return (
        <Pressable
            borderRadius={borderRadius}
            onPress={onPress}
            style={{
                backgroundColor: color,
                ...styles.button,
                ...style
            }}>
            {children ? children :
                <Text style={styles.buttonTitle}>{title}</Text>}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        alignItems: 'center'
    },
    buttonTitle: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold',
    }
})