import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { withTranslation } from 'react-i18next';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('sidebar', () => {
    test('test sidebar', () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle sidebar', () => {
        renderWithTranslations(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle-button');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
