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
    }
];
