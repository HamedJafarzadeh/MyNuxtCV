<template>
  <div>
    <b-row >
      <b-col cols="10" >
        <h6 style="font-weight: bold; display: inline">
          <fa icon="angle-right"/>
          {{ honor_title }}
        </h6>
        | {{honor_role}}
      </b-col>

      <b-col cols="2">
          <fa icon="calendar"/>
          {{honor_date}}
      </b-col>
      <hr/>
    </b-row>
    <hr/>
  </div>

</template>

<script>
export default {
  name: "honor-item",
  props:{
    honor_title:String,
    honor_role:String,
    honor_date:String
  }
}
</script>

<style scoped>

</style>
