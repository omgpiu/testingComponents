import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import PokemonSearch from './PokemonSearch';

it('Loading is shown until the Pokemon is fetched', async () => {
    render(<PokemonSearch/>);

    expect(screen.getByText('...Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.queryByText('...Loading...'));
});
it("The Pokemon name is displayed correctly after it has been fetched", async () => {
    // Mock the browser fetch function
    // @ts-ignore
    window.fetch = jest.fn(() => {
        const pokemon = { name: 'bulbasaur', weight: 69, height: 7 };

        return Promise.resolve({
            json: () => Promise.resolve(pokemon),
        });
    });
    render(<PokemonSearch />);
    const pokemonName = await screen.findByText('bulbasaur');
    expect(pokemonName).toBeInTheDocument();
});
