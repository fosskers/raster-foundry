import {authedRequest} from './authentication';


export function getProjectAnnotations(projectId, state) {
    return authedRequest({
        method: 'get',
        url: `${state.api.apiUrl}` +
            `/api/${projectId}/annotations`
    }, state);
}

export function setProjectAnnotations(projectId, annotationGeojson, state) {
    return authedRequest({
        method: 'post',
        url: `${state.api.apiUrl}` +
            `/api/${projectId}/annotations`,
        data: annotationGeojson
    }, state);
}

export function updateProjectAnnotations(projectId, annotationId, annotation, state) {
    return authedRequest({
        method: 'put',
        url: `${state.api.apiUrl}` +
            `/api/${projectId}/annotations/${annotationId}`,
        data: annotation
    }, state);
}
