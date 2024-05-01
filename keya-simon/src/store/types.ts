export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
  }
  
  export interface BlogState {
    posts: BlogPost[];
    postDetail: BlogPost | null;
  }
  
  export interface AdminState {
    users: User[];
    posts: BlogPost[];
  }
  
  export interface AppState {
    auth: AuthState;
    blog: BlogState;
    admin: AdminState;
  }