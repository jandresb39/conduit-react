export interface UserProfile {
  id: number;
  username: string;
  email: string;
  bio: string | null;
  image: string | null;
  sessionToken: string | null;
}
