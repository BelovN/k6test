import http from "k6/http";
import {defaultHeaders} from "./config.js";
import {check} from 'k6';

export let csrfToken; // Токен для авторизации
export let session; // Текущая сессия

// Получение данных пользователя для авторизации
const usersCredentials = JSON.parse(open("./data/stagingUsers.json"));
const usersCount = usersCredentials.users.length


function saveCSRFToken(response) {

    const responseCSRFtoken = response["cookies"]["csrftoken2"]

    if (responseCSRFtoken) {
        csrfToken = responseCSRFtoken[0]["value"]
        defaultHeaders["x-csrftoken"] = csrfToken
    }
}

function saveSession(response) {

    const responseSession = response["cookies"]["sessionid"]

    if (responseSession) {
        session = responseSession[0]["value"]
        defaultHeaders["sessionid"] = session
    }
}

export function auth() {
    // Пытаемся получить сохраненный токен
    if (typeof csrfToken !== "undefined") {
        return
    }

    // Каждому VU по одному аккаунту, для избежания конфликтов
    const userCredentials = usersCredentials.users[(__VU - 1) % usersCount]

    // console.log(JSON.stringify(userCredentials))

    // Запрос на авторизацию
    let response = http.post(
        "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/auth/sign_in/",
        JSON.stringify(userCredentials),
        {
            headers: defaultHeaders,
        }
    )

    check(response, {
        'Status is 200 OK': (r) => r.status === 200,
        'Is correct user mobile': (r) => r.json().mobile === userCredentials.phone,
    });


    // Сохраняем сессию и токен
    saveCSRFToken(response)
    saveSession(response)

    return response
}