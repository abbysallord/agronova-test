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
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/agronova/lib/email-templates.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailTemplate",
    ()=>EmailTemplate
]);
const EmailTemplate = {
    Invoice: (orderId, amount, items)=>`
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #16a34a;">Order Received!</h1>
            <p>Hi there,</p>
            <p>Thank you for your purchase. We have received your payment request for <strong>Order #${orderId}</strong>.</p>
            <p>Your order is currently <strong>Processing Verification</strong> by the seller.</p>
            
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Order Details</h3>
                <ul style="padding-left: 20px;">
                    ${items.map((i)=>`<li>${i.name} x ${i.quantity} - ₹${i.price * i.quantity}</li>`).join('')}
                </ul>
                <p><strong>Total Paid: ₹${amount.toFixed(2)}</strong></p>
            </div>

            <p>You will receive a confirmation once the seller verifies the transaction.</p>
        </div>
    `,
    SellerVerification: (orderId, amount, buyerUpiId, verifyLink)=>`
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #2563eb;">Action Required: Verify Payment</h1>
            <p>Hello Seller,</p>
            <p>You have a new order <strong>#${orderId}</strong> for <strong>₹${amount.toFixed(2)}</strong>.</p>
            
            <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
                <p style="margin: 0;"><strong>Buyer UPI/Ref:</strong> ${buyerUpiId}</p>
                <p style="margin: 5px 0 0;">(Please check your Bank Statement for this transaction)</p>
            </div>

            <p>To accept this order and view shipping details, you MUST verify the payment.</p>
            
            <a href="${verifyLink}" style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Verify Payment Now</a>
            
            <p style="font-size: 12px; color: #666; margin-top: 20px;">If you did not receive this payment, click the link and report it.</p>
        </div>
    `,
    SellerSuccess: (orderId, address)=>`
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #16a34a;">Order Verified!</h1>
            <p>Great! You have confirmed the payment for Order <strong>#${orderId}</strong>.</p>
            
            <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #bbf7d0;">
                <h3 style="margin-top: 0; color: #166534;">Shipping Details</h3>
                <p style="white-space: pre-wrap;">${address}</p>
            </div>

            <p>Please ship the items as soon as possible.</p>
        </div>
    `,
    BuyerFailed: (orderId)=>`
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #dc2626;">Payment Failed</h1>
            <p>We are sorry, but the seller could not verify your payment for Order <strong>#${orderId}</strong>.</p>
            <p>This order has been cancelled.</p>
            <p>If you believe this is an error, please reply to this email immediately with your payment proof (Screenshot/UTR).</p>
        </div>
    `
};
}),
"[project]/agronova/app/api/store/order/verify/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$email$2d$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/lib/email-templates.ts [app-route] (ecmascript)");
;
;
;
;
const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
async function sendMail(to, subject, html) {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            html
        });
        return true;
    } catch (e) {
        console.error("Email Error:", e);
        return false;
    }
}
async function POST(req) {
    try {
        const body = await req.json();
        const { orderId, action } = body;
        const order = __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbOrders"].getById(orderId);
        if (!order) return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Order not found"
        }, {
            status: 404
        });
        if (action === 'VERIFY') {
            // Validate Seller Identity
            // 1. Check if email provided matches the seller of the items
            const orderSellerEmail = order.items[0]?.sellerEmail || process.env.EMAIL_USER || "admin@agronova.com";
            // Case-insensitive check
            if (body.sellerEmail.trim().toLowerCase() !== orderSellerEmail.trim().toLowerCase()) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "Email does not match the seller record."
                }, {
                    status: 403
                });
            }
            // 2. Prevent Self-Verification (Buyer != Seller)
            if (body.sellerEmail.trim().toLowerCase() === order.buyerEmail.trim().toLowerCase()) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "Buyer cannot verify their own order."
                }, {
                    status: 403
                });
            }
            // 3. Verify Buyer UPI ID (Transaction Proof)
            // Seller must know who paid them.
            const storedUpi = (order.buyerUpiIndex || "").trim().toLowerCase();
            const inputUpi = (body.buyerUpiInput || "").trim().toLowerCase();
            if (inputUpi !== storedUpi) {
                // Formatting mismatch or wrong ID
                const newTries = (order.tries || 0) + 1;
                if (newTries >= 5) {
                    // Too many wrong attempts => Cancel Order (Security Risk or Fraud)
                    __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbOrders"].update(orderId, {
                        status: 'FAILED',
                        tries: newTries
                    });
                    // Strike against Buyer? Or just notify? 
                    // User said: "order will be cancelled and buyer will be informed".
                    await sendMail(order.buyerEmail, `Order Cancelled #${orderId}`, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$email$2d$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmailTemplate"].BuyerFailed(orderId));
                    return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        status: 'FAILED',
                        message: "Order Cancelled due to repeated verification failures."
                    });
                } else {
                    // Soft Fail
                    __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbOrders"].update(orderId, {
                        tries: newTries
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: true,
                        status: 'PENDING_SELLER',
                        remaining: 5 - newTries
                    });
                }
            }
            // If Match -> Success
            __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbOrders"].update(orderId, {
                status: 'VERIFIED'
            });
            // Send Success Email to Seller with Shipping Details
            await transporter.sendMail({
                from: '"AgriStore" <' + process.env.EMAIL_USER + '>',
                to: body.sellerEmail,
                subject: `Payment Verified: Order ${order.id}`,
                html: __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$email$2d$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmailTemplate"].SellerSuccess(order.id, order.shippingAddress)
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                status: 'VERIFIED'
            });
        } else if (action === 'REJECT') {
            // Failure Logic
            const newTries = (order.tries || 0) + 1;
            if (newTries >= 5) {
                // Permanently Fail
                __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbOrders"].update(orderId, {
                    status: 'FAILED',
                    tries: newTries
                });
                // Strike Logic
                __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbUsers"].addStrike(order.buyerEmail, "Payment Verification Failed 5x", orderId);
                // Notify Buyer
                await sendMail(order.buyerEmail, `Order Cancelled #${orderId}`, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$email$2d$templates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmailTemplate"].BuyerFailed(orderId));
                return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    status: 'FAILED'
                });
            } else {
                // Just increment
                __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dbOrders"].update(orderId, {
                    tries: newTries
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    status: 'PENDING_SELLER',
                    tries: newTries,
                    message: `Retry recorded. ${5 - newTries} attempts remaining.`
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid Action"
        }, {
            status: 400
        });
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Server Error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fe5faa05._.js.map