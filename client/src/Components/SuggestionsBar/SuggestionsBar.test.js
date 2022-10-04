/** @jest-environment jsdom */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import SuggestionsBar from './SuggestionsBar';

test('Renders the SuggestionsBar component...', () => {
    render(<SuggestionsBar />);
    expect(screen.getByText('What\'s Trending Now')).toBeInTheDocument();
});
