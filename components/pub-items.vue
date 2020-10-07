<template>
  <div>
    <b-row >
      <b-col cols="10" >
        <h6 style="font-weight: bold">
          <fa icon="angle-right" />
          <span v-bind:style="pub_title_style">{{ pub_title }}</span>
        </h6>
        {{pub_subtitle}}
      </b-col>

      <b-col cols="2">
          <fa icon="calendar"/>
          {{pub_date}}
      </b-col>
      <hr/>
    </b-row>
    <hr/>
  </div>

</template>

<script>
export default {
  name: "pub-item",
  props:{
    pub_title:String,
    pub_title_style:String,
    pub_subtitle:String,
    pub_date:String
  }
}
</script>

<style scoped>

</style>
