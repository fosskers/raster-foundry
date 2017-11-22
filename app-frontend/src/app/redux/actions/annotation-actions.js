import {getProjectAnnotations, createProjectAnnotations} from '_api/annotations';

export const ANNOTATIONS_FETCH = 'ANNOTATIONS_FETCH';
export const ANNOTATIONS_LOAD = 'ANNOTATIONS_LOAD';
export const ANNOTATIONS_CREATE = 'ANNOTATIONS_CREATE';

export const ANNOTATIONS_ACTION_PREFIX = 'ANNOTATIONS';

export function fetchAnnotations(projectId) {
    return (dispatch, getState) => {
        dispatch({
            type: ANNOTATIONS_FETCH,
            payload: getProjectAnnotations(projectId, getState()),
            meta: {
                projectId
            }
        });
    };
}

export function createAnnotations(projectId, annotations) {
    return (dispatch, getState) => {
        dispatch({
            type: ANNOTATIONS_CREATE,
            payload: createProjectAnnotations(projectId, annotations, getState()),
            meta: {
                projectId
            }
        });
    };
}

export function loadAnnotations(annotations) {
    return {
        type: ANNOTATIONS_LOAD,
        payload: annotations
    };
}

export default {
    fetchAnnotations, createAnnotations
};
