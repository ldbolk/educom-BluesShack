import { Dimensions } from 'react-native';

const screenSize = Dimensions.get('window');
const mainColor = "#E3D400";
const secondaryColor = "#C7BB06";
const activeColor = "#D8006B";

const page = {
    backgroundColor: '#000',
    flex: 1,
    alignItem: 'center',
    justifyContent: 'flex-start'
    // justifyContent: 'center'
}

const regularText = {
    fontsize: 16,
    color: 'white'
}

const headerImage = {
    width: screenSize.width,
    height: Math.round(screenSize.height / 3),
    resizeMode: 'contain',
    justifyContent: 'center'
}

const logo = {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 100,
    height: 50,
    borderWidth: 2,
    borderColor: "#F00"
}

const buttonBar = {
    backgroundColor: activeColor,
    width: screenSize.width,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
}

const button = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: buttonBar.height
}

const buttonText = {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FFF',
}

export {
    mainColor, secondaryColor, activeColor, 
    page, regularText, headerImage, logo, 
    buttonBar, button, buttonText
}