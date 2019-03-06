<template>
  <div class="cell">
    <FormItem 
      v-for="(item, index) in cellConfig.children" 
      :key="index" 
      :formItemConfig="item"
      @click.native="setActiveFormItem(item)"
    ></FormItem>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import FormItem from '@/views/FormItem'
  
  export default {
    props: {
      cellConfig: {
        type: Object,
        default: function() {
          return {id: '', children: []}
        }
      }
    },
    data() {
      return {
      }
    },
    computed: mapState({
      formItemConfig: state => state.formItemConfig,
    }),
    methods: { 
      setActiveFormItem(formItem) {
        this.$store.commit('ACTIVE_FORMITEM_ID', formItem.formItemId)
      }
    },
    components: {
      FormItem
    }
  }
</script>

<style scoped>
  .cell{
    
  }
</style>
