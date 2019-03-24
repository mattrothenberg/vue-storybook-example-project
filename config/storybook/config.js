/* eslint-disable */
import { configure, storiesOf } from '@storybook/vue'
import { action, configureActions } from '@storybook/addon-actions';
import { registerStories } from 'vue-storybook'
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text, color, select, boolean } from "@storybook/addon-knobs/vue";

// const req = require.context('../../src/stories', true, /.stories.js$/)
const req = require.context("../../src/components", true, /\.vue$/);

function loadStories() {
  req.keys().forEach(filename => {
    registerStories(req, filename, storiesOf, {
      withKnobs,
      withNotes,
      action,
      text,
      boolean
    })
  })
}

configure(loadStories, module)
