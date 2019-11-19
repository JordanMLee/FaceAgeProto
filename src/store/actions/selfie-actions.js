import * as FileSystem from 'expo-file-system';


export const ADD_SELFIE = 'ADD_SELFIE';

// export const addSelfie = (image) => {
//     return {type: SELFIE, data: {
//         image:image
//         }}
// };

export const addSelfie = (image) => {
    return async dispatch => {
        const fileName = image.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;
        try {
            await FileSystem.moveAsync({
                from: image,
                to: newPath
            });
        } catch(err) {
            console.log(err);
            throw err;
        }
        dispatch({
            type: ADD_SELFIE, selfieData: {
                image: newPath
            }
        });

    };

};
