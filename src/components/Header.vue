<template lang="html">
  <div>
    <el-row>
      <el-col :span="12" class="header-left">
        <span>{{ title }}</span>
      </el-col>
      <el-col :span="12" >
        <div class="header-right">
          <el-dropdown size="medium">
            <i class="el-icon-setting" style="margin: 34px 0 0;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>
                <div @click="loginOut">登出</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span style="margin:9px 8px 0">{{ username }}</span>

          <el-avatar shape="square" :size="50" :src="iconUrl" style="margin: 0; padding: 0"></el-avatar>

        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import {logout} from '@/api/login'

export default {
  name: 'Header',
  data () {
    return {
      title: 'EasyTestPlatform',
      iconUrl: require('@/assets/tusiji.jpeg'),
      sizeList: ['large', 'medium', 'small']
    }
  },
  computed: {
    ...mapState({
      username: state => state.user
    })
  },
  methods: {
    loginOut() {
      logout().then(res=>{
        this.$router.push({name: 'Login'})
        this.$store.commit('isLogin', false)
        this.$store.commit('setToken', '')
        this.$message({
          type: 'success',
          message: res.data.msg,
          duration: 2000,
          showClose: true,
          center: true
        })
      })
    }
  }
}
</script>

<style lang="css" scoped>
.el-header {
  background-color: #FFFFFF;
  color: #333;
  justify-content: space-between
}

.header-right {
  float: right;
  height: 100%;
  font-size: 18px;
  display: inline-flex;
}

.header-left {
  float: left;
  height: 100%;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

</style>
