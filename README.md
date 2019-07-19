# vue-arc-text

> Wrapper Library of [arc-text](https://github.com/kappys1/arc-text) to curve any text font on the web directly with Vue.


[![NPM](https://img.shields.io/npm/v/vue-arc-text.svg)](https://www.npmjs.com/package/vue-arc-text)
![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)
[![Build Status](https://travis-ci.org/kappys1/vue-arc-text.svg?branch=master)](https://travis-ci.org/kappys1/vue-arc-text)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Install

```bash
npm install --save vue-arc-text
```

## Examples

[Here](https://kappys1.github.io/vue-arc-text/)

## Usage

```html
<template>
  <vue-arc-text ref="arctext" :text=text :arc=+arc :direction=direction :className="classFont"></vue-arc-text>
</template>
```

```jsx

<script>
  import VueArcText from './Vue-arc-text.vue'
  export default {
    components: { VueArcText },
    data () {
    return {
        text: '',
        direction: 1,
        arc: 150
      }
    },
  }
</script>
```

## Params
| Parameter | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| text | string |  | Text you want to curve |
| arc | number | 150 | Angle you want to curve |
| direction | number | 1 | 1 is clockwise mode and -1 is counter-clockwise mode |
| class | string |  | to add class into Component |

## Function
You can access to update function to force the update of component.

for example:

```jsx
  const arcText = this.$refs['arctext']; //get the element by reference. the reference name is referenced by refs in the tag element.
  arcText.update() // now you can force the update.
```

## Author
Alex Marcos Gutierrez

## License
MIT © [alex marcos &lt;alexsbd1@gmail.com&gt;](https://github.com/alex marcos &lt;alexsbd1@gmail.com&gt;)
