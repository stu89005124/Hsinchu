<template lang="pug">
el-container
  textarea(
    ref="inputRef"
    :value="text"
    style="opacity:0;position:fixed; left: -999999px; top: -999999px"
  )
  el-header 新竹成滷味
  el-tabs(v-model="current")
    el-tab-pane(
      v-for="(tab, key) in tabs"
      :label="tab.label"
      :name="tab.name"
    )
      .content
        .product(
          v-for="(item, index) in currentMenu"
          :class="[item.count > 0 ? 'selected' : '']"
        )
          span.name {{ item.name }} {{ item.remark }} &nbsp; ${{ item.prize }}
          el-input-number.btn(
            :disabled="item.disable"
            :min="0"
            :max="20"
            v-model="item.count"
          )

  .footer
    .flavor
      .mg-bottom
        el-tooltip(placement="top" :disabled="this.text === ''")
          pre(slot="content") {{ this.text }}
          span.total
            el-link 共計{{ total.count }}樣 {{ total.prize }}元
              i(class="el-icon-shopping-bag-1 el-icon--right")
      el-radio-group(v-model="spicy")
        el-radio.mg-bottom(
          v-for="(item, key) in spicyOption"
          :label="item.value"
        ) {{ item.label }}
      .mg-bottom
        el-checkbox(v-for="(detail, key) in remark" v-model="detail.check") {{ detail.name }}
      el-radio-group(v-model="sauce")
        el-radio.mg-bottom(
          v-for="(item, key) in sauceOption"
          :label="item.value"
        ) {{ item.label }}
    div(style="text-align:center")
      el-button.cp-btn(
        @click="copy()"
        size="small"
        icon="el-icon-document-copy"
      ) 複製
</template>

<script>
import SpareMenu from '../assets/SpareMenu.json'
import { Loading } from 'element-ui';

  export default {
    created: function () {
      let tempMenu = {
        meat: [],
        vegetable: [],
        noodle: [],
        other: []
      };
      let loadingInstance = Loading.service({
        fullscreen: true
      });
      let vueObject = this;

      // 呼叫API
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://script.google.com/macros/s/AKfycbzIVIBJMr9ZoCGK6yFMc02JEcx_RIm9aICVS7PNuNrJjKHkZ2wy1wVSj_Wfv69jzJYP/exec', true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            let property = response[0];
            delete response[0];

            // 整理物件
            response.forEach((value) => {
              let single = {};
              property.forEach((item, key) => {
                if (key !== 0) {
                  single[item] = value[key];
                }
              });
              tempMenu[value[0]].push(single);
            });
            vueObject.menu = tempMenu;
          } else{
            // 預設
            vueObject.menu = SpareMenu;
          }
        }
        // 關閉loading
        loadingInstance.close();
      }
      xhr.send();
    },
    computed: {
      currentMenu: function () {
        return this.menu[this.current];
      },
      total: function () {
        let total = {
          count: 0,
          prize: 0,
        };
        Object.entries(this.menu).forEach(category => {
          category[1].forEach(item => {
            total.count += item.count;
            total.prize += item.count * item.prize;
          })
        });

        return total;
      },
      text: function () {
        let temp = '';
        Object.entries(this.menu).forEach(category => {
          category[1].forEach(item => {
            if (item.count > 0) {
              const single = item.name
                + '(' + item.count + ') '
                + '$' + (item.count * item.prize);
              temp += single + '\n';
            }
          })
        });

        return temp;
      },
    },
    data() {
      return {
        spicy: 0,
        sauce: 0,
        tabs: [
          {
            name: 'meat',
            label: '肉類',
          },
          {
            name: 'vegetable',
            label: '青菜',
          },
          {
            name: 'other',
            label: '火鍋料、其他',
          },
          {
            name: 'noodle',
            label: '麵類',
          }
        ],
        shoppingCart: [],
        current: 'meat',
        menu: {},
        remark: [
          {
            name: '不要香油',
            check: false
          },
          {
            name: '不要榨菜',
            check: false
          }
        ],
        spicyOption: [
          {
            label: '不辣',
            value: 0
          },
          {
            label: '微辣',
            value: 1
          },
          {
            label: '小辣',
            value: 2
          },
          {
            label: '中辣',
            value: 3
          },
          {
            label: '大辣',
            value: 4
          },
        ],
        sauceOption: [
          {
            label: '醬正常',
            value: 0
          },
          {
            label: '不加醬(只有胡椒、香油)',
            value: 1
          },
          {
            label: '醬少(清淡)',
            value: 2
          },
          {
            label: '醬多(重口味)',
            value: 3
          },
        ],
      }
    },
    methods: {
      copy() {
        let hasRemark = false;
        let copyText = this.text;
        if (this.spicy !== 0) {
          hasRemark = true;
          const spicyText = this.spicyOption.filter(item => item.value === this.spicy);
          copyText += spicyText[0].label + " "
        }
        this.remark.forEach(item => {
          if (item.check) {
            hasRemark = true;
            copyText += item.name + " "
          }
        });
        if (this.sauce !== 0) {
          hasRemark = true;
          const sauceText = this.sauceOption.filter(item => item.value === this.sauce);
          copyText += sauceText[0].label + " "
        }
        if (hasRemark) {
          copyText += "\n";
        }
        copyText += "\n共計 " + this.total.count + " 樣 " + this.total.prize + " 元";
        this.$refs.inputRef.value = copyText;
        this.$el.querySelector('textarea').select();
        document.execCommand('copy');
        this.$el.querySelector('.cp-btn').focus();
        this.$notify({
          type: 'success',
          title: '成功複製',
        });
      }
    }
  }
</script>

<style>
  .el-container {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-tabs {
    padding: 0px 10px 0px 10px;
  }
  .el-header {
    background-color: #DEC298;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .footer {
    display: flex;
    align-items: center;
    background-color: #DEC298;
    color: #333;
    padding: 5px 10px 5px 10px;
  }
  .product {
    height: 60px;
    margin: 0px 10px 10px 10px;
    display: flex;
    align-items: center;
  }
  .selected {
    background-color: rgba(163, 216, 244, 0.127);
  }
  .content {
    height: 450px;
    overflow-y: auto;
  }
  .name {
    flex: 1;
  }
  .flavor {
    flex: 1;
  }
  .mg-bottom {
    margin-bottom: 5px;
  }
</style>