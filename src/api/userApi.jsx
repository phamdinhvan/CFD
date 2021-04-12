export default {
  login: (data) => {
    return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer [Token]'
      },
    }).then((res) => res.json());
  },
  updateInfo: (data) => {
    let token = JSON.parse(localStorage.getItem("tokenUser"));
    return fetch(
      "http://cfd-reactjs.herokuapp.com/elearning/v4/profile/update",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`,
        },
      }
    ).then((res) => res.json());
  },
  getProfileCourse: () => {
    let token = JSON.parse(localStorage.getItem("tokenUser"));
    return fetch(
      "http://cfd-reactjs.herokuapp.com/elearning/v4/profile/course",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`,
        },
      }
    ).then((res) => res.json());
  },
  getProfilePayment: () => {
    let token = JSON.parse(localStorage.getItem("tokenUser"));
    return fetch(
      "http://cfd-reactjs.herokuapp.com/elearning/v4/profile/payment",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`,
        },
      }
    ).then((res) => res.json());
  },

  getDataHome: () => {
    return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer [Token]'
      },
    }).then((res) => res.json());
  },
};
