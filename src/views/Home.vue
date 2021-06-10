<template lang="html">
  <div>
    <el-container class="main-view">
      <el-aside width="200px">
        <Sidebar></Sidebar>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main class="container-view">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Home',
  components: {
    Header,
    Sidebar
  },
  watch: {
    // $route (to, from) {
    //   console.log(to, from)
    // }
  },
  created () {
    // console.log(process.env.BASE_URL)
  }
}
</script>

<style lang="css" scoped>
.main-view {
  align-items: stretch;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.el-aside {
  height: 100%;
  color: #333;
}

.el-main {
  background-color: #FFF;
  position: relative;
}

.el-header {
  color: #333;
  line-height: 60px;
  border-bottom: 2px solid #DCDFE6;
}
</style>
