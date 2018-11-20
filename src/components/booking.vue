<template>
  <el-row type="flex" justify="center">
    <el-col :span="20">
      <el-row>
        <el-row style="padding: 10px;">
          <el-col :span="10">
            <el-row type="flex" align="middle" style="height: 60px;">
              <el-input placeholder="搜索" v-model="searchStr">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row type="flex" align="middle" style="height: 60px;">
              <el-select v-model="sortType" placeholder="排序方式" style="width: 130px;">
                <el-option label="默认排序" value="1"></el-option>
                <el-option label="价格从低到高" value="2"></el-option>
                <el-option label="价格从高到低" value="3"></el-option>
              </el-select>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row type="flex"  align="middle" style="height: 60px;padding-left: 10px;padding-right: 10px;">
              <el-checkbox v-model="chkShowMine">只显示我拥有的</el-checkbox>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-row>
            <el-col :span="this.$store.state.ismobile?12:6" style="padding: 10px;">
              <herocard></herocard>
            </el-col>
            <el-col :span="this.$store.state.ismobile?12:6" style="padding: 10px;">
              <herocard></herocard>
            </el-col>
            <el-col :span="this.$store.state.ismobile?12:6" style="padding: 10px;">
              <herocard></herocard>
            </el-col>
            <el-col :span="this.$store.state.ismobile?12:6" style="padding: 10px;">
              <herocard></herocard>
            </el-col>
            <el-col :span="this.$store.state.ismobile?12:6" style="padding: 10px;">
              <herocard></herocard>
            </el-col>
            <el-col :span="this.$store.state.ismobile?12:6" style="padding: 10px;">
              <herocard></herocard>
            </el-col>
            <el-col :span="this.$store.state.ismobile?12:6" style="padding: 10px;">
              <herocard></herocard>
            </el-col>
            <el-col :span="this.$store.state.ismobile?12:6" style="padding: 10px;">
              <herocard></herocard>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import herocard from '@/components/herocard';

    export default {
        name: "booking",
      components: {
        herocard,
      },
      data(){
        return{
          searchStr:'',
          sortType:'1',
          chkShowMine:false,

        }
      }
    }
</script>

<style scoped>

</style>
