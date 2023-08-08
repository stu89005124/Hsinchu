<template lang="pug">
	div
		el-radio(v-model="radio" label="1") 备选项
		el-radio(v-model="radio" label="2") 备选项2
</template>

<script>
  export default {
    data() {
      return {
				radio: "1",
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>