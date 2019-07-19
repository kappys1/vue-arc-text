
<template></template>
<script>
import ArcText from 'arc-text';

export default {
  name: 'vue-arc-text',
  props: {
    direction: {
      type: Number,
      required: false,
      default () {
       return 1
      }
    },
    arc: {
      type: Number,
      required: false,
      default () {
       return 150
      }
    },
    text: {
      type: String,
      required: true,
      default () {
       return ''
      }
    },
  },
  data(){
    return {
      textCyrcle: null,
    }
  },
  watch: { 
    text: function (newVal, oldVal) {
       this.update()
    },
    arc: function (newVal, oldVal) {
     this.update()
    },
    direction: function (newVal, oldVal) {
      this.direction = parseInt(newVal);
      this.update()
    },
    
  },
  methods: {
    update(){
      const container = this.$el;
      if (this.textCyrcle) {
        this.textCyrcle.destroy()
      }
      this.$el.innerHTML = this.text
      this.textCyrcle = new ArcText(this.$el)
      this.textCyrcle.arc(this.arc)
      this.textCyrcle.direction(this.direction)
    }
    
  },
  mounted() {
    this.update();
  }

}
</script>
