import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Firebase Admin SDK initialization (Server-side only)
let adminApp: App;

if (!getApps().length) {
  // Initialize with service account credentials
  adminApp = initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID as string,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL as string,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n') as string,
    }),
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
  });
} else {
  adminApp = getApps()[0];
}

// Initialize Admin SDK services
export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);

export default adminApp;
