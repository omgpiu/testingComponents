import { render, screen } from '@testing-library/react';
import SubscribeForm from './SubscribeForm';
import userEvent from '@testing-library/user-event';
import TestRenderer from 'react-test-renderer';


it('The subscribe button is disabled before typing anything in the input text box', () => {
    render(<SubscribeForm/>);

    expect(screen.getByRole('button', { name: /subscribe/i })).toBeDisabled();
    expect(screen.getByRole('checkbox', { name: 'I agree to disagree whatever the terms and conditions are.' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByTestId('email')).toBeInTheDocument()
});
it('The subscribe button becomes enabled when we start typing in the input text box', () => {
    render(<SubscribeForm/>);

    userEvent.type(screen.getByRole('textbox', { name: /email/i }), 'abc@email.com');
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeEnabled();
});
it("Test to match snapshot of component", () => {
    const subscribeFormTree = TestRenderer.create(<SubscribeForm />).toJSON();
    expect(subscribeFormTree).toMatchSnapshot();
})


export default 1
