<template>
  <div>
    <b-row >
      <b-col cols="10" >
        <h6 style="font-weight: bold; display: inline">
          <fa icon="angle-right"/>
          {{ proj_title }}
        </h6>
        | {{proj_role}}
      </b-col>

      <b-col cols="2">
          <fa icon="calendar"/>
          {{proj_date}}
      </b-col>
      <hr/>
    </b-row>
    <hr/>
  </div>

</template>

<script>
export default {
  name: "project-item",
  props:{
    proj_title:String,
    proj_role:String,
    proj_date:String
  }
}
</script>

<style scoped>

</style>
