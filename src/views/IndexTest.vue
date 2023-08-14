<template lang="pug">
el-container
  el-header 新竹成滷味
  el-container.content
    el-aside(width="160px")
      div.shopping-cart.product-detail(v-for="(product, index) in shoppingCart")
        span.product-name {{ product.name }}({{ product.count }}) ${{ product.count * product.prize }}
        el-button(
            @click="removeCart(product)"
            size="mini"
            icon="el-icon-minus"
            circle
          )
    el-container.container
      el-main
        .category-bar
          el-button(size="medium" @click="getMenu('meat')") 肉類
          el-button(size="medium" @click="getMenu('vegetable')") 青菜
          el-button(size="medium" @click="getMenu('ball')") 丸子
        .menu-content
          el-card.product(
            v-for="(item, index) in currentMenu"
            shadow="hover"
          )
            div.product-detail
              span.product-name {{ item.name }} ${{ item.prize }}
              el-button(
                @click="addCart(item)"
                size="mini"
                icon="el-icon-plus"
                circle
              )
  .footer
    .total
      span 共計{{ total.count }}樣 {{ total.prize }}元
      el-button.cp-btn(
        @click="copy()"
        size="mini"
        icon="el-icon-document-copy"
      ) 複製點餐欄
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
        this.shoppingCart.forEach(item => {
          total.count += item.count;
          total.prize += item.count * item.prize;
        });
        return total;
      },
    },
    data() {
      return {
        shoppingCart: [],
        current: 'meat',
        menu: {
          meat: [
            {
              name: '豬肉片',
              prize: 35,
            },
            {
              name: '牛肉',
              prize: 35,
            },
            {
              name: '雞肉',
              prize: 35,
            },
            {
              name: '腱肉',
              prize: 35,
            },
          ],
          vegetable: [
            {
              name: '高麗菜',
              prize: 35,
            },
            {
              name: '空心菜',
              prize: 35,
            },
            {
              name: '花椰菜',
              prize: 35,
            },
            {
              name: '木耳',
              prize: 35,
            },
            {
              name: '玉米筍',
              prize: 35,
            },
            {
              name: '水蓮',
              prize: 35,
            },
          ],
          ball: [
            {
              name: '貢丸',
              prize: 35,
            },
            {
              name: '雲餃',
              prize: 35,
            },
            {
              name: '魚蛋',
              prize: 35,
            },
            {
              name: '黃金蛋',
              prize: 35,
            },
            {
              name: '起司丸',
              prize: 10,
            },
            {
              name: '鑫鑫腸',
              prize: 35,
            }
          ]
        },
      }
    },
    methods: {
      getMenu(category) {
        this.current = category;
      },
      addCart(item) {
        let found = this.shoppingCart.find(selected => selected.name === item.name);
        if (found) {
          found.count++;
        } else {
          this.shoppingCart.push({
            name: item.name,
            prize: item.prize,
            count: 1,
          });
        }
      },
      removeCart(item) {
        let found = this.shoppingCart.find(selected => selected.name === item.name);
        if (found.count > 1) {
          found.count--;
        } else {
          const index = this.shoppingCart.findIndex(object => {
            return object.name === item.name;
          });
          this.shoppingCart.splice(index, 1);
        }
      },
      copy() {
        let text = '';
        this.shoppingCart.forEach(item => {
          const single = item.name
            + '(' + item.count + ')'
            + '$' + (item.count * item.prize);
          text = text + single + '\n';
        });
        navigator.clipboard.writeText(text);
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    height: 500px;
  }
  .container {
    font-size: 20px;
    background-color: #EFE2CE;
    .category-bar {
      text-align: center;
      margin-bottom: 20px;
    }
    .product {
      display: inline-block;
      margin-right: 10px;
      width: 200px;
    }
  }
  .product-detail {
    display: flex;
    .product-name {
      flex: 1;
    }
  }
  .el-header {
    background-color: #DEC298;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    height: auto;
    color: #333;
    text-align: center;
    .shopping-cart {
      border-bottom: 1px rgb(227, 223, 223) solid;
      margin: 10px 10px 10px 10px;
      padding-bottom: 5px;
    }
  }

  .footer {
    text-align: right;
    background-color: #DEC298;
    color: #333;
    .total {
      padding: 0px 50px 0px 0px;
      .cp-btn {
        margin-left: 20px;
      }
    }
  }
</style>