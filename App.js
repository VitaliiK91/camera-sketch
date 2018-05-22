/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Button from './components/Button';

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
	},
	ButtonsContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 50,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
});

const syncIcon = require('./assets/sync.png');
const cloudIcon = require('./assets/cloud.png');
const cameraIcon = require('./assets/camera.png');

class App extends PureComponent {
	doStuff() {
		this.setState({});
	}

	render() {
		return (
			<View style={styles.MainContainer}>
				<RNCamera style={styles.MainContainer} />
				<View style={styles.ButtonsContainer}>
					<Button onPress={() => alert(1)} icon={syncIcon} buttonStyle={{ backgroundColor: 'purple' }} />
					<Button isHalo onPress={() => alert(2)} icon={cameraIcon} buttonStyle={{ backgroundColor: 'purple' }} />
					<Button onPress={() => alert(3)} icon={cloudIcon} buttonStyle={{ backgroundColor: 'purple' }} />
				</View>
			</View>
		);
	}
}

export default App;
