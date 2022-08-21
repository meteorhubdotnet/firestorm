Package.describe({
    name: 'meteorhubdotnet:firestorm',
    summary: 'Rapid Development Framework For Meteor With Blaze And Iron Router',
    version: '1.0.13',
    git: 'https://github.com/meteorhubdotnet/firestorm'
});

Package.onUse(function (api) {

    api.versionsFrom('METEOR@2.7.3');
    api.use('accounts-password');
    api.use('less');
    api.use('check');
    // api.use('tmeasday:check-npm-versions');
    // api.use('meteorhubdotnet:bureaucrat');
    api.use('meteorhubdotnet:firestorm-iron-router@1.0.7');
    api.use('meteorhubdotnet:firestorm-helpers@1.0.7');
    api.use('meteorhubdotnet:firestorm-useraccounts-core@1.0.7');
    api.use('meteorhubdotnet:firestorm-iron-useraccounts@1.0.7');
    api.use('meteorhubdotnet:firestorm-useraccounts-unstyled@1.0.7');
    api.use('aldeed:collection2');
    // api.use('meteorhubdotnet:collection-helpers');

});

Npm.depends({ 'simpl-schema':'1.12.3' });
