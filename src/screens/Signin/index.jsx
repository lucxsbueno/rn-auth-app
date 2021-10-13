import React, { useEffect, useState } from 'react';

import { PrimaryButton } from '../../components/PrimaryButton/';
import { Input } from '../../components/Input';
import { Alert } from '../../components/Alert';

import { connection } from '../../services/api';

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
    const [pass, setPass] = useState("");

    //Alert
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        async function fetchApi() {
            try {
                const response = await connection.get('/');
                console.log(response.data);
            } catch(error) {
                setMessage("Não foi possível conectar com o servidor, verifique sua conexão com a internet.");
                setOpen(true);
                setType("error");
            } finally {
                //
            }
        }

        fetchApi();
    }, [])

    function navigateToScreen(screen) {
        navigation.navigate(screen);
    }

    function signin() {
        setLoading(true);

        const data = { email, pass }

        async function postApi() {
            try {
                const response = await connection.post('/users/signin', data);
                console.log(response.data);

                setMessage(response.data.message);
                setOpen(true);
                setType("success");
            } catch(error) {
                console.log(error);

                setMessage("Os dados informados não corresponde com a nossa base de dados.");
                setOpen(true);
                setType("error");
            } finally {
                setLoading(false);
            }
        }

        postApi();
    }

    return (
        <Container>
            <Form>
                <Title>Signin to your app</Title>
                <Link onPress={() => navigation.navigate('Signup')}><Subtitle>Not a member? signup now <Hightlight>here</Hightlight>.</Subtitle></Link>

                <Alert open={isOpen} message={message} type={type}/>

                <Inputs>
                    <Input placeholder="youremail@example.com" label="E-mail" onChangeText={setEmail} />
                    <Input placeholder="" label="Secret password" isSecure={true} onChangeText={setPass} />
                </Inputs>

                <Footer>
                    { !email || !pass ?
                        <PrimaryButton 
                            name="Next"
                            loading={false}
                            enabled={false}
                            onPress={signin}/> : loading ?

                                <PrimaryButton
                                    name="Next"
                                    loading={true}
                                    enabled={false}
                                    onPress={signin}/> :

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