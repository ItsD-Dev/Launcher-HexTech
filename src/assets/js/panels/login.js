/**
 * @author Luuxis
 * @license CC-BY-NC 4.0 - https://creativecommons.org/licenses/by-nc/4.0/
 */

'use strict';

class Login {
    static id = "login";
    async init(config) {
        this.config = config;
        this.config.online ? this.getOnline() : this.getOffline()
    }

    getOnline() {
        document.querySelector('.login-text p').innerHTML = 'Un compte Minecraft est requis pour jouer.';
    }

    getOffline() {
        let offlineBTN = document.querySelector('.offline');
        document.querySelector('.login-text p').innerHTML = 'Un compte Minecraft ou un pseudo est requis pour jouer.';
        document.querySelector('.offline').style.display = 'block';

        offlineBTN.addEventListener('click', () => {
            document.querySelector('.tab-login').style.display = 'none';
            document.querySelector('.tab-login-offline').style.display = 'block';
        })
    }
}
export default Login;