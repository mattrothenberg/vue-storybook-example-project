<template>
  <button class="button is-primary" @click="onClick">
    <slot></slot>
  </button>
</template>

<story name="default" group="MyButton">
  <my-button>Click Me!</my-button>
</story>

<story notes="this is the coolest story ever" name="another one" group="MyButton">
  <my-button @click="action('show me the money')">Click Me!</my-button>
</story>

<story
  name="with knobs"
  group="MyButton"
  notes="### this is the coolest story ever"
  knobs="{
    initialText: {
      default: text('Initial Text', 'default value goes here')
    },
    isDisabled: {
      default: boolean('Is Disabled?', false)
    }
  }">
  <my-button :disabled="isDisabled" @click="action('show me the money', isDisabled)">{{initialText}}</my-button>
</story>

<script>
export default {
  name: 'my-button',
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
