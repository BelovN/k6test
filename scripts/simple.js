import {group, sleep} from "k6";
import http from "k6/http";

export const options = {
  ext: {
    loadimpact: {
      distribution: {
        "amazon:fr:paris": { loadZone: "amazon:fr:paris", percent: 100 },
      },
    },
  },
  stages: [
    { target: 20, duration: "10s" },
    // { target: 2, duration: "2m" },
    // { target: 3, duration: "2m" },
    // { target: 20, duration: "3m" },
    // { target: 0, duration: "1m" },
  ],
};

const userCredentials = JSON.parse(open("./data.json"));

// Токены для авторизации
let csrfToken = undefined
const apiLoginUrl = "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/auth/sign_in/"

function saveCSRFToken(response){

  const csrftoken2 = response["cookies"]["csrftoken2"]

  if (typeof csrftoken2 !== "undefined") {
    csrfToken = csrftoken2[0]["value"]
  }
}

let defaultHeaders = {
  accept: "application/json, text/plain, */*",
  "content-type": "application/json",
  "sec-ch-ua":
      '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
  "sec-ch-ua-mobile": "?0",
}

function authenticate(userCredentials){
  // Пытаемся получить сохраненный токен
  if (typeof csrfToken !== "undefined"){
    return csrfToken
  }

  // Запрос на авторизацию
  const response = http.post(
      apiLoginUrl,
      JSON.stringify(userCredentials),
      {
        headers: defaultHeaders
      }
  )

  // Возвращаем сохраненный токен
  saveCSRFToken(response)
  return csrfToken
}

export default function () {

  const usersCount = userCredentials.users.length

  // Каждому VU по одному аккаунту, для избежания конфликтов
  const userCredential = userCredentials.users[(__VU - 1) % usersCount];

  const csrfToken = authenticate(userCredential)

  console.log("VU: ", __VU, "ITER: ", __ITER, "t: ", JSON.stringify(userCredential), JSON.stringify(csrfToken))

  sleep(1)
}