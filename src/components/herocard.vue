<template>
    <el-row style="margin-top: 5px;">
      <el-row class="card-border">
        <img :class="buttonimgclass" src="../assets/001-caocao.jpg" @click="OnCardButtonClick" @mouseover="OnCardButtonOver" @mouseout="OnCardButtonOut"/>
        <div style="position: absolute;top: 0px;left: 0px;width: 100%;height: 40px;">
          <el-row type="flex" justify="center" align="middle" style="width: 100%;height: 100%;">
            <div class="card-title light-white">{{ name }}</div>
          </el-row>
        </div>
        <div style="position: absolute;bottom: 0px;left: 0px;width: 100%;height: 30px;background: #00000080;" @mouseover="OnCardButtonOver" @mouseout="OnCardButtonOut">
          <el-row type="flex" justify="center" align="middle" style="width: 100%;height: 100%;" @mouseover="OnCardButtonOver" @mouseout="OnCardButtonOut">
            <div style="text-align: center;color: wheat">{{ user }}</div>
          </el-row>
        </div>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 10px;">
        <el-col :span="18">
          <el-row>
            <img :class="buttonimgclass" :src="button2_bg" />
            <div style="position: absolute;top: 0px;left: 0px;width: 100%;height: 90%;cursor: pointer;" @click="OnCardButtonClick" @mouseover="OnCardButtonOver" @mouseout="OnCardButtonOut">
              <el-row type="flex" justify="center" align="middle" style="width: 100%;height: 100%;" @mouseover="OnCardButtonOver" @mouseout="OnCardButtonOut">
                <div style="text-align: center;color: whitesmoke">{{ price }}</div>
              </el-row>
            </div>
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
          buttonimgclass:'card-button-out img',
          button2_bg: require("../assets/button2.png"),
          name:'曹操',
          user:'koibetwallet',
          price:'1.500 EOS',
        }
      },
      methods: {
        OnCardButtonOver(){
          this.buttonimgclass='card-button-hover img';
        },
        OnCardButtonOut(){
          this.buttonimgclass='card-button-out img';
        },
        OnCardButtonClick(){
          alert('aaa');
        }
      }
    }
</script>

<style scoped>
  .img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  .card-title {
    color: wheat;
    font-size: 1.4em;
  }
  .card-button{
    height: auto;
    margin-top: 10px;

  }
  .card-border {
    cursor: pointer;
    border-style: solid;
    border-color: wheat;
    border-width: 2px;
  }
  .card-button-hover{
    filter: brightness(1.2);
  }
  .card-button-out{
    filter: brightness(1.0);
  }
  .light-white {
    text-shadow: rgb(43, 0, 43) 1px 1px 5px, rgb(204, 204, 204) 1px 1px 10px, rgb(204, 204, 204) 1px 1px 10px;
    color: #fff3e0;
  }
</style>
