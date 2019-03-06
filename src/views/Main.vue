<template>
  <div class="main">
    <!-- 布局和表单组建 -->
    <div>
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
        <div class="form-container" @dragover.prevent="" @drop="mainDrop">
          <el-form :model="formModel">
            <Cell 
              v-for="(cell, index) in mainData" 
              :key="index"
              :cellConfig="cell"
              @dragover.prevent=""
              @drop.native="cellDrop(cell)"
            ></Cell>
          </el-form>
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

function guid(){
  var guid = ''
  for (var i = 1; i <= 32; i++){
    var n = Math.floor(Math.random() * 16).toString(16)
    guid += n
    if((i==8)||(i==12)||(i==16)||(i==20)) guid += "-"
  }
  return guid
}


export default {
  data() {
    return {
      formItems: [
        {type: 'TEXT', name: '输入框'}, 
        {type: 'NUMBER', name: '数字框'}, 
        {type: 'SELECT', name: '下拉框'},
        {type: 'RADIO', name: '单选框'},
        {type: 'CHECKBOX', name: '多选框'},
        {type: 'TEXTAREA', name: '文本框'},
        {type: 'DATEPICKER', name: '日期框'}
      ],
      mainData: [],
      cellConfig: null,
      formModel: {},
      formItemConfig: null
    }
  },
  computed: {
    defaultConfig() {
      return {
        'label': '',
        'font-size': '14px',
        'text-align': 'left',
        'color': '#000000',
        'bindKey': '',
      }
    },
  },
  methods: {
    formItemDrag(type) {
      this.dragType = 'formItem'
      const config = {}
      switch(type) {
        case 'TEXT': 
          config.label = '输入框'
          break;
        case 'NUMBER': 
          config.max = 100
          config.min = 0
          config.label = '数字框'
          break
        case 'SELECT': 
          config.options = []
          config.label = '下拉框'
          break
        case 'RADIO': 
          config.options = []
          config.label = '单选框'
          break
        case 'CHECKBOX': 
          config.options = []
          config.label = '多选框'
          break
        case 'TEXTAREA': 
          config.maxLength = 100
          config.label = '文本框'
          break
        case 'DATEPICKER': 
          config.dateType = 'date'
          config.format = 'yyyy-MM-dd'
          config.label = '日期选择'
          break
      }
      this.formItemConfig = {
        type: type, 
        formItemId: guid(),
        data: Object.assign({}, this.defaultConfig, config)
      }
    },
    mainDrop(e) {
      const dropData = {
        cellId: guid(),
        children: [
          this.formItemConfig
        ]
      }
      this.mainData.push(dropData)
    },
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
  .form-container{
    height: 500px;
  }
</style>


