<template>
  <div>
    <q-list v-if="data.data.length > 0" padding>
      <q-item v-for="item in data.data">
        <q-item-section top avatar>
          <q-avatar>
            <q-img @click="$router.push({name: 'FrontUserProfile', params: {name: item.user.name, id: item.user.id}})"
                   :src="item.user.avatar" :alt="item.user.name"/>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <router-link :to="{name: 'FrontUserProfile', params: {name: item.user.name, id: item.user.id}}">
              {{ item.user.name }}
            </router-link>
          </q-item-label>
          <q-item-label caption>{{ item.content }}</q-item-label>
          <q-item-label>
            <comment-edit-component
              v-if="isShowEditId == item.id"
              @success="loadData"
              @close="isShowEditId = ''"
              :content="item.content"
              :id="item.id"
            />
          </q-item-label>
          <q-item-label>
            <q-btn @click="onEdit(item.id)"
                   v-if="$userId == item.user.id"
                   :icon="isEditReplyId == item.id ? 'close' : 'edit'"
                   class="icon"
                   round
                   flat
                   padding="0">
              <q-tooltip>
                {{ $t('buttons.edit') }}
              </q-tooltip>
            </q-btn>
            <q-btn @click="onRemove(item.id)" v-if="$userId == item.user.id" icon="delete_outline" class="icon"
                   round flat
                   padding="0">
              <q-tooltip>
                {{ $t('buttons.delete') }}
              </q-tooltip>
            </q-btn>
          </q-item-label>
          <q-item-label>
            <comment-reply-edit-component
              @success="loadData"
              @close="isEditReplyId = false"
              v-if="isEditReplyId == item.id"
              :id="item.id"
              :content="item.content"/>
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{ item.created_at | moment('calendar') }}</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
    <no-data-items v-if="data.data.length < 1" :msg="$t('notifications.no_data')"/>
  </div>
</template>

<script>
import NoDataItems from "components/NoDataItems";
import CommentReplyEditComponent from "components/comments/answers/CommentReplyEditComponent";

export default {
  name: "CommentAnswersComponent",
  components: {CommentReplyEditComponent, NoDataItems},
  data() {
    return {
      data: {},
      isEditReplyId: false
    }
  },
  props: {
    id: ''
  },
  methods: {
    loadData() {
      this.$axios.get(`comments/answers/all?comment_id=${this.id}`)
        .then((data) => {
          this.data = data.data;
        })
        .catch((error) => {
          //
        })
    },
    onEdit(id) {
      if (this.isEditReplyId) {
        return this.isEditReplyId = false;
      }
      this.isEditReplyId = id;
    },
    onRemove(id) {
      this.$axios.delete(`comments/answers/remove/${id}`)
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
    }
  },
  watch: {
    'id' () {
      this.loadData();
    }
  },
  created() {
    this.loadData();
  }
}
</script>

<style scoped>

</style>
