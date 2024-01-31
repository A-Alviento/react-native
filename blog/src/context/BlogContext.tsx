import { blogPostsType, blogPostsActionType } from '../types';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state: blogPostsType[], action: blogPostsActionType) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'delete_blogpost':
            return state.filter((blogpost) => blogpost.id !== action.payload.id);
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        default:
            return state;
    }
};

const getBlogPosts = (dispatch: React.Dispatch<blogPostsActionType>) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        const data: blogPostsType[] = response.data;

        dispatch({ type: 'get_blogposts', payload: data})
    }
};

const addBlogPost = (dispatch: React.Dispatch<blogPostsActionType>) => {
    return async (title: string, content: string, callback: () => void) => {
        await jsonServer.post('/blogposts', { title, content })

        if (callback) {
            callback();
        }
    }
};

const deleteBlogPost = (dispatch: React.Dispatch<blogPostsActionType>) => {
    return async (id: string) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: {id} })
    }
};

const editBlogPost = (dispatch: React.Dispatch<blogPostsActionType>) => {
    return async (id: string, title: string, content: string, callback: () => void) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost, editBlogPost: editBlogPost, getBlogPosts: getBlogPosts }, [])