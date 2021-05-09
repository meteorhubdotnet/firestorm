Package.describe({
    name: 'meteorhubdotnet:firestorm',
    summary: 'Rapid Development Framework For Meteor With Blaze And Iron Router',
    version: '1.0.0',
    git: 'https://github.com/meteorhubdotnet/firestorm'
});

Package.onUse(function (api) {

    api.versionsFrom('METEOR@2.2');
    api.use('accounts-password');
    api.use('less');
    api.use('check');
    // api.use('tmeasday:check-npm-versions');
    // api.use('meteorhubdotnet:bureaucrat');
    api.use('meteorhubdotnet:iron-router');
    api.use('meteorhubdotnet:useraccounts-core');
    api.use('meteorhubdotnet:useraccounts-iron-routing');
    api.use('meteorhubdotnet:useraccounts-unstyled');
    api.use('aldeed:collection2-core');
    api.use('meteorhubdotnet:collection-helpers');

});

Npm.depends({ 'simpl-schema':'1.12.0' });
