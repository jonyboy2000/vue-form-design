<template>
  <div class="main">
    <!-- 布局和表单组建 -->
    <div>
      <div class="layout-list">
        <div>布局</div>
        <div class="layout-item" v-for="(layout, index) in layouts" :key="index" draggable @dragstart="layoutDrag(layout)">
          {{layout}}
        </div>
      </div>
      <div class="formitem-list">
        <div>表单组件</div>
        <div class="formitem-item" v-for="(formItem, index) in formItems" :key="index" draggable @dragstart="formItemDrag(formItem.type)">
          {{formItem.name}}
        </div>
      </div>
    </div>
    <el-row :gutter="20">
      <el-col :span="16">
        <!-- 表单 -->
        <div class="form-container" @dragover.stop="null" @drop="drop">
          <Cell v-for="(cell, index) in mainData" :key="index"></Cell>
        </div>
      </el-col>
      <el-col :span="8">
        <!-- 配置 -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Cell from '@/views/Cell'

var createUid = function() {

}

export default {
  data() {
    return {
      layouts: ['12', '6 6', '4 4 4'],
      formItems: [
        {type: 'text', name: '输入框'}, 
        {type: 'number', name: '数字框'}, 
        {type: 'select', name: '下拉框'},
        {type: 'radio', name: '单选框'},
        {type: 'checkbox', name: '多选框'},
        {type: 'textarea', name: '文本框'},
        {type: 'datepicker', name: '日期框'}
      ],
      mainData: []
    }
  },
  methods: {
    layoutDrag(layout) {
      this.mainData.push({
        cellId: createUid(),
        rowConf: layout.join('')
      })
    },
    formItemDrag(type) {
      const formItemObj = new Object()
    }
  },
  components: {
    Cell
  }
}
</script>

<style scoped>
  .layout-list{
    display: flex;
  }
  .layout-list .layout-item{
    padding: 0 10px;
    cursor: move;
  }
  .formitem-list{
    display: flex;
  }
  .formitem-list .formitem-item{
    padding: 0 10px;
    cursor: move;
  }
</style>


