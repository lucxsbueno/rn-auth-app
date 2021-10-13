import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 16px;

    background-color: ${({theme}) => theme.colors.background};

    margin-top: ${getStatusBarHeight()}px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Greetings = styled.View`
    flex-direction: row;
`;

export const LogoutButton = styled(BorderlessButton)`
    width: 38px;
    height: 38px;
    border-radius: 38px;
    background-color: ${({theme}) => theme.colors.light};

    align-items: center;
    justify-content: center;
`;

export const Icon = styled(Feather)`
    font-size: 24px;
    color: ${({theme}) => theme.colors.primary};
`;

export const Subtitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
    font-size: 18px;
`;

export const Text = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.text};
    font-size: 20px;
`;

export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.black};
    color: ${({theme}) => theme.colors.text};
    font-size: 20px;
`;