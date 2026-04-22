export interface User {
  id: number;
  name: string;
  email: string;
  role_id: number;
  region_id: number | null;
  phone: string | null;
  bio: string | null;
  role?: {
    id: number;
    name: string;
  };
  region?: {
    id: number;
    name: string;
  };
}

export type UserResponse = Omit<User, 'role' | 'region'>;
