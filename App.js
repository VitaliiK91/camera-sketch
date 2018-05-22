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
import FaceOverlay from './components/FaceOverlay';
import CameraIcon from './components/CameraIcon';
import RefreshIcon from './components/RefreshIcon';
import CloudIcon from './components/CloudIcon';
import MenuIcon from './components/MenuIcon';

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
	MenuContainer: {
		position: 'absolute',
		top: 34.57,
		left: 16.29,
	},
	FaceOverlay: {
		position: 'absolute',
		top: -200,
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	Button: {
		backgroundColor: 'rgb(140, 80,200)',
	},
	Halo: {
		borderColor: 'rgb(140, 80,200)',
	},
});

class App extends PureComponent {
	state = {
		isBackCamera: true,
	};

	takePicture = async () => {
		const options = { quality: 0.5, base64: true };
		const data = await this.camera.takePictureAsync(options);
		return data;
	}

	toggleCamera = () => {
		this.setState({ isBackCamera: !this.state.isBackCamera });
	}

	render() {
		return (
			<View style={styles.MainContainer}>
				<RNCamera
					ref={(ref) => { this.camera = ref; }}
					style={styles.MainContainer}
					type={this.state.isBackCamera ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
				/>
				<View style={styles.FaceOverlay}>
					<FaceOverlay />
				</View>
				<View style={styles.MenuContainer}>
					<MenuIcon />
				</View>
				<View style={styles.ButtonsContainer}>
					<Button onPress={this.toggleCamera} buttonStyle={styles.Button}>
						<RefreshIcon />
					</Button>
					<Button isHalo onPress={this.takePicture} buttonStyle={styles.Button} haloStyle={styles.Halo}>
						<CameraIcon />
					</Button>
					<Button onPress={() => alert('Some action')} buttonStyle={styles.Button}>
						<CloudIcon />
					</Button>
				</View>
			</View>
		);
	}
}

export default App;
