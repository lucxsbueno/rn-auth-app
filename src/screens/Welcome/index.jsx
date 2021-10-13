import React, { useState, useEffect } from 'react';
import { Alert } from '../../components/Alert';

import { 
    Container,
    Header,
    Greetings,
    LogoutButton,
    Icon,
    Name,
    Text,
    Subtitle
} from './styles';

export default function Welcome({navigation}) {
    //Alert
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setMessage("Bem vindo! Aproveite o nosso cupom de boas vindas, #AGARAGA. Válido por tempo limitado.");
        setOpen(true);
        setType("promo");
    }, [])

    return(
        <Container>
            <Header>
                <Greetings>
                    <Text>Hello, </Text>
                    <Name>Lucas Bueno</Name>
                    <Text>! 👋🏼</Text>
                </Greetings>

                <LogoutButton  onPress={() => navigation.goBack()} >
                    <Icon name="arrow-up-left" />
                </LogoutButton>
            </Header>
            
            <Alert open={isOpen} message={message} type={type} />

        </Container>
    );
} 