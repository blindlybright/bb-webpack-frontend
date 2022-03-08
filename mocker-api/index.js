const delay = require('mocker-api/lib/delay');

const NO_WEBPACK_MOCKS = process.env.NO_MOCKS === 'true';

const proxy = {
    // Priority processing.
    _proxy: {
        proxy: {
            '/repos/(.*)': 'https://api.github.com/',
        },
        changeHost: true,
    },
    'GET /api/userinfo/:id': (req, res) => {
        console.log('-1--->', req.params);
        return res.json({
            id: req.params.id,
            username: 'kenny',
            sex: 6,
        });
    },
    'GET /api/:owner/:repo/raw/:ref/(.*)': (req, res) => {
        const { owner, repo, ref } = req.params;
        // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
        // owner => admin
        // repo => webpack-mock-api
        // ref => master
        // req.params[0] => add/ddd.md
        return res.json({
            id: 1,
            owner, repo, ref,
            path: req.params[0],
        });
    },
    'GET /api/user/list/:id/:type': (req, res) => {
        const { type } = req.params;
        if (type === 'webpack') {
            return res.status(403).json({
                status: 'error',
                code: 403,
            });
        }
        return res.json([
            {
                id: 1,
                username: 'kenny',
                sex: 6,
            }, {
                id: 2,
                username: 'kenny',
                sex: 6,
            },
        ]);
    },
    // 'GET /repos/hello': (req, res) => { // nb: will be hidden by previously gone mask
    //     console.log('/repos/hello:=>>>', req.params);
    //     return res.json({
    //         text: 'this is from mock server'
    //     });
    // },
    'GET /noRepos/hello': (req, res) => {
        console.log('/repos/hello:=>>>', req.params);
        return res.json({
            text: 'this is from mock server',
        });
    },

    'GET /api/jobs/:id': (req, res) => {
        return res.json({
            text: 'url: /api/jobs/:id',
        });
    },

    'GET /api/jobs': (req, res) => {
        return res.json({
            text: 'url: /api/jobs',
        });
    },
    'POST /api/login/account': (req, res) => {
        const { password, username } = req.body;
        if (password === '888888' && username === 'admin') {
            return res.json({
                status: 'ok',
                code: 0,
                token: 'sdfsdfsdfdsf',
                data: {
                    id: 1,
                    username: 'kenny',
                    sex: 6,
                },
            });
        } else {
            return res.json({
                status: 'error',
                code: 403,
            });
        }
    },
    'DELETE /api/user/:id': (req, res) => {
        console.log('--2-->', req.body);
        console.log('--3-->', req.params.id);
        res.send({ status: 'ok', message: 'user had been deleted！' });
    },
};

module.exports = (NO_WEBPACK_MOCKS ? {} : delay(proxy, 3000));
// module.exports = (NO_WEBPACK_MOCKS ? {} : proxy);
// module.exports = proxy;
