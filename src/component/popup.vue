<template>
    <div id="popup">
    <mt-button @click.native="popupVisible1 = true " size ="large">中部弹出</mt-button>
    <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1" :style="{ top: buttonBottom + 10 + 'px' }">
       <h1>popup</h1>
       <p>/ ˈpɑpˌʌp /</p>
       <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
       <p>adj. 弹起的; 有自动起跳装置的</p>
    </mt-popup>
    </div>
</template>
<script>
  import { Popup } from 'mint-ui'
  export default {
    data () {
      return {
          popupVisible1:false,
          buttonBottom:0,
          dateSlots: [
            {
              flex: 1,
              values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
              className: 'slot1',
              textAlign: 'right'
            }, {
              divider: true,
              content: '-',
              className: 'slot2'
            }, {
              flex: 1,
              values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
              className: 'slot3',
              textAlign: 'left'
            }
          ]
      }
    },
    methods: {
       onDateChange(picker,values){
          if(values[0] > value[1]){
             picker.setSlotValue(1,values[0]);
          }
          this.dateStart = values[0];
          this.dateEnd = values[1];
       }
    }
  }
</script>
