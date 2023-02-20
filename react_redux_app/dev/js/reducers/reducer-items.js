export default function (state = data, action) {
    switch (action.type) {
    
        case "LOAD":
            console.log("payload",action.payload)
            return action.payload;

        default:
            return state;
    }
}

const data = [];