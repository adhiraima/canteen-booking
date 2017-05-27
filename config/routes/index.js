'use strict'

module.exports = [
    { method: 'GET', path: '/', handler: function(request, reply) {
                                                                    console.log('Welcome to hapi on node!!');
                                                                    reply('welcome to hapi on node!!')
                                                                  }
    },
    { method: 'GET', path: '/auth', handler: function (request, reply) {
                                                                          console.log('Auth handler');
                                                                          reply('auth handler');
                                                                       }
    },
    { method: 'GET', path: '/slots/{date}', handler: function (request, reply) {
                                                                                  console.log('slots handler');
                                                                                  reply('slots ' + request.params.date)
                                                                               }
    },
    {
    path: '/favicon.ico',
    method: 'GET',
    config: {
      auth: false,
      cache: {
        expiresIn: 1000*60*60*24*21
      }
    },
    handler: function(request, reply) {
      if (!options.path) {
        return reply().code(204).type('image/x-icon');
      }
      reply(null, fs.createReadStream('./images/favicon')).code(200).type('image/x-icon');
    }
  }
];
