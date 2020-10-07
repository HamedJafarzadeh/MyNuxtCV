<template>
  <div>
    <b-row >
      <b-col cols="10" >
        <h6 style="font-weight: bold">
          <fa icon="angle-right" />
          <span v-bind:style="patent_title_style">{{ patent_title }}</span>
        </h6>
        {{patent_role}}
      </b-col>

      <b-col cols="2">
          <fa icon="calendar"/>
          {{patent_date}}
      </b-col>
      <hr/>
    </b-row>
    <hr/>
  </div>

</template>

<script>
export default {
  name: "patent-item",
  props:{
    patent_title:String,
    patent_title_style:String,
    patent_role:String,
    patent_date:String
  }
}
</script>

<style scoped>

</style>
