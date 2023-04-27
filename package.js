Package.describe({
    name: 'meteorhubdotnet:firestorm',
    summary: 'Rapid Development Framework For Meteor With Blaze And Iron Router',
    version: '1.0.15',
    git: 'https://github.com/meteorhubdotnet/firestorm'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@2.11.0');
    api.use('accounts-password');
    api.use('less@4.0.0');
    api.use('check');
    api.use('meteorhubdotnet:firestorm-iron-router@1.0.15');
    api.use('meteorhubdotnet:firestorm-helpers@1.0.15');
    api.use('meteorhubdotnet:firestorm-useraccounts-core@1.0.15');
    api.use('meteorhubdotnet:firestorm-iron-useraccounts@1.0.15');
    api.use('meteorhubdotnet:firestorm-useraccounts-unstyled@1.0.15');
    api.use('aldeed:collection2@3.5.0');
});

Npm.depends({ 'simpl-schema':'3.4.1' });
