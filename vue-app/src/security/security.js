import Oidc from 'oidc-client'

var mgr = new Oidc.UserManager({
    authority: 'https://localhost:5443',
    client_id: 'js',
    redirect_uri: 'https://localhost:5000/callback',
    response_type: 'id_token token',
    scope: 'openid profile api1',
    post_logout_redirect_uri: 'https://localhost:5000/',
    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
})

export default mgr;