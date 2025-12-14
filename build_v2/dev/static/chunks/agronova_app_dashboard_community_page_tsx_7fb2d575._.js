(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/agronova/app/dashboard/community/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommunityPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconHeart$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconHeart.mjs [app-client] (ecmascript) <export default as IconHeart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMessageCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMessageCircle$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconMessageCircle.mjs [app-client] (ecmascript) <export default as IconMessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUsers$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconUsers.mjs [app-client] (ecmascript) <export default as IconUsers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMessage$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconMessage.mjs [app-client] (ecmascript) <export default as IconMessage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSend$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSend$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconSend.mjs [app-client] (ecmascript) <export default as IconSend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconPhoto.mjs [app-client] (ecmascript) <export default as IconPhoto>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEdit$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.mjs [app-client] (ecmascript) <export default as IconEdit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconTrash.mjs [app-client] (ecmascript) <export default as IconTrash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowBackUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowBackUp$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowBackUp.mjs [app-client] (ecmascript) <export default as IconArrowBackUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript) <export default as IconCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CommunityPage() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("feed");
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Feed State
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingPosts, setLoadingPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editingPostId, setEditingPostId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Network State
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [networkFilter, setNetworkFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    // Messages State
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedChatUser, setSelectedChatUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [msgInput, setMsgInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [replyTo, setReplyTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingMsgId, setEditingMsgId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // New: Edit Message State
    const pollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommunityPage.useEffect": ()=>{
            setIsClient(true);
        }
    }["CommunityPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommunityPage.useEffect": ()=>{
            if (!isClient) return;
            fetchPosts();
            fetchUsers();
            pollingRef.current = setInterval({
                "CommunityPage.useEffect": ()=>{
                    if (user && activeTab === "messages") fetchMessages();
                }
            }["CommunityPage.useEffect"], 3000);
            return ({
                "CommunityPage.useEffect": ()=>{
                    if (pollingRef.current) clearInterval(pollingRef.current);
                }
            })["CommunityPage.useEffect"];
        }
    }["CommunityPage.useEffect"], [
        user,
        activeTab,
        isClient
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommunityPage.useEffect": ()=>{
            if (activeTab === 'messages' && isClient) scrollToBottom();
        }
    }["CommunityPage.useEffect"], [
        messages.length,
        selectedChatUser,
        activeTab,
        isClient
    ]);
    const scrollToBottom = ()=>messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    // --- API Calls ---
    const fetchPosts = async ()=>{
        setLoadingPosts(true);
        try {
            const res = await fetch("/api/community/posts");
            setPosts(await res.json());
        } catch (e) {} finally{
            setLoadingPosts(false);
        }
    };
    const fetchUsers = async ()=>{
        try {
            const res = await fetch("/api/users");
            setUsers(await res.json());
        } catch (e) {}
    };
    const fetchMessages = async ()=>{
        if (!user) return;
        try {
            const res = await fetch(`/api/messages?email=${user.email}`);
            setMessages(await res.json());
        } catch (e) {}
    };
    // --- Actions ---
    const handleFollow = async (targetEmail)=>{
        if (!user) return;
        setUsers((prev)=>prev.map((u)=>{
                if (u.email === targetEmail) {
                    const isFollowing = u.followers.includes(user.email);
                    return {
                        ...u,
                        followers: isFollowing ? u.followers.filter((e)=>e !== user.email) : [
                            ...u.followers,
                            user.email
                        ]
                    };
                }
                if (u.email === user.email) {
                    const followingTarget = u.following.includes(targetEmail);
                    return {
                        ...u,
                        following: followingTarget ? u.following.filter((e)=>e !== targetEmail) : [
                            ...u.following,
                            targetEmail
                        ]
                    };
                }
                return u;
            }));
        await fetch("/api/users/follow", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userEmail: user.email,
                targetEmail
            })
        });
    };
    const handleCreatePost = async (content, image)=>{
        if (!user) return;
        await fetch("/api/community/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userEmail: user.email,
                userName: user.name || "Farmer",
                userRole: "farmer",
                content,
                image
            })
        });
        fetchPosts();
    };
    const handleLike = async (postId)=>{
        if (!user) return;
        setPosts((prev)=>prev.map((p)=>p.id === postId ? {
                    ...p,
                    likes: p.likes.includes(user.email) ? p.likes.filter((e)=>e !== user.email) : [
                        ...p.likes,
                        user.email
                    ]
                } : p));
        await fetch("/api/community/posts/like", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postId,
                userEmail: user.email
            })
        });
    };
    const handleDeletePost = async (postId)=>{
        if (!user || !confirm("Delete this post?")) return;
        setPosts((prev)=>prev.filter((p)=>p.id !== postId));
        await fetch(`/api/community/posts?id=${postId}&userEmail=${user.email}`, {
            method: "DELETE"
        });
    };
    const handleComment = async (postId, text)=>{
        if (!user) return;
        const newComment = {
            id: Date.now().toString(),
            userEmail: user.email,
            userName: user.name || "User",
            text,
            date: new Date().toISOString()
        };
        setPosts((prev)=>prev.map((p)=>p.id === postId ? {
                    ...p,
                    comments: [
                        ...p.comments,
                        newComment
                    ]
                } : p));
        await fetch("/api/community/posts/comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postId,
                userEmail: user.email,
                userName: user.name,
                text
            })
        });
    };
    const handleDeleteComment = async (postId, commentId)=>{
        if (!user || !confirm("Delete this comment?")) return;
        setPosts((prev)=>prev.map((p)=>p.id === postId ? {
                    ...p,
                    comments: p.comments.filter((c)=>c.id !== commentId)
                } : p));
        await fetch(`/api/community/posts/comment?postId=${postId}&commentId=${commentId}&userEmail=${user.email}`, {
            method: "DELETE"
        });
    };
    const handleEditPost = async (postId, content)=>{
        if (!user) return;
        setPosts((prev)=>prev.map((p)=>p.id === postId ? {
                    ...p,
                    content
                } : p));
        setEditingPostId(null);
        await fetch(`/api/community/posts`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postId,
                content,
                userEmail: user.email
            })
        });
    };
    const handleJoinChat = (targetUserEmail)=>{
        setSelectedChatUser(targetUserEmail);
        setActiveTab("messages");
        fetchMessages();
    };
    const handleSendMessage = async ()=>{
        if (!user || !selectedChatUser || !msgInput.trim()) return;
        const optimisticMsg = {
            id: Date.now().toString(),
            sender: user.email,
            receiver: selectedChatUser,
            content: msgInput,
            timestamp: new Date().toISOString(),
            replyToId: replyTo?.id
        };
        setMessages((prev)=>[
                ...prev,
                optimisticMsg
            ]);
        setMsgInput("");
        setReplyTo(null);
        scrollToBottom();
        await fetch("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sender: user.email,
                receiver: selectedChatUser,
                content: optimisticMsg.content,
                replyToId: optimisticMsg.replyToId
            })
        });
        fetchMessages(); // Sync
    };
    const handleMessageReaction = async (msgId, reaction)=>{
        if (!user) return;
        setMessages((prev)=>prev.map((m)=>m.id === msgId ? {
                    ...m,
                    reaction: m.reaction === reaction ? undefined : reaction
                } : m));
        await fetch(`/api/messages/${msgId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userEmail: user.email,
                reaction
            })
        });
    };
    const handleDeleteMessage = async (msgId)=>{
        if (!user || !confirm("Delete this message?")) return;
        setMessages((prev)=>prev.filter((m)=>m.id !== msgId));
        await fetch(`/api/messages/${msgId}?userEmail=${user.email}`, {
            method: "DELETE"
        });
    };
    const handleEditMessage = async (msgId, content)=>{
        if (!user) return;
        setMessages((prev)=>prev.map((m)=>m.id === msgId ? {
                    ...m,
                    content,
                    edited: true
                } : m));
        setEditingMsgId(null);
        await fetch(`/api/messages/${msgId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userEmail: user.email,
                content
            })
        });
    };
    const handleDeleteChat = async ()=>{
        if (!confirm("Are you sure you want to delete this entire conversation?")) return;
        setMessages((prev)=>prev.filter((m)=>!(m.sender === user?.email && m.receiver === selectedChatUser || m.sender === selectedChatUser && m.receiver === user?.email)));
    };
    // --- Network Filter Logic ---
    const filteredUsers = users.filter((u)=>{
        if (u.email === user?.email) return false;
        if (networkFilter === "following") return u.followers.includes(user?.email || "");
        if (networkFilter === "followers") return u.following.includes(user?.email || "");
        return true;
    });
    if (!isClient) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 dark:bg-neutral-900"
    }, void 0, false, {
        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
        lineNumber: 230,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 dark:bg-neutral-900 text-neutral-900 dark:text-gray-100 font-sans transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 shadow-sm transition-colors duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 h-16 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUsers$3e$__["IconUsers"], {
                                            className: "text-white w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-xl tracking-tight text-neutral-900 dark:text-white",
                                        children: "AgroNova Community"
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 236,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden md:flex space-x-1 bg-gray-100 dark:bg-neutral-800 p-1 rounded-lg",
                                    children: [
                                        "feed",
                                        "network",
                                        "messages"
                                    ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab(tab),
                                            className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === tab ? "bg-white dark:bg-neutral-700 text-green-600 shadow-sm" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "capitalize",
                                                children: tab
                                            }, void 0, false, {
                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 33
                                            }, this)
                                        }, tab, false, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 29
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 242,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 235,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex justify-center pb-2 px-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex space-x-1 bg-gray-100 dark:bg-neutral-800 p-1 rounded-lg w-full justify-between",
                            children: [
                                "feed",
                                "network",
                                "messages"
                            ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab),
                                    className: `flex-1 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === tab ? "bg-white dark:bg-neutral-700 text-green-600 shadow-sm" : "text-gray-500"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "capitalize",
                                        children: tab
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 29
                                    }, this)
                                }, tab, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 25
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                            lineNumber: 257,
                            columnNumber: 18
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 256,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto p-4 md:p-6 lg:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -10
                        },
                        transition: {
                            duration: 0.2
                        },
                        children: [
                            activeTab === "feed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-2xl mx-auto space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreatePostWidget, {
                                        user: user,
                                        refresh: fetchPosts,
                                        onPost: handleCreatePost
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: loadingPosts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                1,
                                                2,
                                                3
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-40 bg-gray-200 dark:bg-neutral-800 rounded-xl animate-pulse"
                                                }, i, false, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 59
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 37
                                        }, this) : posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-20 text-gray-500",
                                            children: "No posts yet. Be the first to share!"
                                        }, void 0, false, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 37
                                        }, this) : posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PostCard, {
                                                post: post,
                                                user: user,
                                                onLike: ()=>handleLike(post.id),
                                                onDelete: ()=>handleDeletePost(post.id),
                                                onComment: handleComment,
                                                onDeleteComment: handleDeleteComment,
                                                onEdit: handleEditPost,
                                                isEditing: editingPostId === post.id,
                                                setEditingPostId: setEditingPostId
                                            }, post.id, false, {
                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                lineNumber: 288,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 277,
                                columnNumber: 25
                            }, this),
                            activeTab === "network" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center gap-2 mb-6",
                                        children: [
                                            "all",
                                            "following",
                                            "followers"
                                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setNetworkFilter(f),
                                                className: `px-4 py-1.5 rounded-full text-sm font-semibold capitalize transition-colors ${networkFilter === f ? "bg-green-600 text-white" : "bg-white dark:bg-neutral-800 text-gray-500 border border-gray-200 dark:border-neutral-700"}`,
                                                children: f
                                            }, f, false, {
                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                lineNumber: 308,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                                        children: [
                                            filteredUsers.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserCard, {
                                                    user: u,
                                                    currentUser: user,
                                                    onFollow: ()=>handleFollow(u.email),
                                                    onChat: ()=>handleJoinChat(u.email)
                                                }, u.email, false, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 37
                                                }, this)),
                                            filteredUsers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-full text-center py-20 text-gray-500",
                                                children: "No users found in this list."
                                            }, void 0, false, {
                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 305,
                                columnNumber: 25
                            }, this),
                            activeTab === "messages" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[calc(100vh-140px)] bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden flex shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-full md:w-80 border-r border-gray-200 dark:border-neutral-800 flex flex-col bg-gray-50 dark:bg-neutral-900 ${selectedChatUser ? "hidden md:flex" : "flex"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 border-b border-gray-200 dark:border-neutral-800",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-semibold text-gray-900 dark:text-white",
                                                    children: "Messages"
                                                }, void 0, false, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                lineNumber: 330,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 overflow-y-auto p-2 space-y-1",
                                                children: users.filter((u)=>u.email !== user?.email).map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedChatUser(u.email),
                                                        className: `w-full flex items-center gap-3 p-3 rounded-xl transition-all ${selectedChatUser === u.email ? "bg-green-100 dark:bg-neutral-800 text-green-900 dark:text-white" : "hover:bg-gray-100 dark:hover:bg-neutral-800"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-full bg-gray-200 dark:bg-neutral-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-300",
                                                                children: u.name[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 text-left",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                        children: u.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                        lineNumber: 342,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-gray-500 capitalize",
                                                                        children: u.role
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                        lineNumber: 343,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, u.email, true, {
                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex-1 flex flex-col bg-white dark:bg-neutral-900 ${!selectedChatUser ? "hidden md:flex" : "flex"}`,
                                        children: selectedChatUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-16 px-6 border-b border-gray-200 dark:border-neutral-800 flex items-center justify-between bg-white dark:bg-neutral-900",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setSelectedChatUser(null),
                                                                    className: "md:hidden p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowBackUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowBackUp$3e$__["IconArrowBackUp"], {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 182
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                    lineNumber: 355,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold text-gray-900 dark:text-white",
                                                                            children: users.find((u)=>u.email === selectedChatUser)?.name || selectedChatUser
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                            lineNumber: 357,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-green-600 flex items-center gap-1",
                                                                            children: "Online"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                            lineNumber: 358,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                    lineNumber: 356,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleDeleteChat,
                                                            className: "p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800",
                                                            title: "Delete Chat",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__["IconTrash"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 overflow-y-auto p-6 space-y-4",
                                                    children: [
                                                        messages.filter((m)=>m.sender === user?.email && m.receiver === selectedChatUser || m.sender === selectedChatUser && m.receiver === user?.email).map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageBubble, {
                                                                message: msg,
                                                                isMe: msg.sender === user?.email,
                                                                replyContent: msg.replyToId ? messages.find((m)=>m.id === msg.replyToId)?.content : undefined,
                                                                onReply: ()=>setReplyTo(msg),
                                                                onReact: (r)=>handleMessageReaction(msg.id, r),
                                                                onDelete: ()=>handleDeleteMessage(msg.id),
                                                                onEdit: (content)=>handleEditMessage(msg.id, content),
                                                                isEditing: editingMsgId === msg.id,
                                                                setEditingMsgId: setEditingMsgId
                                                            }, msg.id, false, {
                                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 53
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            ref: messagesEndRef
                                                        }, void 0, false, {
                                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 border-t border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900",
                                                    children: [
                                                        replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2 p-2 bg-gray-200 dark:bg-neutral-800 border-l-2 border-green-500 rounded text-sm flex justify-between items-center text-gray-600 dark:text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    children: [
                                                                        "Replying to: ",
                                                                        replyTo.content.substring(0, 50),
                                                                        "..."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setReplyTo(null),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                        lineNumber: 385,
                                                                        columnNumber: 94
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                    lineNumber: 385,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: msgInput,
                                                                    onChange: (e)=>setMsgInput(e.target.value),
                                                                    onKeyDown: (e)=>e.key === "Enter" && handleSendMessage(),
                                                                    placeholder: "Type your message...",
                                                                    className: "flex-1 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleSendMessage,
                                                                    className: "p-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-transform active:scale-95 disabled:opacity-50",
                                                                    disabled: !msgInput.trim(),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSend$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSend$3e$__["IconSend"], {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                        lineNumber: 396,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                    lineNumber: 395,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col items-center justify-center text-gray-400 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMessageCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMessageCircle$3e$__["IconMessageCircle"], {
                                                        size: 32
                                                    }, void 0, false, {
                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 146
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Select a user to chat"
                                                }, void 0, false, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 328,
                                columnNumber: 25
                            }, this)
                        ]
                    }, activeTab, true, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 269,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                    lineNumber: 268,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}
_s(CommunityPage, "OMnfgq2Tg1oQqTVdLf5+BXqjBOA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = CommunityPage;
// --- Components ---
const CreatePostWidget = ({ user, refresh, onPost })=>{
    _s1();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-4 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 rounded-full bg-green-100 dark:bg-neutral-800 flex items-center justify-center text-green-700 dark:text-green-400 font-bold",
                    children: user?.name?.[0] || "U"
                }, void 0, false, {
                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                    lineNumber: 423,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: content,
                            onChange: (e)=>setContent(e.target.value),
                            placeholder: "What's happening?",
                            className: "w-full bg-transparent border-none focus:ring-0 resize-none outline-none text-base placeholder-gray-400 dark:placeholder-neutral-600 min-h-[80px] text-gray-900 dark:text-white"
                        }, void 0, false, {
                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                            lineNumber: 427,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center pt-2 border-t border-gray-100 dark:border-neutral-800 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full text-green-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__["IconPhoto"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 126
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onPost(content);
                                        setContent("");
                                    },
                                    disabled: !content.trim(),
                                    className: "px-4 py-1.5 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 disabled:opacity-50",
                                    children: "Post"
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 436,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                            lineNumber: 432,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                    lineNumber: 426,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
            lineNumber: 422,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
        lineNumber: 421,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(CreatePostWidget, "KPwtwb4lt1NZxOwnjhyyIoKb9lQ=");
_c1 = CreatePostWidget;
function PostCard({ post, user, onLike, onDelete, onComment, onDeleteComment, onEdit, isEditing, setEditingPostId }) {
    _s2();
    const [showComments, setShowComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [commentText, setCommentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editContent, setEditContentState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(post.content);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 md:p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300",
                                    children: post.userName?.[0]
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 454,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-900 dark:text-white",
                                                    children: post.userName
                                                }, void 0, false, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 33
                                                }, this),
                                                post.userRole === "expert" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-1.5 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-[10px] rounded uppercase font-bold",
                                                    children: "Expert"
                                                }, void 0, false, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 64
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: new Date(post.date).toLocaleDateString()
                                        }, void 0, false, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 462,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                            lineNumber: 453,
                            columnNumber: 21
                        }, this),
                        user?.email === post.userEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setEditingPostId(post.id);
                                        setEditContentState(post.content);
                                    },
                                    className: "p-1.5 text-gray-400 hover:text-green-600 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEdit$3e$__["IconEdit"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 467,
                                        columnNumber: 229
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onDelete,
                                    className: "p-1.5 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__["IconTrash"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 164
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 468,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                            lineNumber: 466,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                    lineNumber: 452,
                    columnNumber: 17
                }, this),
                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: editContent,
                            onChange: (e)=>setEditContentState(e.target.value),
                            className: "w-full bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg p-3 text-gray-900 dark:text-white",
                            rows: 3
                        }, void 0, false, {
                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                            lineNumber: 475,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingPostId(null),
                                    className: "px-3 py-1 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 477,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onEdit(post.id, editContent),
                                    className: "px-3 py-1 text-sm bg-green-600 text-white rounded-lg",
                                    children: "Save"
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 478,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                            lineNumber: 476,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                    lineNumber: 474,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-800 dark:text-gray-200 mb-4 whitespace-pre-wrap leading-relaxed text-base",
                    children: post.content
                }, void 0, false, {
                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                    lineNumber: 482,
                    columnNumber: 21
                }, this),
                post.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-800 relative h-64 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: post.image,
                        alt: "Post",
                        fill: true,
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 485,
                        columnNumber: 149
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                    lineNumber: 485,
                    columnNumber: 32
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6 pt-3 border-t border-gray-100 dark:border-neutral-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onLike,
                            className: `flex items-center gap-2 text-sm font-medium transition-colors ${post.likes.includes(user?.email || "") ? "text-pink-500" : "text-gray-500 hover:text-pink-500"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconHeart$3e$__["IconHeart"], {
                                    size: 18,
                                    className: post.likes.includes(user?.email || "") ? "fill-current" : ""
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 489,
                                    columnNumber: 25
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: post.likes.length
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 489,
                                    columnNumber: 121
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                            lineNumber: 488,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowComments(!showComments),
                            className: `flex items-center gap-2 text-sm font-medium transition-colors ${showComments ? "text-green-600" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMessage$3e$__["IconMessage"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 492,
                                    columnNumber: 25
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: post.comments?.length || 0
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 492,
                                    columnNumber: 51
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                            lineNumber: 491,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                    lineNumber: 487,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: showComments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            height: 0,
                            opacity: 0
                        },
                        animate: {
                            height: "auto",
                            opacity: 1
                        },
                        exit: {
                            height: 0,
                            opacity: 0
                        },
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 space-y-3 pt-3 bg-gray-50 dark:bg-neutral-900/50 -mx-6 px-6 pb-4 border-t border-gray-100 dark:border-neutral-800",
                            children: [
                                post.comments?.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-6 h-6 rounded-full bg-gray-200 dark:bg-neutral-700 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300 shrink-0",
                                                children: comment.userName[0]
                                            }, void 0, false, {
                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                lineNumber: 502,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-white dark:bg-neutral-800 rounded-xl rounded-tl-none px-3 py-2 shadow-sm border border-gray-100 dark:border-neutral-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-baseline",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-gray-900 dark:text-white",
                                                                children: comment.userName
                                                            }, void 0, false, {
                                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                lineNumber: 505,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-gray-400",
                                                                        children: new Date(comment.date).toLocaleDateString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                        lineNumber: 507,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    user?.email === comment.userEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>onDeleteComment(post.id, comment.id),
                                                                        className: "text-[10px] text-red-500 hover:text-red-700",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__["IconTrash"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                            lineNumber: 508,
                                                                            columnNumber: 208
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                        lineNumber: 508,
                                                                        columnNumber: 91
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                                lineNumber: 506,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 46
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 mt-0.5",
                                                        children: comment.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                        lineNumber: 511,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                lineNumber: 503,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, comment.id, true, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 501,
                                        columnNumber: 37
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mt-3 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-green-100 dark:bg-neutral-800 flex items-center justify-center text-xs font-bold text-green-700 dark:text-green-400 shrink-0",
                                            children: user?.name?.[0] || "U"
                                        }, void 0, false, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex gap-2 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: commentText,
                                                    onChange: (e)=>setCommentText(e.target.value),
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter" && commentText.trim()) {
                                                            onComment(post.id, commentText);
                                                            setCommentText("");
                                                        }
                                                    },
                                                    placeholder: "Write a comment...",
                                                    className: "w-full bg-gray-100 dark:bg-neutral-800 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-gray-900 dark:text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (commentText.trim()) {
                                                            onComment(post.id, commentText);
                                                            setCommentText("");
                                                        }
                                                    },
                                                    disabled: !commentText.trim(),
                                                    className: "absolute right-2 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-700 disabled:opacity-50 p-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSend$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSend$3e$__["IconSend"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 294
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 517,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 515,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                            lineNumber: 499,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 498,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                    lineNumber: 496,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
            lineNumber: 451,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
        lineNumber: 450,
        columnNumber: 9
    }, this);
}
_s2(PostCard, "7IAuFK3z4gP6BJpgienSDd/AuGc=");
_c2 = PostCard;
function UserCard({ user, onFollow, currentUser, onChat }) {
    const isFollowing = user.followers.includes(currentUser?.email || "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-xl font-bold text-gray-600 dark:text-gray-300",
                children: user.name[0]
            }, void 0, false, {
                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                lineNumber: 535,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg text-gray-900 dark:text-white",
                        children: user.name
                    }, void 0, false, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 537,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 uppercase tracking-widest mt-1",
                        children: user.role
                    }, void 0, false, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 538,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                lineNumber: 536,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 text-sm text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-gray-900 dark:text-white",
                                children: user.followers.length
                            }, void 0, false, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 541,
                                columnNumber: 23
                            }, this),
                            " Followers"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 541,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-gray-900 dark:text-white",
                                children: user.following.length
                            }, void 0, false, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 542,
                                columnNumber: 23
                            }, this),
                            " Following"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 542,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                lineNumber: 540,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 w-full mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onFollow,
                        className: `flex-1 py-1.5 rounded-lg text-sm font-medium transition-all ${isFollowing ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white hover:bg-gray-200" : "bg-green-600 text-white hover:bg-green-700"}`,
                        children: isFollowing ? "Following" : "Follow"
                    }, void 0, false, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 545,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onChat,
                        className: "p-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMessage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMessage$3e$__["IconMessage"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                            lineNumber: 546,
                            columnNumber: 173
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 546,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                lineNumber: 544,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
        lineNumber: 534,
        columnNumber: 9
    }, this);
}
_c3 = UserCard;
function MessageBubble({ message, isMe, onReply, replyContent, onReact, onDelete, onEdit, isEditing, setEditingMsgId }) {
    _s3();
    const [editContent, setEditContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(message.content);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col ${isMe ? "items-end" : "items-start"} relative group`,
        children: [
            replyContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-xs text-gray-400 mb-1 px-2 border-l-2 ${isMe ? "border-green-500/50 text-right pr-2" : "border-gray-300 pl-2"}`,
                children: [
                    "Replying to: ",
                    replyContent.substring(0, 30),
                    "..."
                ]
            }, void 0, true, {
                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                lineNumber: 557,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `max-w-[80%] relative group/bubble w-full md:w-auto`,
                children: [
                    !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute -top-8 ${isMe ? "right-0" : "left-0"} hidden group-hover/bubble:flex items-center gap-1 bg-white dark:bg-neutral-800 shadow-md border border-gray-200 dark:border-neutral-700 rounded-full px-2 py-1 z-10`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onReply,
                                className: "p-1 text-gray-500 hover:text-green-600",
                                title: "Reply",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowBackUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowBackUp$3e$__["IconArrowBackUp"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 561,
                                    columnNumber: 116
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 561,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center border-l border-r border-gray-200 dark:border-neutral-700 mx-1 px-1 gap-1",
                                children: [
                                    "👍",
                                    "❤️",
                                    "😂"
                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onReact(r),
                                        className: "hover:scale-125 transition-transform",
                                        children: r
                                    }, r, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 563,
                                        columnNumber: 56
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 562,
                                columnNumber: 25
                            }, this),
                            isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setEditingMsgId(message.id);
                                            setEditContent(message.content);
                                        },
                                        className: "p-1 text-gray-500 hover:text-blue-500",
                                        title: "Edit",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEdit$3e$__["IconEdit"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 567,
                                            columnNumber: 186
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 567,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onDelete,
                                        className: "p-1 text-gray-500 hover:text-red-500",
                                        title: "Delete",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__["IconTrash"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                            lineNumber: 568,
                                            columnNumber: 124
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 568,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 560,
                        columnNumber: 21
                    }, this),
                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 items-center bg-white dark:bg-neutral-800 p-2 rounded-xl border border-gray-200 dark:border-neutral-700 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: editContent,
                                onChange: (e)=>setEditContent(e.target.value),
                                className: "bg-transparent border-none focus:outline-none text-sm w-full min-w-[200px]",
                                autoFocus: true,
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter") onEdit(editContent);
                                }
                            }, void 0, false, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 576,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setEditingMsgId(null),
                                className: "text-gray-400 hover:text-red-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 577,
                                    columnNumber: 116
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 577,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onEdit(editContent),
                                className: "text-green-600 hover:text-green-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                    lineNumber: 578,
                                    columnNumber: 117
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 578,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 575,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `px-4 py-2 rounded-2xl text-sm leading-relaxed shadow-sm border relative ${isMe ? "bg-green-600 text-white border-green-600 rounded-br-none" : "bg-white dark:bg-neutral-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-neutral-700 rounded-bl-none"}`,
                        children: [
                            message.content,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-[10px] mt-1 text-right flex items-center justify-end gap-1 ${isMe ? "text-green-100" : "text-gray-400"}`,
                                children: [
                                    message.edited && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "(edited)"
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                        lineNumber: 584,
                                        columnNumber: 48
                                    }, this),
                                    new Date(message.timestamp).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 583,
                                columnNumber: 25
                            }, this),
                            message.reaction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute -bottom-2 ${isMe ? "left-0" : "right-0"} bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-sm`,
                                children: message.reaction
                            }, void 0, false, {
                                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                                lineNumber: 587,
                                columnNumber: 46
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                        lineNumber: 581,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agronova/app/dashboard/community/page.tsx",
                lineNumber: 558,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/agronova/app/dashboard/community/page.tsx",
        lineNumber: 556,
        columnNumber: 9
    }, this);
}
_s3(MessageBubble, "0FncvGO3B4ZJWWic5lIvu3hXgoo=");
_c4 = MessageBubble;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "CommunityPage");
__turbopack_context__.k.register(_c1, "CreatePostWidget");
__turbopack_context__.k.register(_c2, "PostCard");
__turbopack_context__.k.register(_c3, "UserCard");
__turbopack_context__.k.register(_c4, "MessageBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=agronova_app_dashboard_community_page_tsx_7fb2d575._.js.map