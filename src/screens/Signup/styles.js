import styled from 'styled-components/native';

import Constants from 'expo-constants';

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

export const Inputs = styled.View`
    margin: 20px 0px 0px;
`;

export const Footer = styled.View`
    margin-bottom: 15px;
`;

export const Message = styled.View`
    margin-top: 16px;
`;