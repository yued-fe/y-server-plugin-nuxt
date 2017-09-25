const url = require('url');

const nuxtRef = require('nuxt');

const Nuxt = nuxtRef.Nuxt;
const Builder = nuxtRef.Builder;

/**
 * 请求地址修复中间件
 * SwitchyOmega 将 localsite.com 指向到 locahost:8080 时得到的 url 包含 host,
 * nuxt 获取的 req.url 不能包含 host, 所以需要 req.url 进行修复
 * 调用 next.render 之前需要调用此方法对 req.url 进行修复
 * @param {Request} req 请求实例
 * @param {Resopnse} res 响应实例
 * @param {Function} next 下一步回调
 */
function reqUrlFixMiddleware(req, res, next) {
  req.url = url.parse(req.originalUrl).path;
  next();
}

/**
 * nuxt插件
 * @param {Object} options 配置
 * @param {Object} options.nuxtConfig nuxt配置
 * @return {Function} 插件安装方法
 */
module.exports = function (options) {
  if (!options) {
    options = {};
  }

  const nuxtConfig = options.nuxtConfig;

  return function (app) {
    const nuxt = new Nuxt(nuxtConfig);

    app.use(reqUrlFixMiddleware);
    app.use(nuxt.render);

    if (process.env.NODE_ENV !== 'production') {
      const builder = new Builder(nuxt);
      builder.build()
        .catch((error) => {
          console.error(error);
          process.exit(1);
        });
    }
  };
};
