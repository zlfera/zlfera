<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="profile.token">
          <li>
            <a href="javascript:;"
              ><i class="iconfont icon-user"></i>{{ profile.account }}</a
            >
          </li>
          <li><a href="javascript:;">退出登录</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;">请先登录</a></li>
          <li><a href="javascript:;">请先注册</a></li>
        </template>
        <li><a href="javascript::">我的订单</a></li>
        <li><a href="javaScript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li></li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { useStore } from "@/store";

const store = useStore();
const profile = store.state.user.profile;
</script>

<style lang="less" scoped>
.app-topnav {
  background: #333;
}
ul {
  display: flex;
  height: 53px;
  justify-content: flex-end;
  align-items: center;
  li {
    a {
      padding: 0 15px;
      color: #cdcdcd;
      line-height: 1;
      display: inline-block;
      i {
        font-size: 14px;
        margin-right: 2px;
      }
      &:hover {
        color: @xtxColor;
      }
    }
    ~ li {
      a {
        border-left: 2px solid #666;
      }
    }
  }
}
</style>
