import React from 'react';
import { Button, ThemeButton } from './Button';
import { render, screen } from '@testing-library/react';

describe('button', () => {
    test('with only first param', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
