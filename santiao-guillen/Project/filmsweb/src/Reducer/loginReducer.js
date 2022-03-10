const stateInitial = {
    avatar : [{
            "id": 1,
            "img": "https://i.ibb.co/9phTr5N/20190806-125857-01.jpg",
        }, {
            "id": 2,
            "img": "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
        }, {
            "id": 3,
            "img": "https://cdn.pixabay.com/photo/2021/01/18/08/32/naruto-5927441_960_720.png",
        }, {
            "id": 4,
            "img": "https://cdn.pixabay.com/photo/2022/02/08/08/50/alien-7001003_960_720.png",
        }, {
            "id": 5,
            "img": "https://cdn.pixabay.com/photo/2022/03/01/08/42/woman-7040836_960_720.jpg",
        }
    ],
    avatarChoosers: [],
    stateLogin: false,
}

export const loginReducer = (state = stateInitial, action) => {

    switch (action.type) {

        case '@avatar/chooseAvatar':
            let id = action.payload;
            let avatarSelect = state.avatar;
            let avatarData = avatarSelect.filter((avatar) => avatar.id === id);

        return state, {
            ...state,
            avatarChoosers: avatarData
        }

        case '@user/stateLogin':
        return state, {
            ...state,
            stateLogin: action.payload
        }
        

        default:
            return state
    }
}

export const chooseAvatar = (id) => {
    return {
        type: '@avatar/chooseAvatar',
        payload: id
    }
}

export const stateLogin = (value) => {
    return {
        type: '@user/stateLogin',
        payload: value
    }
}