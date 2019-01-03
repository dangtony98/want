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
} from './constants';

const openPostIsExpanded = () => ({
    type: OPEN_POST_ISEXPANDED
});

const closePostIsExpanded = () => ({
    type: CLOSE_POST_ISEXPANDED
});

const invertSortIsExpanded = () => ({
    type: INVERT_SORT_ISEXPANDED
});

const openChatIsExpanded = () => ({
    type: OPEN_CHAT_ISEXPANDED
});

const closeChatIsExpanded = () => ({
    type: CLOSE_CHAT_ISEXPANDED
});

const closeChatRenegotiationIsExpanded = () => ({
    type: CLOSE_CHAT_RENEGOTIATION_ISEXPANDED
});

const invertChatRenegotiationIsExpanded = () => ({
    type: INVERT_CHAT_RENEGOTIATION_ISEXPANDED
});

const openNotificationBoxIsOpen = () => ({
    type: OPEN_NOTIFICATION_BOX_ISOPEN
});

const closeNotificationBoxIsOpen = () => ({
    type: CLOSE_NOTIFICATION_BOX_ISOPEN
});

const invertNotificationBoxIsOpen = () => ({
    type: INVERT_NOTIFICATION_BOX_ISOPEN
});

const openProfileDropdownIsOpen = () => ({
    type: OPEN_PROFILE_DROPDOWN_ISOPEN
});

const closeProfileDropdownIsOpen = () => ({
    type: CLOSE_PROFILE_DROPDOWN_ISOPEN
});

const invertProfileDropdownIsOpen = () => ({
    type: INVERT_PROFILE_DROPDOWN_ISOPEN
});

export { 
    openPostIsExpanded, 
    closePostIsExpanded, 
    invertSortIsExpanded,
    openChatIsExpanded,
    closeChatIsExpanded,
    closeChatRenegotiationIsExpanded,
    invertChatRenegotiationIsExpanded,
    openNotificationBoxIsOpen,
    closeNotificationBoxIsOpen,
    invertNotificationBoxIsOpen,
    openProfileDropdownIsOpen,
    closeProfileDropdownIsOpen,
    invertProfileDropdownIsOpen
};