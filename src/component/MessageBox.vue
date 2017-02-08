<template>
  <div id="messagebox">
    <h1>MessageBox</h1>
    <mt-button @click.native="handleC">弹出信息</mt-button>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      author: "微信公众号 jinkey-love"
    }
  },
  methods: {
     handleC: function() {
         MessageBox.alert('操作成功!', '提示');
     }
  }
}
</script>
