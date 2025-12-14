module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/agronova/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dbOrders",
    ()=>dbOrders,
    "dbPosts",
    ()=>dbPosts,
    "dbSocial",
    ()=>dbSocial,
    "dbUsers",
    ()=>dbUsers
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const DATA_DIR = 'c:/Users/Dhanush/agronova/data'; // path.join(process.cwd(), 'data');
const ORDERS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'orders.json');
const USERS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'users.json');
// Ensure data directory exists
if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(DATA_DIR)) {
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(DATA_DIR, {
        recursive: true
    });
}
// Helpers
function readJSON(file, defaultValue) {
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(file)) return defaultValue;
    try {
        const data = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(file, 'utf-8');
        return JSON.parse(data);
    } catch (e) {
        return defaultValue;
    }
}
function writeJSON(file, data) {
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(file, JSON.stringify(data, null, 2));
}
const dbOrders = {
    getAll: ()=>readJSON(ORDERS_FILE, []),
    getById: (id)=>{
        const orders = readJSON(ORDERS_FILE, []);
        return orders.find((o)=>o.id === id);
    },
    create: (order)=>{
        const orders = readJSON(ORDERS_FILE, []);
        orders.push(order);
        writeJSON(ORDERS_FILE, orders);
        return order;
    },
    update: (id, updates)=>{
        const orders = readJSON(ORDERS_FILE, []);
        const index = orders.findIndex((o)=>o.id === id);
        if (index === -1) return null;
        orders[index] = {
            ...orders[index],
            ...updates
        };
        writeJSON(ORDERS_FILE, orders);
        return orders[index];
    }
};
const dbUsers = {
    getAll: ()=>readJSON(USERS_FILE, []),
    get: (email)=>{
        const users = readJSON(USERS_FILE, []);
        return users.find((u)=>u.email === email);
    },
    // Add or Get User (Safe Create)
    ensure: (userData)=>{
        const users = readJSON(USERS_FILE, []);
        let user = users.find((u)=>u.email === userData.email);
        if (!user) {
            user = {
                email: userData.email,
                strikes: [],
                status: 'CLEAR',
                name: userData.name || userData.email.split('@')[0],
                role: userData.role || 'Farmer',
                followers: userData.followers || [],
                following: userData.following || []
            }; // Cast to avoid strict type issues with extended fields if User interface isn't fully updated yet (I updated it previously but name/role might be missing in Interface?)
            // Actually I need to add name/role to User Interface too? yes.
            users.push(user);
            writeJSON(USERS_FILE, users);
        }
        return user;
    },
    addStrike: (email, reason, orderId)=>{
        const users = readJSON(USERS_FILE, []);
        const index = users.findIndex((u)=>u.email === email);
        if (index === -1) {
            // Create user if not exists
            const newUser = {
                email,
                strikes: [
                    {
                        id: Date.now().toString(),
                        date: new Date().toISOString(),
                        reason,
                        orderId,
                        active: true
                    }
                ],
                status: 'CLEAR' // Will update below
            };
            users.push(newUser);
            // Recalculate status
            updateUserStatus(newUser);
            writeJSON(USERS_FILE, users);
            return newUser;
        }
        const user = users[index];
        user.strikes.push({
            id: Date.now().toString(),
            date: new Date().toISOString(),
            reason,
            orderId,
            active: true
        });
        updateUserStatus(user);
        writeJSON(USERS_FILE, users);
        return user;
    },
    removeStrike: (email, strikeId)=>{
        const users = readJSON(USERS_FILE, []);
        const user = users.find((u)=>u.email === email);
        if (!user) return null;
        const strike = user.strikes.find((s)=>s.id === strikeId);
        if (strike) {
            strike.active = false; // Soft delete
            updateUserStatus(user);
            writeJSON(USERS_FILE, users);
        }
        return user;
    }
};
function updateUserStatus(user) {
    const activeStrikes = user.strikes.filter((s)=>s.active).length;
    if (activeStrikes === 0) user.status = 'CLEAR';
    else if (activeStrikes === 1) user.status = 'YELLOW';
    else if (activeStrikes === 2) user.status = 'RED';
    else if (activeStrikes >= 3) user.status = 'BLACK';
}
// --- Community API ---
// --- Community API ---
const POSTS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'posts.json');
const dbPosts = {
    getAll: ()=>{
        const posts = readJSON(POSTS_FILE, []);
        return posts.sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
    },
    create: (post)=>{
        const posts = readJSON(POSTS_FILE, []);
        console.log(`[DB] Creating post. Current count: ${posts.length}`);
        const newPost = {
            ...post,
            id: Date.now().toString(),
            likes: [],
            comments: [],
            date: new Date().toISOString()
        };
        posts.push(newPost);
        writeJSON(POSTS_FILE, posts);
        console.log(`[DB] Post created. New count: ${posts.length}`);
        return newPost;
    },
    toggleLike: (postId, userEmail)=>{
        const posts = readJSON(POSTS_FILE, []);
        const post = posts.find((p)=>p.id === postId);
        if (!post) return null;
        const idx = post.likes.indexOf(userEmail);
        if (idx === -1) {
            post.likes.push(userEmail);
        } else {
            post.likes.splice(idx, 1);
        }
        writeJSON(POSTS_FILE, posts);
        return post;
    },
    addComment: (postId, comment)=>{
        const posts = readJSON(POSTS_FILE, []);
        const post = posts.find((p)=>p.id === postId);
        if (!post) return null;
        const newComment = {
            ...comment,
            id: Date.now().toString(),
            date: new Date().toISOString()
        };
        post.comments.push(newComment);
        writeJSON(POSTS_FILE, posts);
        return newComment;
    },
    deleteComment: (postId, commentId, userEmail)=>{
        const posts = readJSON(POSTS_FILE, []);
        const post = posts.find((p)=>p.id === postId);
        if (!post) return null;
        const commentIdx = post.comments.findIndex((c)=>c.id === commentId);
        if (commentIdx === -1) return null;
        const comment = post.comments[commentIdx];
        const isCommentOwner = comment.userEmail.toLowerCase().trim() === userEmail.toLowerCase().trim();
        const isPostOwner = post.userEmail.toLowerCase().trim() === userEmail.toLowerCase().trim();
        if (!isCommentOwner && !isPostOwner) return null; // Unauthorized
        post.comments.splice(commentIdx, 1);
        writeJSON(POSTS_FILE, posts);
        return post;
    },
    delete: (postId, userEmail)=>{
        const safeEmail = userEmail?.toLowerCase().trim();
        console.log(`[DB] Request Delete Post ${postId} by ${safeEmail}`);
        let posts = readJSON(POSTS_FILE, []);
        const post = posts.find((p)=>p.id === postId);
        if (!post) {
            console.log(`[DB] Post ${postId} not found.`);
            return false;
        }
        const postOwner = post.userEmail?.toLowerCase().trim();
        console.log(`[DB] Found Post. Owner: ${postOwner}, Requestor: ${safeEmail}`);
        if (postOwner !== safeEmail) {
            console.log(`[DB] Unauthorized delete attempt.`);
            return false;
        }
        posts = posts.filter((p)=>p.id !== postId);
        console.log(`[DB] Writing ${posts.length} posts to file.`);
        writeJSON(POSTS_FILE, posts);
        return true;
    },
    edit: (postId, userEmail, newContent)=>{
        const posts = readJSON(POSTS_FILE, []);
        const post = posts.find((p)=>p.id === postId);
        if (!post || post.userEmail.toLowerCase().trim() !== userEmail.toLowerCase().trim()) return null;
        post.content = newContent;
        writeJSON(POSTS_FILE, posts);
        return post;
    }
};
// --- Social & Messages API ---
const MESSAGES_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'messages.json');
const dbSocial = {
    toggleFollow: (userEmail, targetEmail)=>{
        const users = readJSON(USERS_FILE, []);
        const user = users.find((u)=>u.email === userEmail);
        const target = users.find((u)=>u.email === targetEmail);
        if (!user || !target) return false;
        if (!user.following) user.following = [];
        if (!target.followers) target.followers = [];
        const idx = user.following.indexOf(targetEmail);
        if (idx === -1) {
            user.following.push(targetEmail);
            target.followers.push(userEmail);
        } else {
            user.following.splice(idx, 1);
            const tIdx = target.followers.indexOf(userEmail);
            if (tIdx !== -1) target.followers.splice(tIdx, 1);
        }
        writeJSON(USERS_FILE, users);
        return true;
    },
    getMessages: (userEmail)=>{
        let msgs = readJSON(MESSAGES_FILE, []);
        // Auto-Delete > 24h
        const now = Date.now();
        const ONE_DAY = 24 * 60 * 60 * 1000;
        // const ONE_DAY = 2 * 60 * 1000; // Debug: 2 mins
        const initialLen = msgs.length;
        msgs = msgs.filter((m)=>now - new Date(m.timestamp).getTime() < ONE_DAY);
        if (msgs.length !== initialLen) writeJSON(MESSAGES_FILE, msgs);
        return msgs.filter((m)=>m.sender === userEmail || m.receiver === userEmail).sort((a, b)=>new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
    },
    sendMessage: (sender, receiver, content, replyToId)=>{
        const msgs = readJSON(MESSAGES_FILE, []);
        const newMsg = {
            id: Date.now().toString(),
            sender,
            receiver,
            content,
            timestamp: new Date().toISOString(),
            read: false,
            reactions: {},
            replyToId
        };
        msgs.push(newMsg);
        writeJSON(MESSAGES_FILE, msgs);
        return newMsg;
    },
    deleteMessage: (msgId, userEmail)=>{
        let msgs = readJSON(MESSAGES_FILE, []);
        const msg = msgs.find((m)=>m.id === msgId);
        // Allow sender or receiver to delete? Usually only sender deletes for everyone.
        if (!msg || msg.sender !== userEmail) return false;
        msgs = msgs.filter((m)=>m.id !== msgId);
        writeJSON(MESSAGES_FILE, msgs);
        return true;
    },
    editMessage: (msgId, userEmail, newContent)=>{
        const msgs = readJSON(MESSAGES_FILE, []);
        const msg = msgs.find((m)=>m.id === msgId);
        if (!msg || msg.sender !== userEmail) return null;
        msg.content = newContent;
        msg.edited = true;
        writeJSON(MESSAGES_FILE, msgs);
        return msg;
    },
    reactMessage: (msgId, userEmail, emoji)=>{
        const msgs = readJSON(MESSAGES_FILE, []);
        const msg = msgs.find((m)=>m.id === msgId);
        if (!msg) return null;
        if (!msg.reactions) msg.reactions = {};
        if (msg.reactions[userEmail] === emoji) delete msg.reactions[userEmail];
        else msg.reactions[userEmail] = emoji;
        writeJSON(MESSAGES_FILE, msgs);
        return msg;
    }
};
}),
"[project]/agronova/app/api/messages/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/lib/db.ts [app-route] (ecmascript)");
;
;
async function DELETE(req, props) {
    try {
        const params = await props.params;
        const { id } = params;
        const { searchParams } = new URL(req.url);
        const userEmail = searchParams.get('userEmail');
        if (!userEmail) return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Missing user"
        }, {
            status: 400
        });
        const success = __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbSocial"].deleteMessage(id, userEmail);
        if (!success) return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized or Not Found"
        }, {
            status: 403
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: e.message
        }, {
            status: 500
        });
    }
}
async function PATCH(req, props) {
    try {
        const params = await props.params;
        const { id } = params;
        const body = await req.json();
        const { userEmail, content, reaction } = body;
        let result;
        if (reaction) {
            result = __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbSocial"].reactMessage(id, userEmail, reaction);
        } else if (content) {
            result = __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbSocial"].editMessage(id, userEmail, content);
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No action specified"
            }, {
                status: 400
            });
        }
        if (!result) return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized or Not Found"
        }, {
            status: 403
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: e.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1285ba98._.js.map