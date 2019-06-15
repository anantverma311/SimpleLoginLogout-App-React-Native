import React , { Component } from 'React';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button , Spinner} from './components/common';
import LoginForm from './components/LoginForm';

 
class App extends Component {

    state = { loggedIn: null  };

    componentWillMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyDt8_d5F40Hrhbm5FQWh32IauSng1BaBD4",
                authDomain: "authentication-d2a4b.firebaseapp.com",
                databaseURL: "https://authentication-d2a4b.firebaseio.com",
                projectId: "authentication-d2a4b",
                storageBucket: "",
                messagingSenderId: "75612633140",
                appId: "1:75612633140:web:88546ffca389b9bb"
        });
        firebase.auth().onAuthStateChanged((user)=> {

                if (user) {
                    this.setState({loggedIn:true});                
                } 
                else{
                    this.setState({loggedIn:false});
                }
        });
    }

    renderContent(){

        switch(this.state.loggedIn){
            case true:
                    return(
                        <View style = {styles.containerStyle}>
                            <Button onPress = {()=> firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </View>
                    );
                case false:
                    return <LoginForm />;
                    default:
                        return<View style = {styles.spinnerContainerStyle}><Spinner>
                                    size = "large" 
                                </Spinner></View>
        }
        
    }
    render() {
        return (
            <View>
                <Header  HeaderText = "Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    spinnerContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 35,
        paddingBottom: 15,
    }
};

export default App;