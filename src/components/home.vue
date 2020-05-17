<template>
   <div>
     <slider></slider>
     <list :list="list" :dataName="'home'"></list>
   </div>
</template>
<script>
  import slider from "./slider";
  import list from "./list";
  export default{
    data(){
       return {
          list:[]
       }
    },
    components:{slider,list},
    mounted(){
      this.axios({
        url:'/data/index.data'
      }).then(
        res=>this.list=res.data
      )
    }
  }
</script>