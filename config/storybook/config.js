/* eslint-disable */
import { configure, storiesOf } from '@storybook/vue'
import { action, configureActions } from '@storybook/addon-actions';
import { registerStories } from 'vue-storybook'
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text, boolean, number, select, color, radios, date, files, object, array, optionsKnob, button } from "@storybook/addon-knobs/vue";
import StoryTemplateDecorator from '../../src/stories/story-template-decorator';
import { withInfo } from 'storybook-addon-vue-info'
// const req = require.context('../../src/stories', true, /.stories.js$/)
const req = require.context("../../src/components", true, /\.vue$/);

function loadStories() {
  req.keys().forEach(fileName => {
    let configurationObject = {
      req, 
      fileName, 
      storiesOf, 
      plugins: {
        withKnobs,
        withNotes,
        text,
        boolean,
        number,
        select,
        color,
        radios,
        date,
        files,
        object,
        array,
        optionsKnob,
        button
      },
      decorators: [
        withInfo,
        StoryTemplateDecorator  
      ],
      storyOptions: {
        info: true
      }
    }

    registerStories(configurationObject)
  })
}

configure(loadStories, module)
