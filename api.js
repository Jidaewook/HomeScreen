import axios from "axios";

const makeRequest = (path) => 
    // axios.get(`https://pure-retreat-35508.herokuapp.com${path}`);
    axios.get(`http://localhost:1337${path}`)

const getAnything = async (path, params = {}) => {
    try{
        const {
            data: { results },
            data
        } = await makeRequest(path, params);
        return [results || data, null];
    } catch (e) {
        console.log(e);
        return [null, e];
    }
};



export const lectureApi = {
    ncs: () => getAnything("/ncs"),
    psat: () => getAnything("/psats"),
    ncsDetail: ncsModelId => getAnything(`/ncs/${ncsModelId}`),
    psatDetail: id => getAnything(`/psats/${id}`)
};

export const noticeApi = {
    notice: () => getAnything("/notices"),
    noticeDetail: id => getAnything(`/notices/${id}`)
};

// export const bbsApi = {
//     bbs: () => getAnything("/bbs"),
//     bbsDetail: id => getAnything(`/bbs/${id}`)
// };

// export const pageApi = {
//     page: () => getAnything("/profile"),
//     pageDetail: id => getAnything(`/profile/${id}`)
// };

export const apiImage = path => `http://localhost:1337${path}`;
