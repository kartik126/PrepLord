export const localBaseUrl = 'https://preplord.vercel.app/';
export const localImgUrl = 'https://preplord.vercel.app/';
export const BaseUrl = 'https://preplord.com/';
export const ImgUrl = 'https://preplord.com/';

const apiClient = {
  Urls: {
    localImgUrl,
    login:'api/login',
    getExams:'api/exams',
    getInstitutes:'api/get-institutes',
    getPapers:'api/previous-year-papers'
  },

  make: function (url, method, params) {
    console.log("apiclient", localBaseUrl + url, params);
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    if (params?.authToken) {
      headers['Authorization'] = `Bearer ${params?.authToken}`
    }

    return fetch(localBaseUrl + url, {
      method,
      headers,
      body: JSON.stringify(params),
    }).then(response => response.json());

  },

  post: function (url, params) {
    return this.make(url, 'POST', params);
  },

  get: function (url, params) {
    console.log("apiclient", localBaseUrl + url, params);
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    if (params?.authToken) {
      headers['Authorization'] = `Bearer ${params.authToken}`
    }
    return fetch(localBaseUrl + url, {
      method: 'GET',
      headers,
    }).then(response => response.json())
      .catch(error => {
        console.log('api client-------->', error);
        return {
          success: false,
          message: error?.message || error || 'Something went wrong!',
        };
      })
  },
};

export default apiClient;