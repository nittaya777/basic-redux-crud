const postReducer = (state = [], action) => {
  //ทำการ dispatch action เข้ามา แล้วเช็ค ถ้าแอคชั่นตรงก็จะ return data
  switch (action.type) {
    case "ADD_POST":
      return state.concat([action.data]);
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.id);
    case "EDIT_POST":
        //สำหรับนำข้อมูล ไปแสดงในฟอร์ม
      return state.map((post) =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE":
        return state.map((post)=>{
            if(post.id === action.id){
                return {
                    ...post,
                    title: action.data.newTitle,
                    message: action.data.newMessage,
                    editing: !post.editing
                }
            }else{
                return post;
            }
        })
    default:
      return state;
  }
};
export default postReducer;
