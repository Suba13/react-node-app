export default function (state = data, action) {
      switch (action.type) {
          case "LOAD_ADMIN_ORDER":
              return action.payload;
              case "MODIFY_STATUS":
              return state.map((n) => {
                if (n.id == action.payload.id) {
                    return action.payload;
                }
                return n;
            });
          default:
              return state;
              case "ADMIN_ITEM_STATUS":

      }
  }
  
  const data = [
      
  ];
  
  
  