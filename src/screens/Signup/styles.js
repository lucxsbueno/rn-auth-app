import styled from 'styled-components/native';

import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.background};

    padding: 20px;
    margin-top: ${Constants.statusBarHeight}px;
`;

export const Form = styled.View`
    width: 100%;
    border-radius: 8px;
    padding: 15px 20px 20px 20px;
    background-color: ${props => props.theme.colors.light};
`;

export const Title = styled.Text`
    font-size: 20px;
    font-family: ${ (props) => props.theme.fonts.bold };
    color: ${ (props) => props.theme.colors.text };
`;

export const Subtitle = styled.Text`
    font-size: 16px;
    font-family: ${ (props) => props.theme.fonts.medium };
    color: ${ (props) => props.theme.colors.text };

    margin-top: 5px;
`;

export const Link = styled.TouchableOpacity``;

export const Hightlight = styled.Text`
    color: ${ (props) => props.theme.colors.secondary };
    background-color: ${ (props) => props.theme.colors.accent };
    text-decoration: underline;
`;

export const PrimaryButton = styled(RectButton)`
    width: 100%;
    height: 45px;

    background-color: ${props => props.theme.colors.primary};

    border-radius: 24px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors.light};
    font-family: ${ (props) => props.theme.fonts.bold};
`;

export const Inputs = styled.View`
    margin: 20px 0px 0px;
`;

export const FakeInput = styled.View`
    width: 100%;

    position: relative;
`;

export const Label = styled.Text`
    font-size: 13px;
    font-family: ${(props) => props.theme.fonts.medium};
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.light};

    padding: 0px 10px;
    margin-left: 5px;
    position: absolute;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 45px;
    border-radius: 8px;
    border-width: 2px;
    border-color: ${props => props.theme.colors.border};

    font-size: 16px;

    margin-top: 10px;
    margin-bottom: 15px;
    padding-left: 15px;
`;

export const Footer = styled.View`
    margin-bottom: 15px;
`;
