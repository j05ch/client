import * as React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Details from "../index";

afterEach(cleanup);

const renderWithRouter = (component: any) => {
    const history = createMemoryHistory();
    return {
        ...render(
            <Router history={history}>
                {component}
            </Router>
        )
    }
};

describe('Test Details component', () => {
    it('should match snapshot', () => {
        const {asFragment} = renderWithRouter(<Details />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render Back to result page button', () => {
        const {getByRole} = renderWithRouter(<Details />);
        expect(getByRole('link', {name: /back/i})).toBeEnabled;
    });
    it('should render Write a message button', () => {
        const {getByRole} = renderWithRouter(<Details />);
        expect(getByRole('button', {name: /write/i})).toBeEnabled;
    });
    it('should render Write a message button', () => {
        const {getByRole} = renderWithRouter(<Details />);
        expect(getByRole('button', {name: /write/i})).toBeEnabled;
    });
    it('should show message model', async () => {
        const {getByRole, getByText} = renderWithRouter(<Details />);
        fireEvent.click(getByRole('button', {name: /write/i}));
        const heading = await waitForElement(() => getByText(/contact/i));
        expect(heading).toHaveTextContent(/contact/i);
    });
    // add more tests here
});
