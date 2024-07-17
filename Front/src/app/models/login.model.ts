export { Data, UserData, User }

interface Data {
    data: UserData
  }
  
interface UserData {
    user: User
  }
  
interface User {
    id: number
    name: string
    lastname: string
    biography: string
    username: string
    token: string
    profile_picture: string
    profile_picture_id: number
  }
  