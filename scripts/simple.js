import {sleep} from "k6";
import {auth, session, csrfToken} from "./auth.js"


export const options = {
    ext: {
        loadimpact: {
            distribution: {
                "amazon:fr:paris": {loadZone: "amazon:fr:paris", percent: 100},
            },
        },
    },
    stages: [
        {target: 20, duration: "10s"},
    ],
};

export default function () {
    let response;

    // Аутентификация
    response = auth()

    sleep(0.1)
}