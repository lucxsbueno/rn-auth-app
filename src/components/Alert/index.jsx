import React, { useState, useEffect } from 'react';
import { getAlertType } from './alertType';

import {
    Container,
    Icon,
    Text
} from './styles';

export function Alert(props) {
    const [type, setType] = useState([]);

    useEffect(() => {
        const type = getAlertType(props.type);
        setType(type);
    }, [props.type]);

    return (
        <Container open={props.open} background={type.background_color} style={{borderTopLeftRadius: 8}}>
            <Icon>{type.icon}</Icon>
            <Text color={type.color}>{props.message}</Text>
        </Container>
    );
}
