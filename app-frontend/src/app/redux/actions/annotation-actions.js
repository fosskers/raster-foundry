import {
    getProjectAnnotationsRequest, createProjectAnnotationsRequest, updateAnnotationRequest
} from '_api/annotations';

export const ANNOTATIONS_FETCH = 'ANNOTATIONS_FETCH';
export const ANNOTATIONS_LOAD = 'ANNOTATIONS_LOAD';
export const ANNOTATIONS_CREATE = 'ANNOTATIONS_CREATE';
export const ANNOTATIONS_UPDATE = 'ANNOTATIONS_UPDATE';

export const ANNOTATIONS_ACTION_PREFIX = 'ANNOTATIONS';

export function fetchAnnotations(projectId) {
    return (dispatch, getState) => {
        dispatch({
            type: ANNOTATIONS_FETCH,
            payload: getProjectAnnotationsRequest(projectId, getState()),
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
            payload: createProjectAnnotationsRequest(projectId, annotations, getState()),
            meta: {
                projectId
            }
        });
    };
}

export function updateAnnotation(annotation) {
    return (dispatch, getState) => {
        dispatch({
            type: ANNOTATIONS_UPDATE,
            payload: updateAnnotationRequest(annotation, getState()),
            meta: {
                annotation
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
