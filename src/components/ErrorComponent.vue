<template>
  <q-dialog v-model="isShow" position="right">
    <q-card style="width: 350px">
      <q-card-section class="row items-center no-wrap">
        <div class="row" v-if="errors">
          <ul class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 errorsLIST" v-for="(v, k) in errors" :key="k">
            <li v-for="error in v" :key="error">
              {{ error }}
            </li>
          </ul>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "ErrorComponent",
  data() {
    return {
      isShow: false
    }
  },
  props: {
    errors: []
  },
  methods: {
    openModal() {
      this.isShow = true;
    }
  }
}
</script>

<style scoped>

</style>
