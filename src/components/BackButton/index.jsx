import React from 'react';

import {
    Container,
    Icon
} from './styles';

export function BackButton({navigation}) {
    return(
        <Container>
            <Icon name="arrow-left" onPress={() => navigation.goBack()}/>
        </Container>
    );
}