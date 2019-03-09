import React from 'react';
import Markdown from 'react-markdown';
import { checkA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withViewport } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';

import Button from '../src/Button';
import ButtonSource from 'rc-source-loader!../src/Button';

import READMECode from '../README.md';

storiesOf('rc-select', module)
    .addDecorator(checkA11y) 
    .addDecorator(withInfo)
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    .addDecorator(withViewport())
    .add('readMe',() => (
        <div className="markdown-body entry-content" style={{ padding: 24}}>
          <Markdown escapeHtml={false} source={READMECode} />
        </div>
      ),{
        source: { code: READMECode },
      })
    .add('button', () => (<Button />),{
		source: {  code: ButtonSource }
    })