import React, { useState, useEffect } from 'react';

import { useTheme } from 'styled-components';

import {
    FakeInput,
    StyledInput,
    Label
} from './styles';

export function Input({placeholder, label, onChangeText, isSecure}) {
    const theme = useTheme();
    
    const [focus, setFocus] = useState(false);

    return(
        <FakeInput>
            <StyledInput 
                placeholder={placeholder}
                placeholderTextColor={theme.colors.placeholder}
                selectionColor={theme.colors.secondary}
                onChangeText={onChangeText}
                focus={focus}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)} 
                secureTextEntry={isSecure}/>    
            <Label>{label}</Label>
        </FakeInput>
    );
}