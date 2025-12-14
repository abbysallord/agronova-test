(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/agronova/components/ui/animated-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal,
    "ModalBody",
    ()=>ModalBody,
    "ModalContent",
    ()=>ModalContent,
    "ModalFooter",
    ()=>ModalFooter,
    "ModalProvider",
    ()=>ModalProvider,
    "ModalTrigger",
    ()=>ModalTrigger,
    "useModal",
    ()=>useModal,
    "useOutsideClick",
    ()=>useOutsideClick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
const ModalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ModalProvider = ({ children })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalContext.Provider, {
        value: {
            open,
            setOpen
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/agronova/components/ui/animated-modal.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalProvider, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = ModalProvider;
const useModal = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
_s1(useModal, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function Modal({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalProvider, {
        children: children
    }, void 0, false, {
        fileName: "[project]/agronova/components/ui/animated-modal.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
_c1 = Modal;
const ModalTrigger = ({ children, className })=>{
    _s2();
    const { setOpen } = useModal();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden", className),
        onClick: ()=>setOpen(true),
        children: children
    }, void 0, false, {
        fileName: "[project]/agronova/components/ui/animated-modal.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(ModalTrigger, "O7HZkQlbL1utzs2Wfwhh0tWq2CU=", false, function() {
    return [
        useModal
    ];
});
_c2 = ModalTrigger;
const ModalBody = ({ children, className })=>{
    _s3();
    const { open } = useModal();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalBody.useEffect": ()=>{
            if (open) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        }
    }["ModalBody.useEffect"], [
        open
    ]);
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { setOpen } = useModal();
    useOutsideClick(modalRef, {
        "ModalBody.useOutsideClick": ()=>setOpen(false)
    }["ModalBody.useOutsideClick"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                backdropFilter: "blur(10px)"
            },
            exit: {
                opacity: 0,
                backdropFilter: "blur(0px)"
            },
            className: "fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full  flex items-center justify-center z-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Overlay, {}, void 0, false, {
                    fileName: "[project]/agronova/components/ui/animated-modal.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: modalRef,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-h-[50%] max-h-[90%] md:max-w-[40%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden", className),
                    initial: {
                        opacity: 0,
                        scale: 0.5,
                        rotateX: 40,
                        y: 40
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        rotateX: 0,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8,
                        rotateX: 10
                    },
                    transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 15
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                            fileName: "[project]/agronova/components/ui/animated-modal.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/agronova/components/ui/animated-modal.tsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/agronova/components/ui/animated-modal.tsx",
            lineNumber: 87,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/agronova/components/ui/animated-modal.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(ModalBody, "ebwUVVVrNP4v9KWZBLlTqKRaIuc=", false, function() {
    return [
        useModal,
        useModal,
        useOutsideClick
    ];
});
_c3 = ModalBody;
const ModalContent = ({ children, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col flex-1 p-8 md:p-10", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/agronova/components/ui/animated-modal.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = ModalContent;
const ModalFooter = ({ children, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex justify-end p-4 bg-gray-100 dark:bg-neutral-900", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/agronova/components/ui/animated-modal.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = ModalFooter;
const Overlay = ({ className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            backdropFilter: "blur(10px)"
        },
        exit: {
            opacity: 0,
            backdropFilter: "blur(0px)"
        },
        className: `fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ${className}`
    }, void 0, false, {
        fileName: "[project]/agronova/components/ui/animated-modal.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = Overlay;
const CloseIcon = ()=>{
    _s4();
    const { setOpen } = useModal();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setOpen(false),
        className: "absolute top-4 right-4 group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "text-black dark:text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/agronova/components/ui/animated-modal.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 6l-12 12"
                }, void 0, false, {
                    fileName: "[project]/agronova/components/ui/animated-modal.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/agronova/components/ui/animated-modal.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/agronova/components/ui/animated-modal.tsx",
            lineNumber: 200,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/agronova/components/ui/animated-modal.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(CloseIcon, "O7HZkQlbL1utzs2Wfwhh0tWq2CU=", false, function() {
    return [
        useModal
    ];
});
_c7 = CloseIcon;
const useOutsideClick = (ref, callback)=>{
    _s5();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOutsideClick.useEffect": ()=>{
            const listener = {
                "useOutsideClick.useEffect.listener": (event)=>{
                    // DO NOTHING if the element being clicked is the target element or their children
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    callback(event);
                }
            }["useOutsideClick.useEffect.listener"];
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return ({
                "useOutsideClick.useEffect": ()=>{
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                }
            })["useOutsideClick.useEffect"];
        }
    }["useOutsideClick.useEffect"], [
        ref,
        callback
    ]);
};
_s5(useOutsideClick, "OD7bBpZva5O2jO+Puf00hKivP7c=");
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "ModalProvider");
__turbopack_context__.k.register(_c1, "Modal");
__turbopack_context__.k.register(_c2, "ModalTrigger");
__turbopack_context__.k.register(_c3, "ModalBody");
__turbopack_context__.k.register(_c4, "ModalContent");
__turbopack_context__.k.register(_c5, "ModalFooter");
__turbopack_context__.k.register(_c6, "Overlay");
__turbopack_context__.k.register(_c7, "CloseIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/agronova/app/dashboard/schemes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SchemesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconExternalLink.mjs [app-client] (ecmascript) <export default as IconExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuildingBank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuildingBank$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconBuildingBank.mjs [app-client] (ecmascript) <export default as IconBuildingBank>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript) <export default as IconCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileDescription$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconFileDescription.mjs [app-client] (ecmascript) <export default as IconFileDescription>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconListCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconListCheck$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconListCheck.mjs [app-client] (ecmascript) <export default as IconListCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript) <export default as IconSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$components$2f$ui$2f$animated$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/components/ui/animated-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SchemesPage() {
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const schemes = [
        {
            title: "PM-KISAN Samman Nidhi",
            description: "A Central Sector scheme with 100% funding from Government of India. Under the scheme an income support of ₹6,000/- per year in three equal installments will be provided to all land holding farmer families.",
            benefits: [
                "₹6,000 per year directly into bank account",
                "Paid in 3 equal installments of ₹2,000",
                "No intermediaries involved"
            ],
            eligibility: [
                "All landholding farmer families",
                "Husband, Wife and Minor Children"
            ],
            documents: [
                "Aadhaar Card",
                "Landholding Papers (Khata/Khasra)",
                "Bank Account Details",
                "Mobile Number linked to Aadhaar"
            ],
            process: [
                "Visit the official PM-KISAN website.",
                "Go to 'Farmer Corner' -> 'New Farmer Registration'.",
                "Enter Aadhaar Number and State.",
                "Fill in the application form with land details.",
                "Submit and take a printout."
            ],
            link: "https://pmkisan.gov.in/",
            type: "Central Govt",
            deadline: "Always Open"
        },
        {
            title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
            description: "A crop insurance scheme that integrates multiple stakeholders on a single platform. It offers insurance cover against failure of the crop due to non-preventable natural risks.",
            benefits: [
                "Lowest premium rates for farmers (2% Kharif, 1.5% Rabi)",
                "Full sum insured offered for manufacturing",
                "Use of technology for faster claims settlement"
            ],
            eligibility: [
                "All farmers growing notified crops in notified areas",
                "Sharecroppers and tenant farmers are also eligible"
            ],
            documents: [
                "Land Possession Certificate (LPC)",
                "Aadhaar Card",
                "Bank Passbook",
                "Sowing Certificate"
            ],
            process: [
                "Register on PMFBY Portal.",
                "Fill in insurance proposal form.",
                "Upload land and crop details.",
                "Pay the premium amount online or at CSC.",
                "Download the insurance policy."
            ],
            link: "https://pmfby.gov.in/",
            type: "Central Govt",
            deadline: "Seasonal (July/Dec)"
        },
        {
            title: "Kisan Credit Card (KCC)",
            description: "Provides adequate and timely credit support from the banking system under a single window with flexible and simplified procedure to the farmers for their cultivation and other needs.",
            benefits: [
                "Credit at subsidized interest rate of 4% (on timely repayment)",
                "Collateral-free loan up to ₹1.60 Lakh",
                "ATM enabled RuPay Debit Card"
            ],
            eligibility: [
                "Farmers - individual/joint",
                "Tenant Farmers, Oral Lessees & Share Croppers",
                "SHGs or Joint Liability Groups of farmers"
            ],
            documents: [
                "Application Form",
                "Two Passport Size Photos",
                "ID Proof (Aadhaar/Voter ID)",
                "Address Proof",
                "Land Records"
            ],
            process: [
                "Visit your nearest bank branch.",
                "Ask for KCC Application Form.",
                "Submit filled form with land documents.",
                "Bank verifies details and sanctions limit.",
                "Receive KCC Card."
            ],
            link: "https://www.myscheme.gov.in/schemes/kcc",
            type: "Central Govt",
            deadline: "Always Open"
        },
        {
            title: "Soil Health Card Scheme",
            description: "Government issues soil health cards to farmers which will carry crop-wise recommendations of nutrients and fertilizers required for the individual farms.",
            benefits: [
                "Report card on nutrient status of soil",
                "Recommendations on dosage of fertilizers",
                "Improves soil health and crop productivity"
            ],
            eligibility: [
                "All farmers in India"
            ],
            documents: [
                "Aadhaar Card",
                "Land Records",
                "Mobile Number"
            ],
            process: [
                "Soil samples collected by State Govt officials.",
                "Samples tested in Soil Testing Labs.",
                "Soil Health Card generated.",
                "Distributed to farmers via Agriculture Departments."
            ],
            link: "https://soilhealth.dac.gov.in/",
            type: "Central Govt",
            deadline: "Cycle of 2 Years"
        },
        {
            title: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
            description: "Focused on extending the coverage of irrigation 'Har Khet ko Pani' and improving water use efficiency 'More crop per drop'.",
            benefits: [
                "Subsidies for Drip/Sprinkler irrigation systems",
                "Assured irrigation source",
                "Water conservation training"
            ],
            eligibility: [
                "Farmers with cultivable land",
                "Valid land holding"
            ],
            documents: [
                "Aadhaar Card",
                "Land Ownership Proof",
                "Bank Details",
                "Caste Certificate (if applicable)"
            ],
            process: [
                "Apply via State Agriculture/Horticulture Dept portal.",
                "Submit application with land documents.",
                "Inspection of site by officials.",
                "Installation of system by registered vendors.",
                "Subsidy released to bank account."
            ],
            link: "https://pmksy.gov.in/",
            type: "Central Govt",
            deadline: "State-wise"
        },
        {
            title: "Paramparagat Krishi Vikas Yojana (PKVY)",
            description: "Aiming to promote organic farming. Farmers are encouraged to form groups or clusters and take to organic farming methods.",
            benefits: [
                "₹50,000 per hectare for 3 years",
                "Financial assistance for organic inputs",
                "Support for marketing and branding"
            ],
            eligibility: [
                "Farmers willing to practice organic farming",
                "Cluster of 50 acres (approx 20-50 farmers)"
            ],
            documents: [
                "Aadhaar Card",
                "Land Documents",
                "Bank Account"
            ],
            process: [
                "Form a cluster of farmers.",
                "Register on the Jaivik Kheti portal.",
                "Submit action plan through Regional Council.",
                "Receive funds in installments."
            ],
            link: "https://pgsindia-ncof.gov.in/pkvy/index.aspx",
            type: "Central Govt",
            deadline: "Project Based"
        }
    ];
    const filteredSchemes = schemes.filter((s)=>s.title.toLowerCase().includes(searchTerm.toLowerCase()) || s.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-neutral-800 dark:text-white mb-2",
                        children: "Government Schemes for Farmers"
                    }, void 0, false, {
                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-neutral-500 dark:text-neutral-400 mb-6 max-w-2xl",
                        children: "Access a curated list of government initiatives designed to support your farming journey. Get details on eligibility, documents, and application processes instantly."
                    }, void 0, false, {
                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-md w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__["IconSearch"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search schemes (e.g. Kisan Credit Card)...",
                                className: "w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-green-500 outline-none transition-all",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20",
                children: filteredSchemes.map((scheme, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$components$2f$ui$2f$animated$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:border-green-500/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-700 dark:text-green-300 group-hover:scale-110 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuildingBank$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuildingBank$3e$__["IconBuildingBank"], {
                                                    size: 28
                                                }, void 0, false, {
                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700",
                                                children: scheme.type
                                            }, void 0, false, {
                                                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-neutral-800 dark:text-white mb-2 leading-tight",
                                        children: scheme.title
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mb-6 flex-1",
                                        children: scheme.description
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2 text-sm bg-neutral-50 dark:bg-neutral-800/50 p-2 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-neutral-700 dark:text-neutral-300 shrink-0",
                                                        children: "Benefit:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-neutral-600 dark:text-neutral-400 line-clamp-1",
                                                        children: scheme.benefits[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm px-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-neutral-700 dark:text-neutral-300 shrink-0",
                                                        children: "Deadline:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", scheme.deadline.includes("Always") ? "text-green-600" : "text-amber-600"),
                                                        children: scheme.deadline
                                                    }, void 0, false, {
                                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$components$2f$ui$2f$animated$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalTrigger"], {
                                        className: "w-full py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg",
                                        children: [
                                            "View Full Details ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__["IconExternalLink"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$components$2f$ui$2f$animated$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBody"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$components$2f$ui$2f$animated$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContent"], {
                                        className: "overflow-y-auto max-h-[80vh]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-3 py-1 text-xs font-bold rounded-full bg-green-100 text-green-700 border border-green-200",
                                                                    children: "Active Scheme"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-neutral-500",
                                                                    children: scheme.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2",
                                                            children: scheme.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-neutral-600 dark:text-neutral-300",
                                                            children: scheme.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                                    className: "border-neutral-200 dark:border-neutral-800"
                                                }, void 0, false, {
                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-lg font-bold text-green-700 dark:text-green-400 flex items-center gap-2 mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                                                                    className: "h-5 w-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                    lineNumber: 215,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                " Key Benefits"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                            lineNumber: 214,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "space-y-2",
                                                                            children: scheme.benefits.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: "flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                            lineNumber: 220,
                                                                                            columnNumber: 53
                                                                                        }, this),
                                                                                        b
                                                                                    ]
                                                                                }, i, true, {
                                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                    lineNumber: 219,
                                                                                    columnNumber: 49
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                            lineNumber: 217,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-lg font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2 mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconListCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconListCheck$3e$__["IconListCheck"], {
                                                                                    className: "h-5 w-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                    lineNumber: 228,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                " Eligibility"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                            lineNumber: 227,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "space-y-2",
                                                                            children: scheme.eligibility.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: "flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                            lineNumber: 233,
                                                                                            columnNumber: 53
                                                                                        }, this),
                                                                                        e
                                                                                    ]
                                                                                }, i, true, {
                                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                    lineNumber: 232,
                                                                                    columnNumber: 49
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                            lineNumber: 230,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 38
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                                    className: "bg-neutral-50 dark:bg-neutral-900 p-5 rounded-xl border border-neutral-100 dark:border-neutral-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-lg font-bold text-amber-700 dark:text-amber-500 flex items-center gap-2 mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileDescription$3e$__["IconFileDescription"], {
                                                                                    className: "h-5 w-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                    lineNumber: 245,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                " Documents Required"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                            lineNumber: 244,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "grid grid-cols-1 gap-2",
                                                                            children: scheme.documents.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: "flex items-center gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-200",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                                                                            className: "h-4 w-4 text-green-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                            lineNumber: 250,
                                                                                            columnNumber: 53
                                                                                        }, this),
                                                                                        " ",
                                                                                        d
                                                                                    ]
                                                                                }, i, true, {
                                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                    lineNumber: 249,
                                                                                    columnNumber: 49
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                            lineNumber: 247,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 38
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-lg font-bold text-neutral-900 dark:text-white mb-3",
                                                                            children: "How to Apply"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                            lineNumber: 257,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                                            className: "space-y-3 relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-2",
                                                                            children: scheme.process.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: "ml-6 relative",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "absolute -left-[31px] top-0 h-6 w-6 rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-white dark:border-neutral-900 flex items-center justify-center text-xs font-bold text-neutral-500",
                                                                                            children: i + 1
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                            lineNumber: 263,
                                                                                            columnNumber: 53
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm text-neutral-700 dark:text-neutral-300",
                                                                                            children: step
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                            lineNumber: 266,
                                                                                            columnNumber: 53
                                                                                        }, this)
                                                                                    ]
                                                                                }, i, true, {
                                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                                    lineNumber: 262,
                                                                                    columnNumber: 49
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                            lineNumber: 260,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$components$2f$ui$2f$animated$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalFooter"], {
                                        className: "gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-neutral-500 italic mr-auto mt-2",
                                                children: "*Always verify details on the official portal."
                                            }, void 0, false, {
                                                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: scheme.link,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2",
                                                children: [
                                                    "Apply on Official Portal ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__["IconExternalLink"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 54
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                        lineNumber: 154,
                        columnNumber: 14
                    }, this))
            }, void 0, false, {
                fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/agronova/app/dashboard/schemes/page.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(SchemesPage, "+YdqPTpSlp4r5CWiFEQiF/UjThM=");
_c = SchemesPage;
var _c;
__turbopack_context__.k.register(_c, "SchemesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconExternalLink.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconExternalLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M11 13l9 -9",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M15 4h5v5",
            "key": "svg-2"
        }
    ]
];
const IconExternalLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "external-link", "ExternalLink", __iconNode);
;
 //# sourceMappingURL=IconExternalLink.mjs.map
}),
"[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconExternalLink.mjs [app-client] (ecmascript) <export default as IconExternalLink>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconExternalLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconExternalLink.mjs [app-client] (ecmascript)");
}),
"[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M5 12l5 5l10 -10",
            "key": "svg-0"
        }
    ]
];
const IconCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "check", "Check", __iconNode);
;
 //# sourceMappingURL=IconCheck.mjs.map
}),
"[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript) <export default as IconCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript)");
}),
"[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconFileDescription.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconFileDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M14 3v4a1 1 0 0 0 1 1h4",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M9 17h6",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M9 13h6",
            "key": "svg-3"
        }
    ]
];
const IconFileDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "file-description", "FileDescription", __iconNode);
;
 //# sourceMappingURL=IconFileDescription.mjs.map
}),
"[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconFileDescription.mjs [app-client] (ecmascript) <export default as IconFileDescription>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconFileDescription",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconFileDescription.mjs [app-client] (ecmascript)");
}),
"[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconListCheck.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconListCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M3.5 5.5l1.5 1.5l2.5 -2.5",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M3.5 11.5l1.5 1.5l2.5 -2.5",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M3.5 17.5l1.5 1.5l2.5 -2.5",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M11 6l9 0",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M11 12l9 0",
            "key": "svg-4"
        }
    ],
    [
        "path",
        {
            "d": "M11 18l9 0",
            "key": "svg-5"
        }
    ]
];
const IconListCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "list-check", "ListCheck", __iconNode);
;
 //# sourceMappingURL=IconListCheck.mjs.map
}),
"[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconListCheck.mjs [app-client] (ecmascript) <export default as IconListCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconListCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconListCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconListCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconListCheck.mjs [app-client] (ecmascript)");
}),
"[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M21 21l-6 -6",
            "key": "svg-1"
        }
    ]
];
const IconSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "search", "Search", __iconNode);
;
 //# sourceMappingURL=IconSearch.mjs.map
}),
"[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript) <export default as IconSearch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconSearch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=agronova_7f5af19e._.js.map