import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#944E63', 
    },
    status: {
        marginBottom: 20,
        fontSize: 24,
    },
    statuss: {
        marginBottom: 20,
        fontSize: 30,
    },
    board: {
        borderWidth: 1,
        borderColor: '#CAA6A6',
    },
    row: {
        flexDirection: 'row',
    },
    square: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#CAA6A6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareText: {
        fontSize: 36,
        color: '#FFE7E7',
    },
    reset: {
        padding: 8,
        width: '100%',
        color: '#B47B84',
        fontSize: 18,
        alignItems: 'center',
    },
    resetView: {
        borderWidth: 1,
        borderColor: '#FFE7E7',
        backgroundColor: '#FFE7E7',
        borderRadius: 12,
        marginTop: 35,
    },
    winningSquare: {
        backgroundColor: '#B47B84',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width:'70%',
        height:'15%',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color:'#944E63',
    },
    modalButton: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
        borderWidth:1,
        width:'60%',
        alignItems:'center',
        borderColor:'#944E63'
    },
    modalButtonText: {
        color: '#944E63',
        fontSize: 16,
    },
});

export default styles;