import React, { useState } from 'react';

import { Keyboard } from 'react-native';

import { PrimaryButton } from '../../components/PrimaryButton/';
import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { Alert } from '../../components/Alert';

import {
    Container,
    Title,
    Form,
    Subtitle,
    Link,
    Hightlight,
    Inputs,
    Footer
} from './styles';

export default function Signup({navigation}) {

    const [loading, setLoading] = useState(false);

    //Form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Alert
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");
    const [isOpen, setOpen] = useState(false);

    function signin() {
        Keyboard.dismiss();

        setLoading(true);

        setTimeout(() => {

            setMessage("Os dados passados não batem com o que temos salvo aqui. Que tal tentar novamente?");
            setOpen(true);
            setType("danger");

            setLoading(false);
        }, 3000);
    }

    return (
        <Container>
            <BackButton onPress={() => navigation.goBack()} />

            <Form>
                <Title>Signup to the best app</Title>
                <Link><Subtitle>If your are a member, signow <Hightlight>here</Hightlight>.</Subtitle></Link>

                <Alert open={isOpen} message={message} type={type}/>

                <Inputs>
                    <Input placeholder="John McAfee" label="Full name" onChangeText={setName} />
                    <Input placeholder="john@example.com" label="E-mail" onChangeText={setEmail} />
                    <Input placeholder="" label="Secret password" isSecure={true} onChangeText={setPassword} />
                </Inputs>

                <Footer>
                    { !email || !password || !name ?
                        <PrimaryButton 
                            name="Next"
                            loading={false}
                            enabled={false}
                            onPress={() => {}}/> : loading ?

                                <PrimaryButton
                                    name="Next"
                                    loading={true}
                                    enabled={false}
                                    onPress={() => {}}/> :

                                <PrimaryButton
                                    name="Next"
                                    loading={false}
                                    enabled={true}
                                    onPress={signin}/> }       
                </Footer>

                <Link>
                    <Subtitle style={{textAlign: 'center'}}><Hightlight>I forgot my password</Hightlight></Subtitle>
                </Link>
            </Form>
        </Container>
    );
}