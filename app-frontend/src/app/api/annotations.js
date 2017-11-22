import {authedRequest} from './authentication';


export function getProjectAnnotationsRequest(projectId, state) {
    return authedRequest({
        method: 'get',
        url: `${state.api.apiUrl}` +
            `/api/projects/${projectId}/annotations`
    }, state);
}

export function createProjectAnnotationsRequest(projectId, annotationGeojson, state) {
    return authedRequest({
        method: 'post',
        url: `${state.api.apiUrl}` +
            `/api/projects/${projectId}/annotations`,
        data: annotationGeojson
    }, state);
}

export function updateProjectAnnotationsRequest(projectId, annotationId, annotation, state) {
    return authedRequest({
        method: 'put',
        url: `${state.api.apiUrl}` +
            `/api/projects/${projectId}/annotations/${annotationId}`,
        data: annotation
    }, state);
}

export function deleteProjectAnnotationRequest(projectId, annotationId, state) {
    return authedRequest({
        method: 'delete',
        url: `${state.api.apiUrl}` +
            `/api/projects/${projectId}/annotations/${annotationId}`
    }, state);
}
