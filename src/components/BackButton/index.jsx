import React from 'react';

import {
    Container,
    Icon
} from './styles';

export function BackButton({ onPress }) {
    return(
        <Container>
            <Icon name="arrow-left" onPress={onPress}/>
        </Container>
    );
}