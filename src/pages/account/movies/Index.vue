<template>
  <div class="q-table__container q-table--horizontal-separator column no-wrap q-table--no-wrap">
    <div class="q-table__top relative-position row items-center">
      <div class="q-table__control">
        <div class="q-table__title">{{ title }}</div>
      </div>
    </div>
    <div v-if="data.data.length > 0" class="q-table__middle">
      <table class="q-table">
        <thead>
        <tr>
          <td class="text-left bg-grey-4">
            <q-fab v-if="selected.length > 0" color="primary" push icon="keyboard_arrow_right" padding="0" direction="right">
              <q-fab-action color="warning" @click="onArchive" icon="archive">
                <q-tooltip>
                  {{ $t('tooltips.to_archive') }}
                </q-tooltip>
              </q-fab-action>
              <q-fab-action color="negative" @click="onRemove" icon="delete_outline">
                <q-tooltip>
                  {{ $t('tooltips.delete') }}
                </q-tooltip>
              </q-fab-action>
            </q-fab>
          </td>
          <td class="text-left bg-grey-4">{{ $t('pages.account.movies.table.title') }}</td>
          <td class="text-left bg-grey-4">{{ $t('pages.account.movies.table.category') }}</td>
          <td class="text-left bg-grey-4">{{ $t('pages.account.movies.table.movie') }}</td>
          <td class="text-left bg-grey-4">{{ $t('pages.account.movies.table.status') }}</td>
          <td class="text-left bg-grey-4">{{ $t('pages.account.movies.table.created_at') }}</td>
          <td class="text-left bg-grey-4"></td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data.data" class="">
          <td class="text-left"><q-checkbox v-model="selected" :val="item.id"/> </td>
          <td class="text-left">Pierwszy film</td>
          <td class="text-left">BDSM</td>
          <td class="text-left"></td>
          <td class="text-left">Aktywny</td>
          <td class="text-left">2020-08-08</td>
          <td class="text-left">
            <q-btn round outline color="primary" class="mr-1" icon="visibility">
              <q-tooltip>
                {{ $t('tooltips.show') }}
              </q-tooltip>
            </q-btn>
            <q-btn round outline color="warning" class="mr-1" icon="create">
              <q-tooltip>
                {{ $t('tooltips.edit') }}
              </q-tooltip>
            </q-btn>
            <q-btn round outline color="negative" icon="delete_outline">
              <q-tooltip>
                {{ $t('tooltips.delete') }}
              </q-tooltip>
            </q-btn>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <no-data-items v-if="data.data.length < 1" :msg="$t('notifications.no_data')"/>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {
    NoDataItems: () => import('components/NoDataItems')
  },
  data() {
    return {
      title: this.$t('pages.account.movies.title'),
      data: {},
      params: {
        title: '',
        category_id: '',
        status: ''
      },
      selected: []
    }
  },
  methods: {
    loadData() {

    },
    onRemove() {

    },
    onArchive() {

    },
    loadCategories() {

    }
  },
  created() {
    this.loadData();
    document.title = this.title;
  }
}
</script>

<style scoped>

</style>
