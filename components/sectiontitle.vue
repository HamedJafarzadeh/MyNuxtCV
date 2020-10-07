<template>
  <div>
    <b-row class="justify-content-center abitpadding" style="background-color: #a9baca; border-radius: 10px">
<!--      <b-col style="-ms-flex: 0 0 10px;flex: 0 0 10px;">-->
        <div style="margin-left: 5px">
        <h3>
          <slot name="icon"/>
        </h3>
        </div>
<!--      </b-col>-->
      <b-col style="">
        <h3>
          <slot name="title"></slot>
        </h3>
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
