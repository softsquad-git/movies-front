<template>
  <div class="admin-page">
    <div class="header">
      <div class="row">
        <div class="col-9">
          <h3>{{ title }}</h3>
        </div>
        <div class="col-3">
          <q-btn :to="{name: 'AccountStories'}" round outline color="negative" class="float-right" icon="close">
            <q-tooltip>
              {{ $t('tooltips.cancel') }}
            </q-tooltip>
          </q-btn>
          <q-btn @click="save" v-if="action !== 'show'" round outline color="positive" class="float-right mr-1"
                 icon="save">
            <q-tooltip>
              {{ $t('tooltips.save') }}
            </q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>
    <component :is="currentComponent" ref="childComponent"/>
  </div>
</template>

<script>
import Create from "pages/account/stories/partials/Create";
import Edit from "pages/account/stories/partials/Edit";
import Find from "pages/account/stories/partials/Find";

export default {
  name: "Item",
  components: {
    Find: () => import('pages/account/stories/partials/Find'),
    Edit: () => import('pages/account/stories/partials/Edit'),
    Create: () => import('pages/account/stories/partials/Create')
  },
  data() {
    return {
      title: '',
      action: '',
      currentComponent: ''
    }
  },
  methods: {
    save() {
      this.$refs.childComponent.save();
    }
  },
  created() {
    let action = this.$route.params.action;
    this.action = action;
    if (action === 'create') {
      this.title = this.$t('pages.account.create')
      this.currentComponent = Create;
    } else if (action === 'edit') {
      this.title = this.$t('pages.account.edit')
      this.currentComponent = Edit;
    } else if (action === 'show') {
      this.title = this.$t('pages.account.show')
      this.currentComponent = Find;
    }
    document.title = this.title;
  }
}
</script>

<style scoped>

</style>
