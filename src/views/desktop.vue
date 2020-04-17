<template>
  <div class="screen">
    <div class="desktop-content" v-rmenu="{opt:contentRightMenu,theme:'light'}">
      <vue-drag-select class="drag-select" v-model="selectedShortcuts" value-key="name" :item-margin="[0, 10, 10, 0]" ref="dragSelect">
        <template v-for="(item, index) in desktopShortcuts">
          <drag-select-option :key="item.id" :value="item" :item-index="index">
            <div class="item-self">
              {{item.name}}
            </div>
          </drag-select-option>
        </template>
      </vue-drag-select>
    </div>
    <div class="desktop-taskbar" v-rmenu="{opt:taskbarRightMenu,theme:'dark'}">
      <div class="taskbar-left">
        <transition>
          <div :class="['taskbar-startmenu','animated',openWindow.startMenu ? 'fadeInUpBig' : 'fadeOutDownBig']" v-show="openWindow.startMenu" v-click-outside="{func:hideWindow,param:'startMenu'}"></div>
        </transition>
        <ul class="taskbar-left-ul">
          <li v-for="(item, index) in taskbarLeftBtns" :key="index" :title="item.title" @click.stop="clickTaskbar(item.name)">
            <i :class="item.icon" aria-hidden="true" :style="item.style"></i>
          </li>
        </ul>
      </div>
      <div class="taskbar-center"></div>
      <div class="taskbar-right">
        <ul class="taskbar-right-ul">
          <li v-for="(item, index) in taskbarRightBtns" :class="item.name" :key="index" :title="item.title" @click.stop="clickTaskbar(item.name)">
            <template v-if="item.name == 'sysTime'">
              <div :class="item.name + '-div'">
                <span>{{sysTimeConfig[0]}}</span>
                <span>{{sysTimeConfig[1]}}</span>
              </div>
            </template>
            <template v-else-if="item.name == 'typeWriting'">
              <div :class="item.name + '-div'">
                中
              </div>
            </template>
            <template v-else>
              <i :class="item.icon" aria-hidden="true" :style="item.style"></i>
            </template>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "desktop",
  data () {
    return {
      openWindow: {
        startMenu: false
      },
      taskbarLeftBtns: [
        {
          title: "开始",
          name: "startMenu",
          icon: "fa fa-fw fa-windows",
          style: {}
        }, {
          title: "在这里输入你要搜索的内容",
          name: "sysSearch",
          icon: "fa fa-fw fa-search",
          style: {}
        }, {
          title: "任务视图",
          name: "taskView",
          icon: "fa fa-fw fa-tasks",
          style: { position: 'relative', top: '2px' }
        }
      ],
      taskbarRightBtns: [{
        title: "时间",
        name: "sysTime",
        icon: "fa fa-fw",
        style: {}
      }, {
        title: "输入法",
        name: "typeWriting",
        icon: "fa fa-fw",
        style: {}
      },
      {
        title: "通知",
        name: "sysNotice",
        icon: "fa fa-fw fa-comment-o",
        style: { fontSize: '20px' }
      },
      {
        title: "显示桌面",
        name: "sysNotice",
        icon: "fa fa-fw",
        style: {}
      }],
      selectedShortcuts: [],
      desktopShortcuts: [{ id: 1, name: 123 }],
      contentRightMenu: [
        {
          type: 'ul',
          title: '查看(V)',
          children: [
            {
              type: 'li',
              title: '大图标(V)',
              func: () => { this.clickRightMenu('big') }
            }, {
              type: 'li',
              title: '中等图标(M)',
              func: () => { this.clickRightMenu('medium') }
            }, {
              type: 'li',
              title: '小图标(N)',
              func: () => { this.clickRightMenu('small') }
            }, {
              type: 'hr' // 分割线, 无需其他参数
            }, {
              type: 'li',
              title: '自动排列图标(A)',
              func: () => { this.clickRightMenu('auto') }
            }, {
              type: 'hr' // 分割线, 无需其他参数
            }, {
              type: 'li',
              title: '双击隐藏桌面图标',
              func: () => { this.clickRightMenu('duble') }
            }
          ]
        }, {
          type: 'ul', // type为li是普通按钮
          title: '排列方式', // 按钮的名称
          children: [
            {
              type: 'li',
              title: '名称',
              func: () => { this.clickRightMenu('name') }
            }, {
              type: 'li',
              title: '大小',
              func: () => { this.clickRightMenu('size') }
            }
          ]
        }, {
          type: 'li',
          title: '粘贴(V)',
          disabled: true, // 不可点击状态, 回调函数自然无法触发
          func: () => alert('点击了粘贴')
        }, {
          type: 'hr' // 分割线, 无需其他参数
        }, {
          type: 'ul', // type为ul是二级菜单
          title: '新建(W)',
          children: [ // children里面配置二级菜单列表, 不支持三级菜单
            {
              type: 'li',
              title: '文件夹(F)',
              func: () => alert('新建了文件夹')
            }, {
              type: 'li',
              title: '快捷方式(S)',
              func: () => alert('新建了快捷方式')
            }, {
              type: 'hr'
            }, {
              type: 'li',
              title: '文本文档'
            }, {
              type: 'li',
              title: 'Work 文档'
            }, {
              type: 'li',
              title: 'Excel 表格'
            }, {
              type: 'li',
              title: 'WinRAR 压缩文件'
            }
          ]
        }, {
          type: 'hr'
        }, {
          type: 'li',
          title: '显示设置(D)',
          icon: 'fa fa-television',
          func: () => alert('点击了属性')
        }
      ],
      taskbarRightMenu: [
        {
          type: 'ul',
          title: '工具栏(T)',
          children: [
            {
              type: 'li',
              title: '地址(A)',
              func: () => { this.clickRightMenu('big') }
            }, {
              type: 'li',
              title: '中等图标(M)',
              func: () => { this.clickRightMenu('medium') }
            }, {
              type: 'li',
              title: '小图标(N)',
              func: () => { this.clickRightMenu('small') }
            }, {
              type: 'hr' // 分割线, 无需其他参数
            }, {
              type: 'li',
              title: '自动排列图标(A)',
              func: () => { this.clickRightMenu('auto') }
            }, {
              type: 'hr' // 分割线, 无需其他参数
            }, {
              type: 'li',
              title: '双击隐藏桌面图标',
              func: () => { this.clickRightMenu('duble') }
            }
          ]
        }, {
          type: 'ul', // type为li是普通按钮
          title: '搜索(H)', // 按钮的名称
          children: [
            {
              type: 'li',
              title: '名称',
              func: () => { this.clickRightMenu('name') }
            }, {
              type: 'li',
              title: '大小',
              func: () => { this.clickRightMenu('size') }
            }
          ]
        }, {
          type: 'li',
          title: '显示 Cortana 按钮(O)',
          disabled: true, // 不可点击状态, 回调函数自然无法触发
          func: () => alert('点击了粘贴')
        }, {
          type: 'hr' // 分割线, 无需其他参数
        }, {
          type: 'li', // type为ul是二级菜单
          title: '任务管理器(K)',
          func: () => alert('点击了粘贴')
        }, {
          type: 'hr'
        }, {
          type: 'li',
          title: '任务栏设置(T)',
          icon: 'fa fa-cog',
          func: () => alert('点击了属性')
        }
      ],
      sysTimeConfig: ['', '']
    };
  },
  computed: {},
  created () {
    setInterval(this.getSysTime, 1000)
  },
  methods: {
    getSysTime () {
      this.sysTimeConfig = [new Date().toLocaleTimeString('chinese', { hour12: false }), new Date().toLocaleDateString()]
    },
    hideWindow (e) {
      switch (e.param) {
        case "startMenu":
          this.openWindow['startMenu'] = false;
          break
      }
    },
    clickRightMenu (e) {
      console.log(e)
    },
    clickTaskbar (e) {
      switch (e) {
        case "startMenu":
          this.openWindow.startMenu = !this.openWindow.startMenu;
          break
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.getSysTime)
  }
};
</script>
<style lang="scss" scoped>
.screen {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: url('../assets/wallpaper.jpg') no-repeat center;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  .desktop-content {
    flex: 1;
    box-sizing: border-box;
  }
  .desktop-taskbar {
    width: inherit;
    background: rgba($color: #fff, $alpha: 0.3);
    cursor: default;
    position: relative;
    z-index: 2;
    .taskbar-left {
      float: left;
      position: relative;
      .taskbar-startmenu {
        width: 500px;
        height: 500px;
        border: 1px solid #fff;
        background: rgba($color: #fff, $alpha: 0.2);
        position: absolute;
        top: -500px;
        z-index: 1;
      }
      .taskbar-left-ul {
        li {
          display: inline-block;
          padding: 10px;
          transition: all 0.15s;
          i {
            font-size: 20px;
          }
          &:hover {
            color: #fff;
            background-color: rgba($color: #fff, $alpha: 0.2);
            opacity: 0.7;
          }
        }
      }
    }
    .taskbar-right {
      float: right;
      position: relative;
      .taskbar-right-ul {
        display: flex;
        justify-content: center;
        li {
          display: inline-block;
          padding: 10px;
          transition: all 0.15s;
          &:last-child {
            margin-left: 5px;
            padding: 10px 4px;
            width: 0;
            background: rgba($color: #fff, $alpha: 0.08);
            box-shadow: 7px 3px 15px rgba(0, 0, 0, 0.07);
          }
          &.sysTime {
            padding: 0;
          }
          .sysTime-div {
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: scale(0.8, 0.8) translateZ(0);
          }
          i {
            font-size: 14px;
          }
          &:hover {
            color: #fff;
            background: rgba($color: #fff, $alpha: 0.2);
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>
