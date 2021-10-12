import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const FakeInput = styled.View`
    width: 100%;

    position: relative;
`;

export const Label = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${(props) => props.theme.fonts.medium};
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.light};

    padding: 0px 10px;
    margin-left: 5px;
    position: absolute;
`;

export const StyledInput = styled.TextInput`
    width: 100%;
    height: ${RFValue(45)}px;
    border-radius: 8px;
    border-width: 2px;
    border-color: ${props => props.focus ? props.theme.colors.text : props.theme.colors.border};

    font-size: ${RFValue(16)}px;
    color: ${props => props.theme.colors.text};

    margin-top: 10px;
    margin-bottom: 15px;
    padding-left: 15px;
`;