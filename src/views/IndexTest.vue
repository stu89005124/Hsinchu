<template lang="pug">
el-container
  el-header 新竹城滷味
  el-container.content
    el-aside(width="120px")
      div.shopping-cart(v-for="(product, index) in shoppingCart")
        span {{ product.name }}
        span.price
          span ({{ product.count }}) &nbsp;
          span ${{ product.count * product.prize }}
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
            div {{ item.name }}
              el-button(
                @click="addCart(item)"
                size="mini"
                icon="el-icon-plus"
                circle
              )
  .footer
    .total 共計{{ total.count }}樣 {{ total.prize }}元
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
              name: '豬肉',
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
      margin-right: 50px;
    }
  }
</style>