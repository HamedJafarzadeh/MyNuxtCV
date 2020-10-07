<template>
  <div>
    <b-row >
      <b-col cols="10" >
        <h5 style="font-weight: bold">
          {{ ref_title }}
        </h5>
        <h6>
          {{ref_role}}
        </h6>
        <h6>
          {{ref_role1}}
        </h6>
        <h6>
          {{ref_role2}}
        </h6>
        <h6>
          <fa icon="envelope"/>
          {{ ref_email }}
        </h6>
      </b-col>
      <b-col cols="2">
        <slot name="refimg"/>
      </b-col>
    </b-row>
    <hr/>
  </div>

</template>

<script>
export default {
  name: "ref-item",
  props:{
    ref_title:String,
    ref_role:String,
    ref_role1:String,
    ref_role2:String,
    ref_email:String,
    ref_img:String
  }
}
</script>

<style scoped>

</style>
