<template>
   <div id="app">
     <navbar v-show="bNav"></navbar>
     <router-view></router-view>
     <footbar v-show="bFoot"></footbar>
   </div> 
</template>

<script>
  import navbar from "./components/header";
  import * as types from "./store/types"
  import footbar from "./components/footer";
  import {mapGetters} from 'vuex';
  export default{
    components: {navbar,footbar},
    watch:{
       $route:{
          handler(){
            let path=this.$route.path;
            if(/home|follow|column/.test(path)){
              this.$store.dispatch(types.VIEW_NAV,true);
              this.$store.dispatch(types.VIEW_FOOT,true);
            }
            if(/login|reg|detail/.test(path)){
              this.$store.dispatch(types.VIEW_NAV,false);
              this.$store.dispatch(types.VIEW_FOOT,false);
            }
           if(/user/.test(path)){
              this.$store.dispatch(types.VIEW_NAV,false);
              this.$store.dispatch(types.VIEW_FOOT,true);
            }
          },
          immediate:true
       }
    },
    computed:mapGetters([
     'bNav','bFoot','bLoading'
    ])
  }
</script>

<style>

</style>
