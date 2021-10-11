import React from 'react';

import {
    Container,
    Title,
    Form,
    Subtitle,
    PrimaryButton,
    TextButton,
    Link,
    Hightlight,
    Inputs,
    FakeInput,
    Label,
    Input,
    Footer,
} from './styles';

export default function Signup() {
    return (
        <Container>
            <Form>
                <Title>Signup to your app</Title>
                <Link>
                    <Subtitle>If you are a member, signin now <Hightlight>here</Hightlight>.</Subtitle>
                </Link>

                <Inputs>
                    <FakeInput>
                        <Input placeholder="John Doe" />   
                        <Label>Full name</Label>
                    </FakeInput>

                    <FakeInput>
                        <Input placeholder="youremail@example.com" />    
                        <Label>E-mail address</Label>
                    </FakeInput>

                    <FakeInput>
                        <Input placeholder="" />    
                        <Label>Secret password</Label>
                    </FakeInput>
                </Inputs>

                <Footer>
                    <PrimaryButton>
                        <TextButton>Next</TextButton>
                    </PrimaryButton>
                </Footer>

                <Link>
                    <Subtitle style={{textAlign: 'center'}}><Hightlight>Terms of usage</Hightlight></Subtitle>
                </Link>
            </Form>
        </Container>
    );
}