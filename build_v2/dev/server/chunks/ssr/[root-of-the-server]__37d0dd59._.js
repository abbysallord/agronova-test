module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/agronova/context/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Helper to normalize emails to prevent duplicates via case sensitivity
    const normalize = (email)=>email.trim().toLowerCase();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 1. Check local storage for existing session
        const storedUser = localStorage.getItem("agronova_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        // 2. Seed Test User (Investor Demo)
        const demoEmail = "demo@agronova.com";
        const demoKey = `reg_${demoEmail}`;
        if (!localStorage.getItem(demoKey)) {
            console.log("Seeding Demo User...");
            localStorage.setItem(demoKey, JSON.stringify({
                name: "Investor Demo",
                password: "password123",
                location: "Bangalore, KA",
                role: "Farmer"
            }));
        }
    }, []);
    const persistUser = (userData)=>{
        setUser(userData);
        localStorage.setItem("agronova_user", JSON.stringify(userData));
    };
    const updateProfile = (updates)=>{
        if (!user) return;
        const updatedUser = {
            ...user,
            ...updates
        };
        persistUser(updatedUser);
        // Update persistent record (so it survives logout/login)
        const cleanEmail = normalize(user.email);
        // Don't update reg for admin special case unless we want to, 
        // but for 'dshenoyh' we used hardcoded check originally.
        // We will now try to save to reg for everyone to ensure persistence.
        const regKey = `reg_${cleanEmail}`;
        const storedReg = localStorage.getItem(regKey);
        if (storedReg) {
            const currentReg = JSON.parse(storedReg);
            // Preserve password, overwrite other fields
            const newReg = {
                ...currentReg,
                ...updates
            };
            // Remove fields that shouldn't be in reg if any (none really)
            localStorage.setItem(regKey, JSON.stringify(newReg));
        } else {
        // If no reg exists (e.g. hardcoded admin), maybe create one?
        // For now, only persist to session is guaranteed if no reg exists.
        }
    };
    const login = async (email, password)=>{
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        const cleanEmail = normalize(email);
        // 1. Admin Credential Check
        if (cleanEmail === "dshenoyh@gmail.com") {
            const storedReg = localStorage.getItem(`reg_${cleanEmail}`);
            if (storedReg) {
                const storedData = JSON.parse(storedReg);
                if (password === storedData.password) {
                    const { password: _, ...profileData } = storedData;
                    persistUser({
                        ...profileData,
                        email: cleanEmail,
                        role: "Admin"
                    });
                    return true;
                }
            } else if (password === "admin@123") {
                persistUser({
                    name: "Dhanush Shenoy",
                    email: cleanEmail,
                    role: "Admin"
                });
                return true;
            }
            return false;
        }
        // 2. Regular / Demo User Check
        const storedReg = localStorage.getItem(`reg_${cleanEmail}`);
        if (storedReg) {
            const storedData = JSON.parse(storedReg);
            if (password === storedData.password) {
                const { password: _, ...profileData } = storedData;
                persistUser({
                    ...profileData,
                    email: cleanEmail,
                    role: "Farmer"
                });
                return true;
            }
        }
        return false;
    };
    const register = async (name, email, password)=>{
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        const cleanEmail = normalize(email);
        // Check if loading user already exists (optional but good practice)
        if (localStorage.getItem(`reg_${cleanEmail}`)) {
        // allow overwrite for demo
        }
        // Initialize with basic data
        localStorage.setItem(`reg_${cleanEmail}`, JSON.stringify({
            name,
            password
        }));
        const role = cleanEmail === "dshenoyh@gmail.com" ? "Admin" : "Farmer";
        persistUser({
            name,
            email: cleanEmail,
            role
        });
        return true;
    };
    const sendOtp = async (email)=>{
        const cleanEmail = normalize(email);
        // Check if user exists (mock check for now, ideally check DB)
        const storedReg = localStorage.getItem(`reg_${cleanEmail}`);
        const isAdmin = cleanEmail === "dshenoyh@gmail.com";
        const isDemo = cleanEmail === "demo@agronova.com";
        if (!storedReg && !isAdmin && !isDemo) {
            throw new Error("User not found. Please sign up first.");
        }
        try {
            const res = await fetch("/api/auth/otp/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: cleanEmail
                })
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to send OTP");
            }
            const { hash, expiry } = await res.json();
            // Store Hash + Expiry in LocalStorage for verification step
            localStorage.setItem(`otp_hash_${cleanEmail}`, JSON.stringify({
                hash,
                expiry
            }));
            return "Code sent to email!"; // Return message instead of code
        } catch (error) {
            throw new Error(error.message);
        }
    };
    const verifyOtp = async (email, code)=>{
        const cleanEmail = normalize(email);
        const storedHashData = localStorage.getItem(`otp_hash_${cleanEmail}`);
        if (!storedHashData) {
            throw new Error("OTP session expired. Please request a new code.");
        }
        const { hash, expiry } = JSON.parse(storedHashData);
        try {
            const res = await fetch("/api/auth/otp/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: cleanEmail,
                    otp: code,
                    hash,
                    expiry
                })
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Invalid OTP");
            }
            // Verification Success -> Log user in
            const storedReg = localStorage.getItem(`reg_${cleanEmail}`);
            let role = "Farmer";
            let profileData = {
                name: "Farmer"
            };
            if (cleanEmail === "dshenoyh@gmail.com") {
                role = "Admin";
                profileData = {
                    name: "Dhanush Shenoy"
                };
            }
            if (storedReg) {
                const storedData = JSON.parse(storedReg);
                const { password: _, ...rest } = storedData;
                profileData = rest;
            }
            persistUser({
                ...profileData,
                email: cleanEmail,
                role
            });
            localStorage.removeItem(`otp_hash_${cleanEmail}`); // Clear OTP hash after success
            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("agronova_user");
        router.push("/login");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated: !!user,
            login,
            register,
            sendOtp,
            verifyOtp,
            logout,
            updateProfile
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/agronova/context/AuthContext.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__37d0dd59._.js.map