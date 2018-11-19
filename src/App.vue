<template>
  <el-row>
    <el-row>
      <mu-appbar style="width: 100%;" color="black">


        <mu-menu slot="right">
          <mu-button flat to="/">预定</mu-button>
        </mu-menu>
        <mu-menu slot="right">
          <mu-button flat to="rules">规则</mu-button>
        </mu-menu>
        <mu-menu slot="right" :open.sync="isMenuUserOpen" v-show="isMenuUserShow">
          <mu-button style="text-transform:none;" flat ripple color="primary">
            {{ loginUser }}
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button v-show="isBtnLogoutShow" @click="btnLogout">
              <mu-list-item-title>{{$t('mainmenu.logout')}}</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-menu>
        <mu-menu slot="right" :open.sync="isMenuLoginOpen" v-show="isMenuLoginShow">
          <mu-button style="text-transform:none;" @click="btnLogin" flat ripple color="primary">
            {{$t('mainmenu.login')}}
          </mu-button>
        </mu-menu>
      </mu-appbar>
    </el-row>
    <el-row>
      <router-view/>
    </el-row>
  </el-row>
</template>

<script>
  import eossdkutil from 'eos-sdk-util';
  import timeout from 'timeout';
  import copy from 'clipboard-copy';

export default {
  name: 'App',
  data() {
    return {
      clientWidth: 1080,
      clientHeight: 1920,
      ismobile: false,
      isclientmobile:false,
      isMenuLangOpen:false,
      isMenuLoginShow: true,
      isBtnLogoutShow: false,
      isMenuUserShow: false,
      isMenuUserOpen: false,
      isMenuLoginOpen: false,
      menuIndex:0,
      loginUser: "",
      scatterTestNetwork: {
        blockchain: 'eos',
        host: 'api-kylin.eosasia.one',
        hostTable: 'api-kylin.eosasia.one',
        port: 80,
        protocol: 'http',
        chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
      },
      scatterMainNetwork: {
        blockchain: 'eos',
        host: 'node.betdice.one',
        hostTable: 'api.eoslaomao.com',
        port: 443,
        protocol: 'https',
        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
      },
      scatterMainBackup: [
        "api.bitmars.one",
        'api.eosbeijing.one',
        // 'node1.zbeos.com',
        'api.eoslaomao.com',
        'node.betdice.one',
        'api1.eosasia.one',
        'node.betdice.one',
        'nodes.eos42.io',
      ]
    }
  },
  created() {
    this.checkClient();
    this.changeLang(this.$store.state.lang);
    this.changeSelectMenu();
  },
  mounted() {
    const that = this;
    this.initEosEnv();
    timeout.timeout(2500, function () {
      that.btnLogin();
    });

    timeout.timeout(5000, function () {
      //TODO eos-sdk-util优化
      var inx = Math.floor(Math.random()*(that.scatterMainBackup.length));
      if(inx<that.scatterMainBackup.length){
        if(that.scatterMainBackup[inx]){
          that.scatterMainNetwork.hostTable=that.scatterMainBackup[inx];
          var eossdkutil=window.eossdkutil;
          if(eossdkutil){
            eossdkutil.setScatterNetworkCustom(that.scatterMainNetwork);
            // eossdkutil.refreshScatterConfig();
            console.log(that.scatterMainNetwork.hostTable+","+that.scatterMainBackup[inx]);
            // console.log();
          }
        }
      }
      return true;
    });

    that.clientWidth = document.documentElement.clientWidth;
    that.clientHeight = document.documentElement.clientHeight;
    window.onresize = () => {
      return (() => {
        that.clientWidth = document.documentElement.clientWidth;
        that.clientHeight = document.documentElement.clientHeight;
      })()
    };

  },
  methods: {
    initEosEnv() {
      var that = this;
      if (eossdkutil) {
        window.eossdkutil = eossdkutil;
        eossdkutil.setScatterNetworkCustom(that.scatterMainNetwork);
        // eossdkutil.setScatterNetworkMain();
        eossdkutil.init().then(function () {
          var env = eossdkutil.getEnv();
          if (env == "tp") {
          } else if (env == "scatter") {
            that.initScatterName();
          } else {
          }
        });
      }
    },
    checkClient() {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        this.isclientmobile = true;
      } else {
        this.isclientmobile = false;
      }
      this.$store.commit('changeIsMobile', this.ismobile||this.isclientmobile);
    },
    btnLogin() {
      var that = this;
      eossdkutil.login().then(function (identity) {
        that.initScatterName();
      });
    },
    btnLogout() {
      var that = this;
      eossdkutil.logout();
      this.loginUser = "";
      this.isMenuUserOpen=false;
      this.isBtnLogoutShow = false;
      this.isMenuLoginShow = true;
      this.isMenuUserShow = false;
      this.$store.commit('setEosUserName', that.loginUser);
    },
    changeLang(lang){
      this.$i18n.locale = lang;
      this.$store.commit('changeLang', lang);
      this.isMenuLangOpen = false;
    },
    onClientSizeChange(width, height) {
      if (width > height) {
        this.ismobile = false;
      } else {
        this.ismobile = true;
      }
      this.$store.commit('changeIsMobile', this.ismobile||this.isclientmobile);
    },
    initScatterName() {
      var identity = eossdkutil.getScatterIdentity();
      var that = this;
      if (identity) {
        var account = identity.accounts.find(account => account.blockchain === 'eos');
        that.loginUser = account.name;
        that.isBtnLogoutShow = true;
        that.isMenuLoginShow = false;
        that.isMenuUserShow = true;
        that.$store.commit('setEosUserName', that.loginUser);
      } else {
      }
    },
    changeSelectMenu(){
      // if(this.$route.path=='/jielong'){
      //   this.menuIndex=0;
      // }else if(this.$route.path=='/jiegold'){
      //   this.menuIndex=1;
      // }else if(this.$route.path=='/invest'){
      //   this.menuIndex=2;
      // }else if(this.$route.path=='/'){
      //   this.menuIndex=0;
      // }
    }
  },
  watch: {
    clientWidth: function (val) {
      this.onClientSizeChange(val, this.clientHeight);
    },
    clientHeight: function (val) {
      this.onClientSizeChange(this.clientWidth, val);
    },
    $route(to, from) {
      this.changeSelectMenu();
    }
  }
}
</script>

<style>

</style>
