const getBaseUrl = () => {
    const { hostname } = window.location;
    if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
      return 'http://localhost:3000/api'; // Development API base URL
    } else {
      return 'http://192.168.46.191/api'; // Production API base URL
    }
  };
  
export const API_BASE_URL = getBaseUrl();