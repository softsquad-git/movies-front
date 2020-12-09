<template>
  <div class="comments">
    <div class="_header">
      <q-btn
        round
        @click="isShow ^= true"
        :icon="isShow ? 'expand_less' : 'expand_more'"
        class="icon">
        <q-badge text-color="white" floating>
          {{ data.data.length }}
        </q-badge>
        <q-tooltip>
          {{ $t('comments.show') }}
        </q-tooltip>
      </q-btn>
      <q-btn
        v-if="isShow == true"
        @click="isCreateComment ^= true"
        round
        :icon="isCreateComment ? 'close' : 'add'"
        class="icon">
        <q-tooltip>
          {{ isCreateComment ? $t('buttons.cancel') : $t('buttons.create') }}
        </q-tooltip>
      </q-btn>
      <q-btn
        v-if="isCreateComment && isShow"
        round
        icon="save"
        class="icon"
        @click="createComment">
        <q-tooltip>
          {{ $t('buttons.save') }}
        </q-tooltip>
      </q-btn>
    </div>
    <div v-if="isShow" class="_content">
      <comment-create-component
        v-if="isCreateComment"
        ref="save"
        :resource_id="resource_id"
        :resource_type="resource_type"
        @success="loadData"
        @close="isCreateComment = false"
      />
      <div class="list">
        <h5 class="m-0">{{ $t('comments.list') }}</h5>
        <no-data-items
          v-if="data.data.length < 1"
          :msg="$t('notifications.no_data')"/>
        <q-list v-if="data.data.length > 0" padding>
          <q-item v-for="item in data.data">
            <q-item-section top avatar>
              <q-avatar>
                <q-img @click="$router.push({name: 'FrontUserProfile', params: {name: item.user.name, id: item.user.id}})" :src="item.user.avatar" :alt="item.user.name"/>
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <router-link :to="{name: 'FrontUserProfile', params: {name: item.user.name, id: item.user.id}}">{{ item.user.name }}</router-link>
              </q-item-label>
              <q-item-label caption>{{ item.content }}</q-item-label>
              <q-item-label>
                <q-btn @click="onReplyAll(item.id)"
                       :icon="isShowAnswersId == item.id ? 'close' : 'reply_all'"
                       class="icon" round flat padding="0">
                  <q-tooltip>
                    {{ $t('comments.buttons.reply_all') }}
                  </q-tooltip>
                </q-btn>
                <q-btn @click="onCreateReply(item.id)"
                       :icon="isCreateReplyId == item.id ? 'close' : 'reply'"
                       class="icon" round flat padding="0">
                  <q-tooltip>
                    {{ $t('comments.buttons.reply_create') }}
                  </q-tooltip>
                </q-btn>
                <q-btn @click="onEdit(item.id)"
                       v-if="$userId == item.user.id"
                       :icon="isShowEditId == item.id ? 'close' : 'edit'"
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
                <comment-edit-component
                  v-if="isShowEditId == item.id"
                  @success="loadData"
                  @close="isShowEditId = ''"
                  :content="item.content"
                  :id="item.id"
                />
              </q-item-label>
              <q-item-label>
                <comment-reply-create-component
                  v-if="isCreateReplyId == item.id"
                  :comment_id="item.id"
                  @success="onReplyAll(item.id)"
                  @close="isCreateReplyId = false"/>
              </q-item-label>
              <q-item-label>
                <comment-answers-component v-if="isShowAnswersId == item.id" :id="item.id"/>
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>{{ item.created_at | moment('calendar') }}</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </div>
    </div>
  </div>
</template>

<script>
import CommentCreateComponent from "components/comments/CommentCreateComponent";
import NoDataItems from "components/NoDataItems";
import CommentEditComponent from "components/comments/CommentEditComponent";
import CommentAnswersComponent from "components/comments/answers/CommentAnswersComponent";
import CommentReplyCreateComponent from "components/comments/answers/CommentReplyCreateComponent";

export default {
  name: "CommentsComponent",
  components: {
    CommentReplyCreateComponent,
    CommentAnswersComponent, CommentEditComponent, NoDataItems, CommentCreateComponent},
  data() {
    return {
      data: {},
      isShow: false,
      isCreateComment: false,
      isShowEditId: false,
      isShowAnswersId: false,
      isCreateReplyId: false
    }
  },
  props: {
    resource_type: '',
    resource_id: ''
  },
  methods: {
    loadData() {
      this.$axios.get(`comments/all?resource_id=${this.resource_id}&resource_type=${this.resource_type}`)
        .then((data) => {
          this.data = data.data;
        })
        .catch((error) => {
          //
        })
    },
    onRemove(id) {
      this.$axios.delete(`comments/remove/${id}`)
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
    onCreateReply(id) {
      if (this.isCreateReplyId) {
        return this.isCreateReplyId = false;
      }
      this.isCreateReplyId = id;
    },
    onEdit(id) {
      if (this.isShowEditId) {
        return this.isShowEditId = false;
      }
      this.isShowEditId = id;
    },
    onReplyAll(id) {
      if (this.isShowAnswersId == id) {
        return this.isShowAnswersId = false;
      }
      this.isShowAnswersId = id;
    },
    createComment() {
      this.$refs.save.save();
    }
  },
  watch: {
    'resource_id' () {
      this.loadData();
    },
    'resource_type' () {
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
