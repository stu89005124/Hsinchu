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
          span.name {{ item.name }} &nbsp; ${{ item.prize }}
          el-input-number.btn(
            :disabled="item.disable"
            :min="0"
            :max="20"
            v-model="item.count"
          )

  .footer
    .flavor
      .mg-bottom
        i(class="el-icon-shopping-cart-2")
        span 共計{{ total.count }}樣 {{ total.prize }}元
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
      el-button(
        @click="copy()"
        size="small"
        icon="el-icon-document-copy"
      ) 複製
        i(class="el-icon-document-copy")
</template>

<script>
  export default {
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
        let hasRemark = false;
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
        if (this.spicy !== 0) {
          hasRemark = true;
          const spicyText = this.spicyOption.filter(item => item.value === this.spicy);
          temp += spicyText[0].label + " "
        }
        this.remark.forEach(item => {
          if (item.check) {
            hasRemark = true;
            temp += item.name + " "
          }
        });
        if (this.sauce !== 0) {
          hasRemark = true;
          const sauceText = this.sauceOption.filter(item => item.value === this.sauce);
          temp += sauceText[0].label + " "
        }
        if (hasRemark) {
          temp += "\n";
        }
        temp += "\n共計" + this.total.count + " 樣 " + this.total.prize + " 元";
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
        menu: {
          meat: [
            {
              name: '豬腱肉(1兩)',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '豬耳朵',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '豬肉片',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '雞肉串',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '豬心',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '豬皮',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '鴨胗',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '鴨心',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '豆腐鴨血(冬天限定)',
              prize: 35,
              count: 0,
              disable: true
            },
            {
              name: '大腸(1兩)',
              prize: 50,
              count: 0,
              disable: false
            },
            {
              name: '牛肉片',
              prize: 50,
              count: 0,
              disable: false
            },
            {
              name: '鴨腸',
              prize: 50,
              count: 0,
              disable: false
            },
          ],
          vegetable: [
            {
              name: '蘿蔔',
              prize: 10,
              count: 0,
              disable: false
            },
            {
              name: '高麗菜',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '空心菜',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '花椰菜',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '大陸妹',
              prize: 35,
              count: 0,
              disable: true
            },
            {
              name: '娃娃菜',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '水蓮',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '金針菇',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '秀珍菇',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '四季豆',
              prize: 35,
              count: 0,
              disable: true
            },
            {
              name: '玉米筍',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '小黃瓜',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '香菇',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '青椒',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '絲瓜',
              prize: 35,
              count: 0,
              disable: false
            },
            {
              name: '木耳',
              prize: 35,
              count: 0,
              disable: false
            },
          ],
          noodle: [
            {
              name: '科學麵',
              prize: 20,
              count: 0,
              disable: false
            },
            {
              name: '冬粉',
              prize: 20,
              count: 0,
              disable: false
            },
            {
              name: '烏龍麵',
              prize: 25,
              count: 0,
              disable: false
            },
            {
              name: '關廟麵',
              prize: 25,
              count: 0,
              disable: false
            }
          ],
          other: [
            {
              name: '水晶餃(2顆)',
              prize: 10,
              count: 0,
              disable: false
            },
            {
              name: '乳酪絲起司丸(1顆)',
              prize: 10,
              count: 0,
              disable: false
            },
            {
              name: '海帶(1片)',
              prize: 10,
              count: 0,
              disable: false
            },
            {
              name: '小豆干(3塊)',
              prize: 20,
              count: 0,
              disable: false
            },
            {
              name: '蟹肉棒(3個)',
              prize: 20,
              count: 0,
              disable: false
            },
            {
              name: '甜不辣(3片)',
              prize: 20,
              count: 0,
              disable: false
            },
            {
              name: '招牌米血',
              prize: 25,
              count: 0,
              disable: false
            },
            {
              name: '芋頭糕',
              prize: 25,
              count: 0,
              disable: false
            },
            {
              name: '大豆皮',
              prize: 25,
              count: 0,
              disable: false
            },
            {
              name: '黑豆干',
              prize: 25,
              count: 0,
              disable: false
            },
            {
              name: '蘭花干',
              prize: 25,
              count: 0,
              disable: false
            },
            {
              name: '竹輪',
              prize: 25,
              count: 0,
              disable: false
            },
            {
              name: '豆包',
              prize: 25,
              count: 0,
              disable: false
            },
            {
              name: '米腸',
              prize: 25,
              count: 0,
              disable: false
            },
            {
              name: '貢丸',
              prize: 30,
              count: 0,
              disable: false
            },
            {
              name: '魚餃',
              prize: 30,
              count: 0,
              disable: false
            },
            {
              name: '黃金魚蛋',
              prize: 30,
              count: 0,
              disable: false
            },
            {
              name: '鳥蛋',
              prize: 30,
              count: 0,
              disable: false
            },
            {
              name: '素腰花',
              prize: 30,
              count: 0,
              disable: false
            },
            {
              name: '大黑輪',
              prize: 30,
              count: 0,
              disable: false
            },
            {
              name: '鑫鑫腸',
              prize: 30,
              count: 0,
              disable: false
            },
            {
              name: '百頁豆腐',
              prize: 35,
              count: 0,
              disable: false
            }
          ],
        },
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
      getMenu(category) {
        this.current = category;
      },
      copy() {
        // if (navigator.clipboard && window.isSecureContext) {
        //   navigator.clipboard.writeText(this.text)
        //     .then(()=> {
        //       this.$notify({
        //         type: 'success',
        //         title: '成功複製',
        //       });
        //     })
        //     .catch((error) => {
        //       alert(error);
        //     });
        // }
        if (this.$refs.inputRef.value) {
          this.$refs.inputRef.value = this.text;
          this.$el.querySelector('textarea').select();
          document.execCommand('copy');
          this.$notify({
            type: 'success',
            title: '成功複製',
          });
        }
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