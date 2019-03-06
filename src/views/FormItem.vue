<template>
  <div :class="{'form-item': true, 'active': formItemConfig.formItemId === activeFormItemId}" draggable @dragstart="formItemDrag">
    <el-form-item>
      <div class="flex-box">
        <label class="form-item-lable">{{label}}</label>
        <div>
          <!-- 输入框 -->
          <el-input v-if="formItemConfig.type === 'TEXT'" v-model="formModel[bindKey]"></el-input>
          <!-- 数字框 -->
          <el-input-number v-else-if="formItemConfig.type === 'NUMBER'" v-model="formModel[bindKey]"></el-input-number>
          <!-- 文本框 -->
          <el-input type="textarea" v-else-if="formItemConfig.type === 'TEXTAREA'" v-model="formModel[bindKey]"></el-input>
          <!-- 下拉框 -->
          <el-select v-else-if="formItemConfig.type === 'SELECT'" v-model="formModel[bindKey]"></el-select>
          <!-- 单选框 -->
          <el-radio-group v-else-if="formItemConfig.type === 'RADIO'" v-model="formModel[bindKey]">
            <el-radio></el-radio>
          </el-radio-group>
          <!-- 多选框 -->
          <el-checkbox-group v-else-if="formItemConfig.type === 'CHECKBOX'" v-model="formModel[bindKey]"></el-checkbox-group>
          <!-- 日期选择 -->
        </div>
      </div>
    </el-form-item>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props: {
      formItemConfig: {
        type: Object,
        default: function() {
          return {}
        }
      },
      formModel: {
        type: Object,
        default: function() {
          return {}
        }
      }
    },
    data() {
      return {
        bindKey: ''
      }
    },
    computed: mapState({
      activeFormItemId: state => state.activeFormItemId,
      label() {
        return this.formItemConfig.data.label || ''
      },
    }),
    methods: {
      formItemDrag() {
        this.$store.commit('DRAG_FORMITEM', this.formItemConfig.data.id)
      }
    }
  }
</script>

<style scoped>
  .flex-box{
    display: flex;
  }
  .form-item{
    cursor: pointer;
  }
  .active{
    background: #409EFF;
    opacity: 0.5;
  }
</style>