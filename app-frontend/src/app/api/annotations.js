import {authedRequest} from './authentication';


export function getProjectAnnotations(projectId, state) {
    return authedRequest({
        method: 'get',
        url: `${state.api.apiUrl}` +
            `/api/projects/${projectId}/annotations`
    }, state);
}

export function createProjectAnnotations(projectId, annotationGeojson, state) {
    return authedRequest({
        method: 'post',
        url: `${state.api.apiUrl}` +
            `/api/projects/${projectId}/annotations`,
        data: annotationGeojson
    }, state);
}

export function updateProjectAnnotations(projectId, annotationId, annotation, state) {
    return authedRequest({
        method: 'put',
        url: `${state.api.apiUrl}` +
            `/api/projects/${projectId}/annotations/${annotationId}`,
        data: annotation
    }, state);
}

export function deleteProjectAnnotation(projectId, annotationId, state) {
    return authedRequest({
        method: 'delete',
        url: `${state.api.apiUrl}` +
            `/api/projects/${projectId}/annotations/${annotationId}`
    }, state);
}
