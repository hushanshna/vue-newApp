<template>
   <div class="follow">
      <list :list="list"  :dataName="'follow'"></list>
   </div>
</template>
<script>
   import list from "./list";
   export default{
     data(){
       return{
         list:[]
       }
     },
     components:{
       list
     },
     mounted(){
      this.$axios({
       url:'/data/follow.data'
      }).then(
        res=>this.list=res.data
      )
     }
   }
</script>