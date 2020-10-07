<template>
  <div>
    <b-row >
      <b-col >
        <h5 style="font-weight: bold">
          {{ exp_title }}
        </h5>
        <h6>
          {{exp_role}}
        </h6>
        <h6>
          {{exp_role1}}
        </h6>
        <h6>
          {{exp_role2}}
        </h6>
        <h6>
          <fa icon="building"/>
          {{ exp_place }}
        </h6>
        <h6>
          <fa icon="calendar"/>
          {{exp_date}}
        </h6>
      </b-col>
    </b-row>
    <hr/>
  </div>

</template>

<script>
export default {
  name: "experiences-item",
  props:{
    exp_title:String,
    exp_role:String,
    exp_role1:String,
    exp_role2:String,
    exp_place:String,
    exp_date:String
  }
}
</script>

<style scoped>

</style>
