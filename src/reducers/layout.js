import {
    OPEN_POST_ISEXPANDED,
    CLOSE_POST_ISEXPANDED,
    INVERT_SORT_ISEXPANDED,
    OPEN_CHAT_ISEXPANDED,
    CLOSE_CHAT_ISEXPANDED,
    CLOSE_CHAT_RENEGOTIATION_ISEXPANDED,
    INVERT_CHAT_RENEGOTIATION_ISEXPANDED,
    OPEN_NOTIFICATION_BOX_ISOPEN,
    CLOSE_NOTIFICATION_BOX_ISOPEN,
    INVERT_NOTIFICATION_BOX_ISOPEN,
    OPEN_PROFILE_DROPDOWN_ISOPEN,
    CLOSE_PROFILE_DROPDOWN_ISOPEN,
    INVERT_PROFILE_DROPDOWN_ISOPEN
} from '../actions/constants';

const layout = {
    postIsExpanded: false,
    sortIsExpanded: false,
    chatIsExpanded: false,
    chatRenegotiationIsExpanded: false,
    notificationBoxIsOpen: false,
    profileDropdownIsOpen: false
}

export default (state = layout, action) => {
    switch (action.type) {
        case OPEN_POST_ISEXPANDED:
            return {
                ...state,
                postIsExpanded: true
            }
        case CLOSE_POST_ISEXPANDED:
            return {
                ...state,
                postIsExpanded: false
            }
        case INVERT_SORT_ISEXPANDED:
            return {
                ...state,
                sortIsExpanded: !state.sortIsExpanded
            }
        case OPEN_CHAT_ISEXPANDED:
            return {
                ...state,
                chatIsExpanded: true
            }
        case CLOSE_CHAT_ISEXPANDED:
            return {
                ...state,
                chatIsExpanded: false
            }
        case CLOSE_CHAT_RENEGOTIATION_ISEXPANDED:
            return {
                ...state,
                chatRenegotiationIsExpanded: false
            }
        case INVERT_CHAT_RENEGOTIATION_ISEXPANDED:
            return {
                ...state,
                chatRenegotiationIsExpanded: !state.chatRenegotiationIsExpanded
            }
        case OPEN_NOTIFICATION_BOX_ISOPEN:
            return {
                ...state,
                notificationBoxIsOpen: true
            }
        case CLOSE_NOTIFICATION_BOX_ISOPEN:
            return {
                ...state,
                notificationBoxIsOpen: false
            }
        case INVERT_NOTIFICATION_BOX_ISOPEN:
            return {
                ...state,
                notificationBoxIsOpen: !state.notificationBoxIsOpen
            }
        case OPEN_PROFILE_DROPDOWN_ISOPEN:
            return {
                ...state,
                profileDropdownIsOpen: true
            }
        case CLOSE_PROFILE_DROPDOWN_ISOPEN:
            return {
                ...state,
                profileDropdownIsOpen: false
            }
        case INVERT_PROFILE_DROPDOWN_ISOPEN:
            return {
                ...state,
                profileDropdownIsOpen: !state.profileDropdownIsOpen
            }
        default:
            return state;
    }
}