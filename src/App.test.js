

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "./App"
import { fetchShow as mockFectchShow} from "./api/fetchShow"

test('fetches async api call', async () => {
    render(<App />);

    const selectASeason = await screen.findByText(/select a season/i);
    userEvent.click(selectASeason);

    const season1 = await screen.findByText(/season 1/i);
    expect(season1).toBeInTheDocument();
});
