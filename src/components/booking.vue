<template>
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
</template>

<script>
  import herocard from '@/components/herocard';

    export default {
        name: "booking",
      components: {
        herocard,
      },
    }
</script>

<style scoped>

</style>
