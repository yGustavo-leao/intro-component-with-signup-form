import { Container, Description, Disclaimer, DisclaimerHighlight, Form, FormButton, Input, Introduction, Title, TryFree, TryFreeHighlight } from "./Login.styled"

export const Login = () => {
    return (
        <Container>
            <Introduction>
                <Title>Learn to code by watching others</Title>
                <Description>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</Description>
            </Introduction>

            <TryFree><TryFreeHighlight>Try it free 7</TryFreeHighlight> days then $20/mo. thereafter</TryFree>

            <Form onSubmit={e => e.preventDefault()} >
                <Input type="text" placeholder="First Name" required/>
                <Input type="text" placeholder="Last Name" required/>
                <Input type="email" placeholder="Email address" autoComplete="username" required />
                <Input type="password" placeholder="Password" autoComplete="current-password" required />
                <FormButton type="submit" >Claim your free trial</FormButton>
                <Disclaimer>By clicking the button, you are agreeing to our <DisclaimerHighlight>Terms and Services</DisclaimerHighlight></Disclaimer>
            </Form>
        </Container>
    )
}