import { ProfileImage } from "../../profile/pfp/types";
import { User } from "../../profile/types";

export interface Item {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at?: string | null;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: string | null;
    alt_description?: string | null;
    breadcrumbs?: null;
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections?: null;
    sponsorship?: Sponsorship | null;
    topic_submissions: TopicSubmissions;
    user: User;
}

export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}
export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface Sponsorship {
    impression_urls?: (string)[] | null;
    tagline: string;
    tagline_url: string;
    sponsor: SponsorOrUser;
}

export interface SponsorOrUser {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: null;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links1;
    profile_image: ProfileImage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
}
export interface Links1 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface Social {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: null;
}
export interface TopicSubmissions {
    street_photography?: Street_photography | null;
    film?: FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople | null;
    textures_patterns?: FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople1 | null;
    travel?: FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople2 | null;
    wallpapers?: FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople3 | null;
    fashion_beauty?: FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople4 | null;
    people?: FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople5 | null;
}
export interface Street_photography {
    status: string;
    approved_on: string;
}
export interface FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople {
    status: string;
}
export interface FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople1 {
    status: string;
}
export interface FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople2 {
    status: string;
}
export interface FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople3 {
    status: string;
}
export interface FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople4 {
    status: string;
}
export interface FilmOrTextures_patternsOrTravelOrWallpapersOrFashion_beautyOrPeople5 {
    status: string;
}
