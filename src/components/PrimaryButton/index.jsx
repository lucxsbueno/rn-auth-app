import React from 'react';

import { ActivityIndicator } from 'react-native';

import { useTheme } from 'styled-components';

import {
    Container,
    Text
} from './styles';

export function PrimaryButton({name, loading, enabled, onPress}) {
    const theme = useTheme();

    return(
        <Container onPress={onPress} enabled={enabled}>
            { loading ? <ActivityIndicator size="large" color={theme.colors.light} /> : <Text>{name}</Text> }
        </Container>
    )
}
