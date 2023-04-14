import "../scss/styles.scss";
import { setSearchModule } from "./search.js";
import { setLoginModule } from "./login.js";
import { setSignupModule } from "./signup.js";
import { setNavigationModule } from "./navigation.js";

// 페이지 새로고침
window.onpageshow = function (event) {
    if (event.persisted) {
        document.location.reload();
    }
};

const path = window.location.pathname;

switch (path) {
    case "/login":
        setLoginModule();
        break;
    case "/signup":
        setSignupModule();
        break;
}
setSearchModule();
setNavigationModule();
