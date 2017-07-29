import React,{Component} from 'react';
import {TextInput} from 'react-native';
import {Card,CardSection,Button} from './common';

class LoginForm extends Component {
state={text:'Entre User Name '};
    render(){
        return(
            <Card>
                <CardSection>
                    <TextInput
                        style={{height:40 ,flex:1, width:null}}
                        onChangeText={userText=>this.setState({text:userText})}
                        value={this.state.text}
                        >
                    </TextInput>
                </CardSection>
                <CardSection />
                <CardSection>
                    <Button>
                        Login in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;