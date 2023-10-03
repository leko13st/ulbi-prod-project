import 'app/styles/index.scss';

import './StyleDecorator.scss';
import { StoryFn } from '@storybook/react';

export const StyleDecorator = (Story: StoryFn) => (
    <div className="app light decorator">
        <Story />
    </div>
);
