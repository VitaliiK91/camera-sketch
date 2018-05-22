import React from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';

const styles = StyleSheet.create({
	Halo: {
		height: 60,
		width: 60,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		margin: 5,
		backgroundColor: 'transparent',
		borderColor: 'purple',
	},
	Button: {
		height: 50,
		width: 50,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const Button = props => props.isHalo ?
	(
		<View style={styles.Halo}>
			<TouchableOpacity onPress={props.onPress} style={[styles.Button, props.buttonStyle]}>
			{props.children}
			</TouchableOpacity>
		</View>
	) :
	(
		<TouchableOpacity onPress={props.onPress} style={[styles.Button, props.buttonStyle]}>
			{props.children}
		</TouchableOpacity>
	);

export default Button;
