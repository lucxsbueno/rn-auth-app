import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components';

export const Container = styled.View`
    display: ${props => (props.open ? 'flex' : 'none')};

    border-radius: 8px;

    width: 100%;
    padding: 12px 16px;
    margin-top: 20px;

    background-color: ${(props) => String(props.background)};

    flex-direction: row;
    align-items: center;
`;

export const Icon = styled.Text`
    width: 16px;
    margin-right: 16px;
    font-size: ${RFValue(12)}px;
`;

export const Text = styled.Text`
    margin-top: 2px;
    font-size: ${RFValue(14)}px;
    color: ${(props) => String(props.color)};
    font-family: ${({theme}) => theme.fonts.medium};
`;