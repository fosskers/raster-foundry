export function annotationToGeoJSON(annotation) {
    let {label, description = '', organizationId, geometry} = annotation;
    return {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry,
            properties: {
                label, organizationId, description
            }
        }]
    };
}
