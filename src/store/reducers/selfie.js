import Selfie from "../../models/Selfie";


const initialState = {
    images: []
};

const selfieReducer = (state=initialState, action) => {

    const newSelfie = new Selfie(1, action.data);
    return {
        images: state.images.concat(newSelfie)
    };
};

export default selfieReducer;
