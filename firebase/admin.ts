import {getFirestore} from "firebase-admin/firestore"
import admin from "firebase-admin"
import {firebaseConfig} from "@/firebase/config";

const initializeFirebaseAdmin = () => {
    if(admin.apps.length > 0) return admin.app()

    return admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_ADMIN_PROJECT_ID as string,
            clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL as string,
            privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n') as string,
        }),
        projectId: firebaseConfig.projectId,
        storageBucket: firebaseConfig.storageBucket
    })
}

initializeFirebaseAdmin()

export const getApplicationStatistics = async () => {
    const firestore = getFirestore()

    const delegates = (await firestore.collection('users').where("application.position", "==", "Delege").count().get()).data().count
    const admins = (await firestore.collection('users').where("application.position", "==", "Gözlemci").count().get()).data().count
    const presses = (await firestore.collection('users').where("application.position", "==", "Basın").count().get()).data().count
    const chairs = (await firestore.collection('users').where("application.position", "==", "Komite Divanı").count().get()).data().count

    return {
        delegates: delegates + 250,
        admins: admins + 50,
        presses: presses + 20,
        chairs: chairs + 20
    }
}