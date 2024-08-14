import axios from "axios";

const createBackendServer = (baseURL) => {
  const api = axios.create({
    baseURL: `${baseURL}`,
    withCredentials: false,
    headers: {
      Accept: "application/json",
    },
    timeout: 60 * 1000,
  });

  //Interceptor
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // Change 'your_token_key' to the actual key used in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const message = error?.response?.data?.message;
      error.message = message ?? error.message;
      if (error?.response?.data?.errors)
        error.errors = error?.response?.data?.errors;
      return Promise.reject(error);
    }
  );

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  /*==========    GET REQUESTS    ==========*/

  const getProfile = async (id) => await api.get(`/api/user/${id}`);

  /*==========    POST REQUESTS JTC   ==========*/
  const authLogin = async (body) => api.post("ecomuser/login", body);

  const authLogout = async (body) => api.post("logout", body);

  const authVerify = async (body) => api.post("ecomuser/otp-verify", body);
  const authRegister = (body) => api.post("ecomuser/register", body);
  const authResend = (body) => api.post("ecomuser/resend-otp", body);
  const authForget = async (body) =>
    api.post("ecomuser/sendPasswordResetLinkEmailEcom", body);
  const authResetPassword = async (body) =>
    api.post("ecomuser/resetPasswordEcom", body);
  const authChangePassword = async (body) =>
    api.post("ecomuser/change-password", body);

  const cartCheckout = async (body) => api.post("shopjts/checkout", body);

  const removeProductFromCart = async (body) =>
    api.post("shopjts/clear_cart_id", body);

  const updateProfile = async (body) =>
    api.post("ecommerceProfile/updateProfileEcom", body);

  const addToCart = async (body) => api.post("shopjts/add_to_cart", body);

  const clearCart = async () => api.post("shopjts/clear_cart");

  const favouriteProduct = async (body) =>
    api.post("shopjts/updateShopFavourite", body);
  const orderConfirm = async (body) => api.post("ecomuser/orderConfirm", body);

  const authResendForgot = async (body) =>
    api.post("ecomuser/resend-otp-not-valid", body);

  const jtcTokenCheckout = async (body) =>
    api.post("buy-jtc-token-payment", body);

  const jtcTokenConfirm = async (body) =>
    api.post("buy-jtc-token-confirm", body);

  /*==========    GET REQUESTS  JTC ==========*/

  const getAllProductWithCategory = async (
    userId,
    sort_by,
    filterMin,
    filterMax
  ) =>
    await api.get(
      `shopjts/category_shop?userId=${userId}&filter[sort_by_price]=${sort_by}&filter[min]=${filterMin}&filter[max]=${filterMax}`
    );

  const getAllProductSearch = async (search) =>
    await api.get(`shopjts/category_shop?filter[search]=${search}`);

  const getAllProductSlider = async (sliderFilter, sliderRange) =>
    await api.get(`shopjts/category_shop?filter[max]=${sliderFilter}`);

  // const getAllProductSortByPrice = async (filter) =>
  //   await api.get(`shopjts/category_shop?filter[sort_by_price]=${filter}`);

  const getProductDetails = async (id,userId) =>
    await api.get(`shopjts/shop_product/${id}?user_id=${userId}`);
  const getViewCart = async () => await api.get(`shopjts/view_cart`);
  const getFavouriteProduct = async () =>
    await api.get(`shopjts/getShopFavourite`);
  const getOrderHistory = async () => await api.get(`shopjts/my_order`);
  const getCoupon = async () => await api.get(`couponUser`);
  const getReferral = async () => await api.get(`referralApi`);
  const getUserWallet = async () => await api.get(`userWallet`);
  const getStoreDiscountBanner = async () => await api.get(`storeDiscount`);
  const getNotify = async () => await api.get(`notification`);
  const getJtcToken = async () => await api.get(`tokenPlan`);

  const authRegisterReferral = ({ body, code }) =>
    api.post(`auth/register?referralCode=${code}`, body);
  const updateUser = ({ id, body }) => api.put(`user/update/${id}`, body);
  const create_booking = async (body) => api.post("booking", body);
  const confirmBooking = async (body) => api.post(`booking/confirmed`, body);
  const giveRating = async (body) => api.post(`rating`, body);
  const authUpdatePassword = async (body) =>
    api.put("auth/update-password", body);

  const getStores = async (id) => api.get(`/store?user_Id=${id}`);

  const getStoreDetails = async (id) => api.get(`store/slug/${id}?type=store`);
  const getUserBookings = async (id) => api.get(`booking/user/${id}`);
  const cancelBooking = async (body) => api.post(`booking/cancelled`, body);

  const getStoreSlot = ({ id, duration, staff_Id }) =>
    api.get(`store/slots/${id}?duration=${duration}&staff_Id=${staff_Id}`);

  const getStoreSlotwithoutStaff = ({ id, duration }) =>
    api.get(`store/slots/${id}?duration=${duration}
    `);
  const addFavorite = (body) => api.post(`user/favourite-add`, body);
  const searchSalon = (body) => api.post(`store/search`, body);
  const generateUserReferral = (id) => api.post(`user/referral/${id}`);
  const getUserReferral = (id) => api.get(`user/referral/${id}`);
  //Returning all the API
  return {
    getStoreSlot,
    getStoreDetails,
    getStores,
    authLogin,
    authVerify,
    authRegister,
    authRegisterReferral,
    authForget,
    authUpdatePassword,
    getProfile,
    create_booking,
    confirmBooking,
    getStoreSlotwithoutStaff,
    getUserBookings,
    cancelBooking,
    addFavorite,
    getUserReferral,
    updateUser,
    searchSalon,
    generateUserReferral,
    giveRating,
    authResend,
    authResetPassword,
    getAllProductWithCategory,
    getProductDetails,
    addToCart,
    getViewCart,
    cartCheckout,
    authLogout,
    clearCart,
    favouriteProduct,
    getFavouriteProduct,
    getOrderHistory,
    getCoupon,
    authChangePassword,
    getReferral,
    getUserWallet,
    getStoreDiscountBanner,
    updateProfile,
    removeProductFromCart,
    orderConfirm,
    authResendForgot,
    getNotify,
    getJtcToken,
    jtcTokenCheckout,
    jtcTokenConfirm,
    getAllProductSearch,
    // getAllProductSortByPrice,
    getAllProductSlider,
  };
};

const apis = createBackendServer(process.env.REACT_APP_SERVER_URL);

export default apis;