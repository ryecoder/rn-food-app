import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer r04w97ZXO-7hsL7GANWzNtmV-dB7pfBSefS5YxwqFvvk2nDPXhaInf1Mj-wUZox-Q6ypIqMXIsVg3JOCO7PIzuqQ1u-_OG4BEuA06E07cb1GyhG3BKRV03JXuDHRY3Yx'
    }
})