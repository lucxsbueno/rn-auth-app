import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
    width: 100%;
    height: 45px;

    background-color: ${props => props.enabled ? props.theme.colors.primary : props.theme.colors.primary_opacity };

    border-radius: 24px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${props => props.theme.colors.light};
    font-family: ${ (props) => props.theme.fonts.bold};
`;