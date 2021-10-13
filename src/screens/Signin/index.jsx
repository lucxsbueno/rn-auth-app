import React, { useState } from 'react';

import { PrimaryButton } from '../../components/PrimaryButton/';
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

export default function Signin({navigation}) {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Alert
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");
    const [isOpen, setOpen] = useState(false);

    function signin() {
        setLoading(true);

        setTimeout(() => {

            setMessage("Aproveite nossas promoções de dia das crianças, use o cupom #CRIANCA20.");
            setOpen(true);
            setType("promo");

            setLoading(false);
        }, 3000);
    }

    return (
        <Container>
            <Form>
                <Title>Signin to your app</Title>
                <Link onPress={() => navigation.navigate('Signup')}><Subtitle>Not a member? signup now <Hightlight>here</Hightlight>.</Subtitle></Link>

                <Alert open={isOpen} message={message} type={type}/>

                <Inputs>
                    <Input placeholder="youremail@example.com" label="E-mail" onChangeText={setEmail} />
                    <Input placeholder="" label="Secret password" isSecure={true} onChangeText={setPassword} />
                </Inputs>

                <Footer>
                    { !email || !password ?
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