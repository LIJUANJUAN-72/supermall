module.exports = {
  transpileDependencies: true,
  // 配置用户的别名
  configureWebpack :{
    // resolve解决路径相关的问题
    resolve : {
      // 这是后缀的缩写，一般默认配置jss。css。vue，所以这不用
      // extensions : [],
      // 配置别名
      alias : {
        // '@' : scr,  这个是内部默认配过的。
        // vue2 要写src/assets，vue3可以直接写@/assets
        // 这样以后配置好了以后就不用写.什么了。这个配置项目都需要配置
        'assets' : '@/assets',
        'common' : '@/common',
        'components' : '@/components',
        'network' : '@/network',
        'view' : '@/view',

        // router,和store，都不配置，因为所有文件都可以通过this.$router,this.$store拿到

      }
    }
  }
}
