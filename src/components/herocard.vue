<template>
    <el-row style="">
      <el-row :class="rowclass">
        <img class="img" src="../assets/001-caocao.jpg" @mouseover="OnCardOver" @mouseout="OnCardOut"/>
        <div style="position: absolute;top: 0px;left: 0px;width: 100%;height: 40px;">
          <el-row type="flex" justify="center" align="middle" style="width: 100%;height: 100%;">
            <div class="card-title light-white">{{ name }}</div>
          </el-row>
        </div>

        <div style="position: absolute;bottom: 0px;left: 0px;width: 100%;height: 30px;background: #00000080;">
          <el-row type="flex" justify="center" align="middle" style="width: 100%;height: 100%;">
            <div style="text-align: center;color: wheat">{{ user }}</div>
          </el-row>
        </div>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="18">
          <el-row>
            <el-row type="flex" justify="center" align="middle">
              <el-row class="card-button" >
                <img class="img" :src="button2_bg"/>
                <div style="position: absolute;top: 0px;left: 0px;width: 100%;height: 90%;">
                  <el-row type="flex" justify="center" align="middle" style="width: 100%;height: 100%;">
                    <div style="text-align: center;color: whitesmoke">{{ price }}</div>
                  </el-row>
                </div>
              </el-row>
            </el-row>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "herocard",
      data() {
        return{
          rowclass:"card-shadow",
          button2_bg: require("../assets/button2.png"),
          name:'曹操',
          user:'koibetwallet',
          price:'1.500 EOS',
        }
      },
      methods: {
        OnCardOver(){
          this.rowclass='card-shadow-2';
        },
        OnCardOut(){
          this.rowclass='card-shadow';
        }
      }
    }
</script>

<style scoped>

  .card-button{
    /*width: 180px;*/
    height: auto;
    margin-top: 10px;
    cursor: pointer;
  }
  .img {
    width: 100%;
    height: auto;
  }

  .card-shadow {
    box-shadow:1px 1px 1px 1px #111111;
    cursor: pointer;
    border-style: solid;
    border-color: wheat;
    border-width: 2px;
  }

  .card-shadow-2 {
    box-shadow:1px 1px 4px 3px #000000;
    cursor: pointer;
    border-style: solid;
    border-color: wheat;
    border-width: 2px;
  }

  .card-title {
    color: wheat;
    font-size: 1.4em;
  }
  .light-white {
    text-shadow: rgb(43, 0, 43) 1px 1px 5px, rgb(204, 204, 204) 1px 1px 10px, rgb(204, 204, 204) 1px 1px 10px;
    color: #fff3e0;
  }
</style>
