<template>
 <div>
   <span class="image avatar" style="margin-top: 1em">
          <img src="@/assets/images/profile.jpg">
        </span>
   <b-col class="justify-content-center text-center">
     <h3>
       Hamed Jafarzadeh
     </h3>
   </b-col>

   <b-col class="justify-content-center text-center">
     <h6 style="font-size: 14px">
       Computer and Electronics engineer
     </h6>
     <hr/>
   </b-col>

   <ul style="list-style: none; padding-left: 20px" class="">
     <li>
       <b-row class="nopadding">
         <b-col cols="1"  class="justify-content-center text-center nopadding" >
           <fa icon="birthday-cake" />
         </b-col>
         <b-col>
           Feb.1995 - 30 Years old
         </b-col>
       </b-row>
     </li>

     <li>
       <b-row class="nopadding">
         <b-col cols="1"  class="justify-content-center text-center nopadding" >
           <fa icon="map-marker-alt" />
         </b-col>
         <b-col>
           Cork, Ireland
         </b-col>
       </b-row>
     </li>
     <li>
       <b-row class="nopadding" >
         <b-col cols="1"  class="justify-content-center text-center nopadding">
           <fa icon="envelope" />
         </b-col>
         <b-col style="font-size: smaller">
           hjafarzadeh511 [at] gmail.com
         </b-col>
       </b-row>
     </li>
     <li>
       <b-row class="nopadding">
         <b-col cols="1" class="justify-content-center text-center nopadding">
           <fa icon="mobile-alt" />
         </b-col>
         <b-col>
           +353870628665
         </b-col>
       </b-row>
     </li>

     <li class="noPrint">
       <b-row class="nopadding" style="margin-left: -10px; margin-right: 10px; margin-top: 10px">
         <b-col>
           <a href="https://github.com/HamedJafarzadeh"><fa class="navicon"  :icon="['fab','github']"/></a>
         </b-col>
         <b-col>
           <a href="https://www.linkedin.com/in/hjafarzadeh/"><fa class="navicon" :icon="['fab','linkedin']"/></a>
         </b-col>
         <b-col>
           <a href="https://t.me/hamedjafarzadeh"><fa class="navicon" :icon="['fab','telegram']"/></a>
         </b-col>
         <b-col>
           <a href="https://twitter.com/HJafarzadeh511"><fa class="navicon" :icon="['fab','twitter']"/></a>
         </b-col>
         <b-col>
           <a href="https://www.instagram.com/hamedjafarzadeh/"><fa class="navicon" :icon="['fab','instagram']"/></a>
         </b-col>
       </b-row>
     </li>


     <li class="justPrint">
       <b-row class="nopadding">
         <b-col cols="1" class="justify-content-center text-center nopadding">
           <fa :icon="['fab','github']"/>
         </b-col>
         <b-col>
           <a href="https://github.com/HamedJafarzadeh"> github.com/HamedJafarzadeh </a>
         </b-col>
       </b-row>
     </li>

     <li class="justPrint">
       <b-row class="nopadding">
         <b-col cols="1" class="justify-content-center text-center nopadding">
           <fa  :icon="['fab','linkedin']"/>
         </b-col>
         <b-col>
           <a href="https://www.linkedin.com/in/hjafarzadeh/"> linkedin.com/in/hjafarzadeh/ </a>
         </b-col>
       </b-row>
     </li>

   </ul>
 </div>
</template>

<script>
export default {
name: "profile"
}
</script>

<style scoped>
.navicon{
  font-size: 20px;
}
</style>
