<template>
  <div class="admin-page">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5">
        <div class="__info__stat">
          <div class="row">
            <div class="col-lg-3">
              <span class="__icon">
                <q-icon name="movie"/>
              </span>
            </div>
            <div class="col-lg-9">
              <h2>12</h2>
              <span>{{ $t('nav.account.movies') }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5">
        <div class="__info__stat">
          <div class="row">
            <div class="col-lg-3">
              <div class="__icon">
                <q-icon name="photo"/>
              </div>
            </div>
            <div class="col-lg-9">
              <h2>12</h2>
              <span>{{ $t('nav.account.photos') }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5">
        <div class="__info__stat">
          <div class="row">
            <div class="col-lg-3">
              <span class="__icon">
                <q-icon name="description"/>
              </span>
            </div>
            <div class="col-lg-9">
              <h2>12</h2>
              <span>{{ $t('nav.account.stories') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5">
        <payments/>
      </div>
    </div>
  </div>
</template>

<script>
import Payments from "pages/account/partials/Payments";
export default {
  name: "Index",
  components: {Payments},
  data() {
    return {
      data: {
        //
      }
    }
  }
}
</script>

<style scoped>

</style>
