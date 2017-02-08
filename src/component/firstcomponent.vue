<template>
  <div id="firstcomponent">
    <h1>I am a title.</h1>
    <a> written by {{ author }} </a>
    <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      author: "微信公众号 jinkey-love"
    }
  },
  methods: {
     handleClick: function() {
         this.$toast('Hello world!')
     }
  }
}
</script>

<style>
</style>
