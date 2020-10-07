<template>
  <div>
    <b-row v-on:click="showDesc=!showDesc"  id="titleCol">
      <b-col cols="10" >
        <h6 style="font-weight: bold; display: inline" >
          <fa icon="angle-right"/>
          {{ proj_title }}
        </h6>
        | {{ proj_role }}
      </b-col>

      <b-col cols="2">
        <fa icon="calendar"/>
        {{ proj_date }}
      </b-col>
      <hr/>
    </b-row>
    <transition  name="fade">
      <div v-if="showDesc" class="ProjContent">
        <slot/>
      </div>
    </transition>
    <hr/>
  </div>

</template>

<script>
export default {
  name: "project-item",
  props: {
    proj_title: String,
    proj_role: String,
    proj_date: String
  },
  methods:{

  },
  data() {
    return {
      showDesc: false
    }
  }
}
</script>

<style scoped>

.ProjContent{
  padding: 0.5em 1em;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#titleCol{
  transition: color 0.1s;
}
#titleCol:hover{
  color: #559953;
  cursor: pointer;
}

</style>
