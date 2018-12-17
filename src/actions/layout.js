const openPostIsExpanded = () => ({
    type: 'OPEN_POST_ISEXPANDED'
});

const closePostIsExpanded = () => ({
    type: 'CLOSE_POST_ISEXPANDED'
});

const invertSortIsExpanded = () => ({
    type: 'INVERT_SORT_ISEXPANDED'
});

const openChatIsExpanded = () => ({
    type: 'OPEN_CHAT_ISEXPANDED'
});

const closeChatIsExpanded = () => ({
    type: 'CLOSE_CHAT_ISEXPANDED'
});

const closeChatRenegotiationIsExpanded = () => ({
    type: 'CLOSE_CHAT_RENEGOTIATION_ISEXPANDED'
});

const invertChatRenegotiationIsExpanded = () => ({
    type: 'INVERT_CHAT_RENEGOTIATION_ISEXPANDED'
});

const openNotificationBoxIsOpen = () => ({
    type: 'OPEN_NOTIFICATION_BOX_ISOPEN'
});

const closeNotificationBoxIsOpen = () => ({
    type: 'CLOSE_NOTIFICATION_BOX_ISOPEN'
});

const invertNotificationBoxIsOpen = () => ({
    type: 'INVERT_NOTIFICATION_BOX_ISOPEN'
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
    invertNotificationBoxIsOpen
};