import webpack from 'webpack';
import webpackConfig from '../../config/webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import connectHistoryApiFallback from 'connect-history-api-fallback';

export default (app, config) => {
    let proxyTable = config.proxyTable;
    let compiler = webpack(webpackConfig);

    let devMiddleware = webpackDevMiddleware(compiler, {
        publicPath : webpackConfig.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    let hotMiddleware = webpackHotMiddleware(compiler, {
        log : () => {}
    });

    compiler.plugin('compilation', (compilation) => {
        compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
            hotMiddleware.publish({ action: 'reload' });
            cb();
        })
    });

    Object.keys(proxyTable).forEach((context) => {
        let options = proxyTable[context];
        if(typeof options === 'string'){
            options = { target : options };
        }

        app.use(proxyMiddleware(context, options));
    });

    app.use(connectHistoryApiFallback());
    app.use(devMiddleware);
    app.use(hotMiddleware);

    devMiddleware.waitUntilValid(() => {
        console.log('> Listening at localhost:3000');
    });
}
