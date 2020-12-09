<template>
  <div class="admin-page">
    <div class="header">
      <div class="row">
        <div class="col-9">
          <h3>{{ title }}</h3>
        </div>
        <div class="col-3">
          <q-btn :to="{name: 'AccountMovieItem', params: {'action': 'create'}}" round outline color="positive"
                 class="float-right" icon="add">
            <q-tooltip>
              {{ $t('tooltips.create') }}
            </q-tooltip>
          </q-btn>
          <q-btn round outline color="primary" class="float-right mr-1" icon="search">
            <q-tooltip>
              {{ $t('tooltips.filters') }}
            </q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>
    <div class="q-table__container q-table--horizontal-separator column no-wrap q-table--no-wrap">
      <div v-if="data.data.length > 0" class="q-table__middle">
        <table class="q-table">
          <thead>
          <tr>
            <td class="text-left bg-grey-4">
              <q-fab v-if="selected.length > 0" color="primary" push icon="drag_indicator" padding="5px"
                     direction="right">
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
            <td class="text-left">
              <q-checkbox v-model="selected" :val="item.id"/>
            </td>
            <td class="text-left">{{ item.title }}</td>
            <td class="text-left">{{ item.category.name }}</td>
            <td class="text-left">
              <q-img :src="item.thumb" :alt="item.title"/>
            </td>
            <td class="text-left">{{ item.status.name }}</td>
            <td class="text-left">{{ item.created_at }}</td>
            <td class="text-left">
              <q-btn :to="{name: 'AccountMovieItem', params: {action: 'show', id: item.id}}" round outline
                     color="primary" class="mr-1" icon="visibility">
                <q-tooltip>
                  {{ $t('tooltips.show') }}
                </q-tooltip>
              </q-btn>
              <q-btn :to="{name: 'AccountMovieItem', params: {action: 'edit', id: item.id}}" round outline
                     color="warning" class="mr-1" icon="create">
                <q-tooltip>
                  {{ $t('tooltips.edit') }}
                </q-tooltip>
              </q-btn>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <no-data-items v-if="data.data.length < 1" :msg="$t('notifications.no_data')"/>
    </div>
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
        status: '',
        ordering: '',
        pagination: ''
      },
      selected: [],
      categories: []
    }
  },
  methods: {
    loadData() {
      this.$axios.get(`user/movies/all`)
        .then((data) => {
          this.data = data.data;
          this.loadCategories();
        })
        .catch((error) => {
          //
        })
    },
    onRemove() {
      this.$axios.delete(`user/movies/remove?ids=${JSON.stringify(this.selected)}`)
        .then((data) => {
          if (data.data.success === 1) {
            this.loadData();
            this.$q.notify({
              message: data.data.msg
            })
          }
        })
        .catch((error) => {
          //
        })
    },
    onArchive() {
      this.$axios.post(`user/movies/archive?ids=${JSON.stringify(this.selected)}`)
      .then((data) => {
        if (data.data.success === 1) {
          this.loadData();
          this.selected = [];
          this.$q.notify({
            message: data.data.msg
          })
        }
      })
      .catch((error) => {
        //
      })
    },
    loadCategories() {
      this.$axios.get('categories/all')
        .then((data) => {
          this.categories = data.data.data;
        })
        .catch((error) => {
        })
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
