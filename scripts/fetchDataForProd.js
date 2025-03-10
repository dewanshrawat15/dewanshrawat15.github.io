"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
require("dotenv/config");
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var url_1 = require("url");
var apiKey = process.env.VITE_REACT_APP_API_KEY;
var authDomain = process.env.VITE_REACT_APP_AUTH_DOMAIN;
var databaseURL = process.env.VITE_REACT_APP_DATABASE_URL;
var projectId = process.env.VITE_REACT_APP_PROJECT_ID;
var storageBucket = process.env.VITE_REACT_APP_STORAGE_BUCKET;
var messagingSenderId = process.env.VITE_REACT_APP_MESSAGING_SENDER_ID;
var appId = process.env.VITE_REACT_APP_ID;
// Check if environment variables are loaded.  Crucial for debugging!
if (!apiKey || !authDomain || !projectId) {
    console.error("ERROR: Missing Firebase environment variables.  Make sure your .env file is set up correctly.");
    process.exit(1); // Exit the script with an error code
}
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
};
// Initialize Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
var db = (0, firestore_1.getFirestore)(app);
var buildFirebaseProdDataForProd = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, socialMediaSnapshot, experienceSnapshot, projectsSnapshot, blogSnapshot, __filename, __dirname, utilsPath, socialMediaData, experienceData, projectsData, blogsData, defaultSocialMediaLinks, defaultWorkingExperience, defaultProjectsData, defaultBlogPosts, content;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    (0, firestore_1.getDocs)((0, firestore_1.collection)(db, "socialMediaLinks")),
                    (0, firestore_1.getDocs)((0, firestore_1.collection)(db, "workingExperience")),
                    (0, firestore_1.getDocs)((0, firestore_1.collection)(db, "projects")),
                    (0, firestore_1.getDocs)((0, firestore_1.collection)(db, "blogs")),
                ])];
            case 1:
                _a = _b.sent(), socialMediaSnapshot = _a[0], experienceSnapshot = _a[1], projectsSnapshot = _a[2], blogSnapshot = _a[3];
                __filename = (0, url_1.fileURLToPath)(import.meta.url);
                __dirname = path_1.default.dirname(__filename);
                utilsPath = path_1.default.join(__dirname, "../src/utils/constants.ts");
                socialMediaData = socialMediaSnapshot.docs.map(function (doc) {
                    return doc.data();
                });
                experienceData = experienceSnapshot.docs.map(function (doc) {
                    var docData = doc.data();
                    var startDateTimestamp = docData.startDate;
                    var endDateTimestamp = docData.endDate;
                    return __assign(__assign({}, docData), { startDate: startDateTimestamp.toDate(), endDate: endDateTimestamp === null || endDateTimestamp === void 0 ? void 0 : endDateTimestamp.toDate() });
                });
                projectsData = projectsSnapshot.docs.map(function (doc) {
                    var docData = doc.data();
                    return __assign(__assign({}, docData), { id: parseInt(docData.id) });
                });
                blogsData = blogSnapshot.docs.map(function (doc) { return doc.data(); });
                defaultSocialMediaLinks = socialMediaData;
                defaultWorkingExperience = experienceData;
                defaultProjectsData = projectsData;
                defaultBlogPosts = blogsData;
                content = "\nexport const defaultSocialMediaLinks = ".concat(JSON.stringify(defaultSocialMediaLinks, null, 2), ";\nexport const defaultWorkingExperience = ").concat(JSON.stringify(defaultWorkingExperience, null, 2), ";\nexport const defaultProjectsData = ").concat(JSON.stringify(defaultProjectsData, null, 2), ";\nexport const defaultBlogPosts = ").concat(JSON.stringify(defaultBlogPosts, null, 2), ";\n");
                (0, fs_1.writeFileSync)(utilsPath, content, { flag: "w" });
                console.log("Data written to file");
                process.exit(0);
                return [2 /*return*/];
        }
    });
}); };
buildFirebaseProdDataForProd();
