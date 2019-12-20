import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/index.css';

function loadStories() {
    req.keys().forEach(filename => req(filename));
  }

  const req = requireContext('../src/components', true, /\.stories.js$/);
  configure(loadStories, module);
