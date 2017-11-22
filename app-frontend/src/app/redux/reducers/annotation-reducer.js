import typeToReducer from 'type-to-reducer';

import {
    ANNOTATIONS_FETCH, ANNOTATIONS_LOAD, ANNOTATIONS_CREATE
} from '_redux/actions/annotation-actions';

export const annotationReducer = typeToReducer({
    [ANNOTATIONS_FETCH]: {
        PENDING: (state) => {
            return state;
        },
        REJECTED: (state) => {
            return state;
        },
        FULFILLED: (state, action) => {
            let annotations = state.annotations;
            action.payload.data.features.forEach(annotation => {
                annotations = annotations.set(annotation.id, annotation);
            });

            return Object.assign({}, state, {
                annotations
            });
        }
    },
    [ANNOTATIONS_CREATE]: {
        PENDING: (state) => {
            return state;
        },
        REJECTED: (state, action) => {
            // eslint-disable-next-line
            console.error('Error creating annotations', action.payload);
            return state;
        },
        FULFILLED: (state) => {
            return state;
        }
    },
    [ANNOTATIONS_LOAD]: (state, action) => {
        if (!action.payload.length) {
            return state;
        }
        let annotations = state.annotations;
        action.payload.forEach(annotation => {
            annotations = annotations.set(annotation.id, annotation);
        });
        return Object.assign({}, state, {
            annotations
        });
    }
});
