import { sleep, group } from "k6";
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
    { target: 34, duration: "3m" },
    { target: 50, duration: "2m" },
    { target: 50, duration: "2m" },
    { target: 20, duration: "3m" },
    { target: 0, duration: "1m" },
  ],
  thresholds: {},
};

export default function main() {
  let response;

  group("page_2 - https://ufa.frfrstaging.ru/", function () {
    response = http.get("https://ufa.frfrstaging.ru/", {
      headers: {
        "upgrade-insecure-requests": "1",
        "sec-ch-ua":
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
      },
    });
    response = http.get(
      "https://ufa.frfrstaging.ru/api/marketing/promocode_current/",
      {
        headers: {
          "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
          newrelic:
            "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiYzEyZjAxNGE5OTVhOGMxYiIsInRyIjoiYjljOGE3Y2UxZDI4OTdlMzFiYjg5MzE4NDBiMTVjOTAiLCJ0aSI6MTYzNTc1MzU1OTYzNX19",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          traceparent:
            "00-b9c8a7ce1d2897e31bb8931840b15c90-c12f014a995a8c1b-01",
          tracestate:
            "3256965@nr=0-1-3256965-272141630-c12f014a995a8c1b----1635753559635",
        },
      }
    );
    response = http.get("https://ufa.frfrstaging.ru/api/basket/items/", {
      headers: {
        "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
        newrelic:
          "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiOTFkZmY2MTg2ODk5NDIyYiIsInRyIjoiMWI1OTBmZGQ1YzNhMmJhNDc3YWNjNTcwYmQwYzUzOTAiLCJ0aSI6MTYzNTc1MzU1OTYzNn19",
        "sec-ch-ua":
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        traceparent: "00-1b590fdd5c3a2ba477acc570bd0c5390-91dff6186899422b-01",
        tracestate:
          "3256965@nr=0-1-3256965-272141630-91dff6186899422b----1635753559636",
      },
    });
    response = http.get(
      "https://ufa.frfrstaging.ru/api/marketing/banners-list/city/1/",
      {
        headers: {
          "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
          newrelic:
            "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiNzNmNmRiODE1ZjgxOTNiMSIsInRyIjoiNDBiNDI3YjM0ZDU0N2M5MGU1Y2Q0ZTZjZDhhZDBjZDAiLCJ0aSI6MTYzNTc1MzU1OTcyN319",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          traceparent:
            "00-40b427b34d547c90e5cd4e6cd8ad0cd0-73f6db815f8193b1-01",
          tracestate:
            "3256965@nr=0-1-3256965-272141630-73f6db815f8193b1----1635753559727",
        },
      }
    );
    response = http.get(
      "https://ufa.frfrstaging.ru/api/marketing/popups/?_=1635753559385",
      {
        headers: {
          accept: "*/*",
          "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
          "x-requested-with": "XMLHttpRequest",
          newrelic:
            "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiNWQ4NDg0ZTk1MWI5ZjFjZSIsInRyIjoiNTg0YmVmNTk3ZGUxMzIxYWYwODM5NzY1NDU2YTJmYjAiLCJ0aSI6MTYzNTc1MzU1OTkzOX19",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          traceparent:
            "00-584bef597de1321af0839765456a2fb0-5d8484e951b9f1ce-01",
          tracestate:
            "3256965@nr=0-1-3256965-272141630-5d8484e951b9f1ce----1635753559939",
        },
      }
    );
    response = http.get("https://ufa.frfrstaging.ru/api/auth/status/", {
      headers: {
        "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
        newrelic:
          "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiMzZjNjVkODQ4ZTNlNWE1YyIsInRyIjoiYzRiYTkxYzM2NjM4NWM4OTkxYTYwMWRlZDc5YjRiZjAiLCJ0aSI6MTYzNTc1MzU2MDAzNX19",
        "sec-ch-ua":
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        traceparent: "00-c4ba91c366385c8991a601ded79b4bf0-36c65d848e3e5a5c-01",
        tracestate:
          "3256965@nr=0-1-3256965-272141630-36c65d848e3e5a5c----1635753560035",
      },
    });
    response = http.get("https://ufa.frfrstaging.ru/api/basket/items/", {
      headers: {
        "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
        newrelic:
          "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiYzdjMDUyMDU5YWM3ZjYyOCIsInRyIjoiOTk2NTY4NDNiMDYwN2NmNzI2NDliYjU5N2I4NmMwODAiLCJ0aSI6MTYzNTc1MzU2MDA0NH19",
        "sec-ch-ua":
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        traceparent: "00-99656843b0607cf72649bb597b86c080-c7c052059ac7f628-01",
        tracestate:
          "3256965@nr=0-1-3256965-272141630-c7c052059ac7f628----1635753560044",
      },
    });
    sleep(0.9);
    response = http.get(
      "https://ufa.frfrstaging.ru/api/marketing/propositions/?_=1635753559386",
      {
        headers: {
          accept: "*/*",
          "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
          "x-requested-with": "XMLHttpRequest",
          newrelic:
            "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiNzkwYTQ3MDc2MDYwZjg1YyIsInRyIjoiZmMzMzI2NDg3NGRlZmRkNjVmYzJiYWNjODY0NWViZjAiLCJ0aSI6MTYzNTc1MzU2MDkzMX19",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          traceparent:
            "00-fc33264874defdd65fc2bacc8645ebf0-790a47076060f85c-01",
          tracestate:
            "3256965@nr=0-1-3256965-272141630-790a47076060f85c----1635753560931",
        },
      }
    );
    response = http.get("https://ufa.frfrstaging.ru/api/basket/items/", {
      headers: {
        "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
        newrelic:
          "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiMjVmYjhiMTkxYmEwYTAyYSIsInRyIjoiNjM0ZDNhZTVmYmQ2ZWViYjQ2Y2NkMDczM2JkZDJkMTAiLCJ0aSI6MTYzNTc1MzU2MTIxNX19",
        "sec-ch-ua":
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        traceparent: "00-634d3ae5fbd6eebb46ccd0733bdd2d10-25fb8b191ba0a02a-01",
        tracestate:
          "3256965@nr=0-1-3256965-272141630-25fb8b191ba0a02a----1635753561215",
      },
    });
    response = http.get(
      "https://ufa.frfrstaging.ru/basket/add/?newbasketitem=53148&_=1635753559387",
      {
        headers: {
          accept: "*/*",
          "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
          "x-requested-with": "XMLHttpRequest",
          newrelic:
            "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiZWZiMDAwZGVmNzRmNWViMyIsInRyIjoiYTJkNzg0MTAxZDIzNjBlN2IyM2I5ZTVkZTE1OWVhNjAiLCJ0aSI6MTYzNTc1MzU2MzQwMH19",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          traceparent:
            "00-a2d784101d2360e7b23b9e5de159ea60-efb000def74f5eb3-01",
          tracestate:
            "3256965@nr=0-1-3256965-272141630-efb000def74f5eb3----1635753563400",
        },
      }
    );
    response = http.get("https://ufa.frfrstaging.ru/api/basket/items/", {
      headers: {
        "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
        newrelic:
          "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiYzZlOGRkYjczNzdiOTc2YyIsInRyIjoiNTM5MzE1ZDM4ZGUwMzMzM2Y5YWVmMTgzNDQyMDFlYTAiLCJ0aSI6MTYzNTc1MzU2MzU2NH19",
        "sec-ch-ua":
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        traceparent: "00-539315d38de03333f9aef18344201ea0-c6e8ddb7377b976c-01",
        tracestate:
          "3256965@nr=0-1-3256965-272141630-c6e8ddb7377b976c----1635753563564",
      },
    });
    response = http.get(
      "https://ufa.frfrstaging.ru/basket/add/?newbasketitem=53148&_=1635753559388",
      {
        headers: {
          accept: "*/*",
          "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
          "x-requested-with": "XMLHttpRequest",
          newrelic:
            "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiOTMxNWM4NTQyNzkwMTBhNSIsInRyIjoiNTNlY2YyNDQ0YTJiMDc2NDc5M2IyZDY4YTQ4MDhjZDAiLCJ0aSI6MTYzNTc1MzU2MzczMX19",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          traceparent:
            "00-53ecf2444a2b0764793b2d68a4808cd0-9315c854279010a5-01",
          tracestate:
            "3256965@nr=0-1-3256965-272141630-9315c854279010a5----1635753563731",
        },
      }
    );
    response = http.get("https://ufa.frfrstaging.ru/api/basket/items/", {
      headers: {
        "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
        newrelic:
          "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiNjYxNDBhMzBhYTdlODU4YiIsInRyIjoiZDg5ZmE5MTYxNDg2OWRmMmFjNDQ2OGFlYmQ3ZTdjYTAiLCJ0aSI6MTYzNTc1MzU2Mzg1OH19",
        "sec-ch-ua":
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        traceparent: "00-d89fa91614869df2ac4468aebd7e7ca0-66140a30aa7e858b-01",
        tracestate:
          "3256965@nr=0-1-3256965-272141630-66140a30aa7e858b----1635753563858",
      },
    });
    response = http.get(
      "https://ufa.frfrstaging.ru/basket/add/?newbasketitem=53148&_=1635753559389",
      {
        headers: {
          accept: "*/*",
          "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
          "x-requested-with": "XMLHttpRequest",
          newrelic:
            "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiYjJjYTk2MmQyOWFhZTUwYiIsInRyIjoiMzg4NWZjMjliYzBmYjg3NWE0NWE3ZmYwMjk3NmI5MzAiLCJ0aSI6MTYzNTc1MzU2NDY5Mn19",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          traceparent:
            "00-3885fc29bc0fb875a45a7ff02976b930-b2ca962d29aae50b-01",
          tracestate:
            "3256965@nr=0-1-3256965-272141630-b2ca962d29aae50b----1635753564692",
        },
      }
    );
    response = http.get("https://ufa.frfrstaging.ru/api/basket/items/", {
      headers: {
        "x-newrelic-id": "VwQCV19VDRACU1BTAwkAXlA=",
        newrelic:
          "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMyNTY5NjUiLCJhcCI6IjI3MjE0MTYzMCIsImlkIjoiYzhhYzc4ZWE2ZDg5YjI3OCIsInRyIjoiNjQ3MWJjZjBhNTg4OWNlYjJiZWNjZWE3M2VmNjQyNDAiLCJ0aSI6MTYzNTc1MzU2NDgxNH19",
        "sec-ch-ua":
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        traceparent: "00-6471bcf0a5889ceb2beccea73ef64240-c8ac78ea6d89b278-01",
        tracestate:
          "3256965@nr=0-1-3256965-272141630-c8ac78ea6d89b278----1635753564814",
      },
    });
  });

  group("page_3 - https://ufa.frfrstaging.ru/ru/basket/", function () {
    response = http.get("https://ufa.frfrstaging.ru/ru/basket/", {
      headers: {
        "upgrade-insecure-requests": "1",
        "sec-ch-ua":
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
      },
    });

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/auth/me/",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/points/",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/client/addresses/",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/payment_methods/",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/points/",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "x-csrftoken",
          "access-control-request-method": "GET",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/client/addresses/",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "x-csrftoken",
          "access-control-request-method": "GET",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/payment_methods/",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "x-csrftoken",
          "access-control-request-method": "GET",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/available_time/?delivery_at_client=false",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/available_time/?delivery_at_client=false",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "x-csrftoken",
          "access-control-request-method": "GET",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/change_choices/?amount=600",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/change_choices/?amount=600",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "x-csrftoken",
          "access-control-request-method": "GET",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );

    response = http.post(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/set_time/",
      '{"delivery_at_client":false,"delivery_at":"2021-11-01T15:09"}',
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/set_time/",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "content-type,x-csrftoken",
          "access-control-request-method": "POST",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );

    response = http.post(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/set_number_of_persons/",
      '{"number":3}',
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/set_number_of_persons/",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "content-type,x-csrftoken",
          "access-control-request-method": "POST",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/available_time/?delivery_at_client=false",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.post(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/set_time/",
      '{"delivery_at_client":false,"delivery_at":"2021-11-01T15:09"}',
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.post(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/set_delivery_method/",
      '{"delivery_method":"pickup","point_id":1}',
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/set_delivery_method/",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "content-type,x-csrftoken",
          "access-control-request-method": "POST",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/available_time/?delivery_at_client=false",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.post(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/set_delivery_method/",
      '{"point_id":1,"delivery_method":"pickup"}',
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.post(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/set_time/",
      '{"delivery_at_client":false,"delivery_at":"2021-11-01T13:29"}',
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/available_time/?delivery_at_client=false",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.post(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/set_time/",
      '{"delivery_at_client":false,"delivery_at":"2021-11-01T13:29"}',
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.post(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/order_checkout/",
      '{"number_of_persons":3,"payment_method":"cash","notes":"","change":0,"gifts":[]}',
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/order_checkout/",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "content-type,x-csrftoken",
          "access-control-request-method": "POST",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/auth/me/",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/basket/",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/client/",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/orders/7022169/",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/client/",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "x-csrftoken",
          "access-control-request-method": "GET",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/ufa/orders/7022169/",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "x-csrftoken",
          "access-control-request-method": "GET",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );

    response = http.get(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/bet/get_match/7022169/?mobile=79871359816",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "x-csrftoken":
            "eef1YcorU2vzfUT1l4opdNBLvfbnkNDXwcSzX8FRiUybJ0WdEXchNPnBc5946M6a",
          "sec-ch-ua":
            '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
        },
      }
    );

    response = http.options(
      "https://api.frfrstaging.ru/v3/6faa1960-0f60-44c2-8e31-9918f2179c64/bet/get_match/7022169/?mobile=79871359816",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-headers": "x-csrftoken",
          "access-control-request-method": "GET",
          origin: "https://ufa.frfrstaging.ru",
          "sec-fetch-mode": "cors",
        },
      }
    );
  });
}