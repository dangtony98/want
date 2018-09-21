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

export { 
    openPostIsExpanded, 
    closePostIsExpanded, 
    invertSortIsExpanded,
    openChatIsExpanded,
    closeChatIsExpanded
};