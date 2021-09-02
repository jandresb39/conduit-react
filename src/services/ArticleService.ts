import { ApiResponse } from 'apisauce';

import api from 'config/api';
import type {
  ArticleResponse,
  Articles,
  ArticlesByAuthor,
  ArticlesFavorites,
  FavoritesAddRemove,
  NewPostPayload,
  Paginated,
  CommentsResponse
} from 'types/Article';

const MAIN_PATH = '/articles';

export const articles = (payload: Paginated): Promise<ApiResponse<Articles>> => api.get(MAIN_PATH, payload);

export const feed = (payload: Paginated): Promise<ApiResponse<Articles>> =>
  api.get(`${MAIN_PATH}/feed`, payload);

export const articlesByAuthor = (payload: ArticlesByAuthor): Promise<ApiResponse<Articles>> =>
  api.get(MAIN_PATH, payload);

export const articlesFavorites = (payload: ArticlesFavorites): Promise<ApiResponse<Articles>> =>
  api.get(MAIN_PATH, payload);

export const addRemoveFavorites = ({
  slug,
  isFavorite
}: FavoritesAddRemove): Promise<ApiResponse<ArticleResponse>> =>
  isFavorite ? api.delete(`${MAIN_PATH}/${slug}/favorite`) : api.post(`${MAIN_PATH}/${slug}/favorite`);

export const addNewPost = (payload: NewPostPayload): Promise<ApiResponse<ArticleResponse>> =>
  api.post(MAIN_PATH, payload);

export const articleBySlug = (slug: string): Promise<ApiResponse<ArticleResponse>> =>
  api.get(`${MAIN_PATH}/${slug}`);

export const commentsBySlug = (slug: string): Promise<ApiResponse<CommentsResponse>> =>
  api.get(`${MAIN_PATH}/${slug}/comments`);
