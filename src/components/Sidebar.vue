<template lang="html">
  <el-aside width="200px" style="background-color: #545c64">
    <div class="block">
      <el-image :src="image_url"></el-image>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-submenu v-for="item of side_sub_menu" :key="item.index" :index="item.index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span class="nav">{{ item.name }}</span>
        </template>
        <el-menu-item v-for="menu_item of item.menu_item" :key="menu_item.url" :index="menu_item.url">
          {{menu_item.menu_name}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      image_url: require('@/assets/rabbit.jpeg'),
      side_sub_menu: [
        {
          name: 'Just Run',
          index: '1',
          menu_item: [
            {
              menu_name: '首页',
              url: 'Home'
            },
            {
              menu_name: 'Ajax',
              url: 'Ajax'
            }
          ]
        },
        {
          name: '测试环境',
          index: '2'
        },
        {
          name: '质量保障',
          index: '3'
        },
        {
          name: '接口测试',
          index: '4'
        },
        {
          name: 'UI测试',
          index: '5'
        },
        {
          name: '性能测试',
          index: '6'
        },
        {
          name: '设备管理',
          index: '7'
        }
      ]
    }
  },
  methods: {
    handleSelect (url) {
      this.$router.push({name: url})
      console.log(name, url)
    }
  }

}
</script>

<style lang="css" scoped>
.nav {
  font-size: 20px;
}
</style>
