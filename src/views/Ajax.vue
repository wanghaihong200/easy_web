<template lang="html">
  <div>
    <p>后端通信结果：{{ping}}</p>
    <button @click="getpings">测试</button>
  </div>
</template>

<script>
import axios from 'axios'
import { getPing } from '@/api/login'

export default {
  name: 'Ajax',
  data () {
    return {
      res: '',
      name: '',
      ping: ''
    }
  },
  methods: {
    getpings () {
      // axios.get('/data.json').then(res => {
      //   this.res_ycku = res.data
      // })
      getPing().then(res => {
        this.ping = res.data
      })
      console.log(process.env)
    }
  }
}
</script>

<style lang="css" scoped>

</style>
