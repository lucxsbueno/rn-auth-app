import React, { useState } from 'react';

import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import SnackBar from 'react-native-snackbar-component'

import {
    Container,
    Title,
    Form,
    Subtitle,
    PrimaryButton,
    TextButton,
    Link,
    Hightlight,
    Inputs,
    FakeInput,
    Label,
    Input,
    Footer,
} from './styles';

export default function Signin() {
    const theme = useTheme();

    const [loading, setLoading] = useState(false);
    const [snackBar, setSnackBar] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signin() {
        setLoading(true);

        setTimeout(() => {
            const data = { email, password }
    
            console.log(data);

            setLoading(false);

            setSnackBar(true);

            setTimeout(() => {
                setSnackBar(false);
            }, 5000);
        }, 3000);
    }

    return (
        <Container>
            <Form>
                <Title>Signin to your app</Title>
                <Link>
                    <Subtitle>Not a member? signup now <Hightlight>here</Hightlight>.</Subtitle>
                </Link>

                <Inputs>
                    <FakeInput>
                        <Input placeholder="youremail@example.com" onChangeText={setEmail}/>    
                        <Label>E-mail address</Label>
                    </FakeInput>

                    <FakeInput>
                        <Input placeholder="" onChangeText={setPassword} />    
                        <Label>Secret password</Label>
                    </FakeInput>
                </Inputs>

                <Footer>
                    {!email || !password ?
                        <PrimaryButton enabled={false} onPress={signin}>
                            <TextButton>Next</TextButton>
                        </PrimaryButton>
                        :

                        loading ?
                                <PrimaryButton enabled={false} onPress={signin}>
                                    <ActivityIndicator color={theme.colors.light} size="large"/>
                                </PrimaryButton>
                                :
                                <PrimaryButton enabled={true} onPress={signin}>
                                    <TextButton>Next</TextButton>
                                </PrimaryButton>
                    }       
                </Footer>

                <Link>
                    <Subtitle style={{textAlign: 'center'}}><Hightlight>I forgot my password</Hightlight></Subtitle>
                </Link>
            </Form>

            <SnackBar
                visible={snackBar}
                accentColor={theme.colors.secondary}
                textMessage="Hello There!"
                actionHandler={()=>{console.log("snackbar button clicked!")}}
                actionText="let's go"/>
        </Container>
    );
}