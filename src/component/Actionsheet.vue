<template>
  <div id="messagebox">
    <h1>Action Sheet</h1>
    <mt-button @click.native="sheetVisible = true" size="large">点击上拉</mt-button>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
<script>
import { Actionsheet } from 'mint-ui'
export default {
  data () {
    return {
        sheetVisible:false,
        sheetVisible2:false,
        actions:[],
        actions2:[]
    }
  },
  methods: {
     takePhoto(){
        console.log('taking photo');
     },
     openAlbum(){
        console.log('opening album');
     },
     goBack(){
        history.go(-1);
     }
  },

  mounted() {
     this.actions = [{
        name:'拍照',
        method:this.takePhoto
     },{
        name:'从相册中选择',
        method:this.openAlbum
     }];
     this.actions2 = [{
        name:'确定'
     },{
        name:'返回上一步',
        method:this.goBack
     }];
  }
}
</script>
