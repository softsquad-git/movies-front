<template>
  <div>
    <div class="text-h6 q-mb-md">{{ $t('pages.account.settings.pages.form.change_email') }}</div>
    <q-form>
      <q-input
        type="text"
        class="mt-1"
        :label="$t('pages.account.settings.pages.form.new_email')"
        :hint="$t('pages.account.settings.pages.form.new_email_hint')"
        v-model="data.new_email">
      </q-input>
      <q-btn type="submit" class="mt-1" :label="$t('buttons.next')"/>
    </q-form>
  </div>
</template>

<script>
export default {
  name: "ChangeEmail",
  data() {
    return {
      data: {
        new_email: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
