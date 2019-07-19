<template>

  <div  class="Page">
    <nav>
      <h1>{{title}}</h1>
    </nav> 

    <section>
      <div :class="'show ' + classFont"> 
        <vue-arc-text ref="arctext" :text=text :arc=+arc :direction=direction :className="classFont"></vue-arc-text>
      </div>

      <div class="content">
        <div class="content-row">
          <div class="form-group">
            <label>Text</label> 
            <input v-model=text  type="text" >
          </div>
          <div class="form-group">
            <label>Arc</label>
            <input v-model=arc type="number">
          </div>
        </div>
        <div class="content-row">
          <div class="form-group">
            <label>Text</label>
            <select class="custom-select"  v-model=classFont @change="changeFont">
              <option value="" disabled>Choose your font-family</option>
              <option v-for="option in classes" :key="option.value" :value="option.value">{{ option.name }}</option>
            </select>
          </div>
          <div class="form-group" >
            <label>Text</label>
              <select class="custom-select" v-model=direction>
              <option value="" disabled>Choose the direction</option>
              <option v-for="option in directions" :key="option.value" :value="option.value">{{ option.name }}</option>
            </select> 
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueArcText from './Vue-arc-text.vue'

export default {
  components: { VueArcText },
  name: 'app',
  data () {
    return {
      title: 'Vue-arc-text',
      text: '',
      classFont: '',
      direction: 1,
      arc: 150,
      classes : [
        { name: 'Roboto', value: 'Roboto' },
        { name: 'Roboto Mono', value: 'Roboto-mono' },
        { name: 'Montserrat', value: 'Montserrat' },
        { name: 'Mountains of Christmas', value: 'Mountains' }
      ],
      directions: [
        { name: 'clockwise', value: 1 },
        { name: 'counter-clockwise', value: -1 }
      ]
    }
  },
  methods: {
    changeFont() {
      const arcText = this.$refs['arctext'];
      setTimeout(() => arcText.update(),2)
    }
  }
}
</script>

<style lang="scss">
@import 'variables';
@import 'flexbox';

html,
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $background;
  height: 100%;
  width: 100%;
  margin: 0;
  // @include flex-content(row, flex-start, flex-start);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

a {
  color: #42b983;
}

.Page {
  height: 100%;
  width: 100%;

  .show{
    width: 100%;
    height: 25%;
    @include flex-content(row, center, center);
  }

  nav {

    padding: 0.1rem 1rem;
    background-color: black;
    color: $primary;
  }

  section {
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;
  }

  .content{
    &-row {
      @include flex-content(row, center, space-around);
      padding: 1rem;
    }
    .form-group{
      width: 40%;
      font-size: 1rem;
      @include flex-content(column, flex-start, center);
      label{
        margin-bottom: 0.5em;
      }
      select,
      input {
        width: 100%;
        height: 25px;
        font-size: 0.8em;
      }
    }
  }

  .show {
    &.Roboto {
      font-family: 'Roboto', sans-serif;
      &-mono {
        font-family: 'Roboto Mono', monospace;
      }
    }
    &.Montserrat {
      font-family: 'Montserrat', sans-serif;
    }
    &.Mountains {
      font-family: 'Mountains of Christmas', cursive;
    }
  }

}

</style>
