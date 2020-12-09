<template>
  <div class="admin-page">
    <div class="header">
      <div class="row">
        <div class="col-9">
          <h3>{{ title }}</h3>
        </div>
      </div>
    </div>
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab @click="redirect('basic')"
                 name="basic"
                 icon="account_box"
                 :label="$t('pages.account.settings.pages.basic')"
          />
          <q-tab @click="redirect('security')"
                 name="security"
                 icon="local_police"
                 :label="$t('pages.account.settings.pages.security')"
          />
          <q-tab @click="redirect('avatar')"
                 name="avatar"
                 icon="face"
                 :label="$t('pages.account.settings.pages.avatar')"
          />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="$route.params.type"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="basic">
            <div class="text-h6 q-mb-md">{{ $t('pages.account.settings.pages.basic') }}</div>
            <basic-data/>
          </q-tab-panel>

          <q-tab-panel name="security">
            <div class="text-h6 q-mb-md">{{ $t('pages.account.settings.pages.security') }}</div>

          </q-tab-panel>

          <q-tab-panel name="avatar">
            <div class="text-h6 q-mb-md">{{ $t('pages.account.settings.pages.avatar') }}</div>
            <avatar/>

          </q-tab-panel>

        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>

<script>
import BasicData from "pages/account/settings/partials/BasicData";
import Avatar from "pages/account/settings/partials/Avatar";

export default {
  name: "Index",
  components: {Avatar, BasicData},
  data() {
    return {
      tab: 'mails',
      splitterModel: 20,
      title: this.$t('pages.account.settings.title')
    }
  },
  methods: {
    redirect(type) {
      this.$router.push({name: 'Setting', params: {type: type}})
    }
  },
  created() {
    document.title = this.title;
  }
}
</script>

<style scoped>

</style>
