/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia';

Inertia.share({
  errors: (ctx) => {
    return ctx.session.flashMessages.get('errors');
  },
  authUser: (ctx) => {
    if (ctx.auth.user) {
      const { password, ...others } = ctx.auth.user
      return others;
    }
    return {}
  }
}).version(() => Inertia.manifestFile('public/assets/manifest.json'));
