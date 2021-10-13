import styled from 'styled-components';

import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

export const Container = styled(BorderlessButton)`
    width: 44px;
    height: 44px;

    position: absolute;

    top: 16px;
    left: 16px;

    border-radius: 44px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(Feather)`
    font-size: 24px;
    color: ${props => props.theme.colors.secondary};
`;