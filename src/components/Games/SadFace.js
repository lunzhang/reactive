import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DARK_COLOR, LIGHT_COLOR } from '../../constants';

// 24 faces total
// 0 = happy 1 = sad 
const faces = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

function SadFace({ }, ref) {
    // position of sad face
    const [position, setPosition] = useState([-1, -1]);
    let timer;
    const play = () => {
        timer = setInterval(() => {
            if (Math.random() > 0.4) {
                const row = Math.floor(Math.random() * 4);
                const col = Math.floor(Math.random() * 4);
                setPosition([row, col]);
            } else {
                setPosition([-1, -1]);
            }
        }, 3000);
    };
    useEffect(() => {
        play();
        return () => {
            clearInterval(timer);
        };
    }, []);
    useImperativeHandle(ref, () => ({
        play: play,
        isWin: () => position[0] !== -1,
        restart: () => {
            setPosition([-1, -1]);
        }
    }));
    return (
        <View style={styles.container}>
            {
                faces.map((row, rowIndex) => (
                    <View key={row + rowIndex} style={styles.row}>
                        {row.map((face, columnIndex) => {
                            const rotation = Math.floor(Math.random() * 4);
                            return (
                                <View key={face + columnIndex} style={styles.cell}>
                                    {
                                        (rowIndex === position[0] && columnIndex === position[1]) ?
                                        <Text style={{ ...styles.face, ...styles[`rotation${rotation}`] }}>&#128577;</Text> : 
                                        <Text style={{ ...styles.face, ...styles[`rotation${rotation}`] }}>&#128578;</Text>
                                    }
                                </View>
                            );
                        })}
                    </View>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    rotation1: {
        transform: [{ rotate:('90deg') }]
    },
    rotation2: {
        transform: [{ rotate:('180deg') }]
    },
    rotation3: {
        transform: [{ rotate:('270deg') }]
    },
    face: {
        fontSize: 24
    },
    cell: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        backgroundColor: DARK_COLOR,
    }
});

export default forwardRef(SadFace);