<template>
  <div>
    <b-row class="justify-content-center abitpadding" style="background-color: #a9baca; border-radius: 10px">
<!--      <b-col style="-ms-flex: 0 0 10px;flex: 0 0 10px;">-->
        <div style="margin-left: 5px;  margin-bottom: 0;">
        <h4 style="margin-bottom: 0;">
          <slot name="icon"/>
        </h4>
        </div>
<!--      </b-col>-->
      <b-col style="margin-bottom: 0;">
        <h4 style="margin-bottom: 0;">
          <slot name="title"></slot>
        </h4>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "sectiontitle",
  props: {}
}
</script>

<style scoped>

</style>
