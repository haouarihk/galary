import { Links1 } from "../components/carousel/types";
import { ProfileImage } from "./pfp/types";

export interface User {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: string | null;
    twitter_username?: string | null;
    portfolio_url?: string | null;
    bio: string;
    location?: string | null;
    links: Links1;
    profile_image: ProfileImage;
    instagram_username?: string | null;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social1;
}
export interface Social1 {
    instagram_username?: string | null;
    portfolio_url?: string | null;
    twitter_username?: string | null;
    paypal_email?: null;
}
