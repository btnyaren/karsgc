import {getFirestore} from "firebase-admin/firestore"
import admin from "firebase-admin"
import {firebaseConfig} from "@/firebase/config";

const initializeFirebaseAdmin = () => {
    if(admin.apps.length > 0) return admin.app()

    return admin.initializeApp({
        credential: admin.credential.cert({
            projectId: "karsgc3",
            clientEmail: "firebase-adminsdk-fbsvc@karsgc3.iam.gserviceaccount.com",
            privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC3qvQWCwEqBStc\n2rnx79GmpwWCJAfp8SR5M10zG8pWhvQ43DPrJxBZrQlrSCXWdCXVcrGjB4WXmJ1U\nHVycCmQe7HxCSxB4ux37NAruJ3qrklYpkTKkX7gECJEA1le/rBBQ0EkRI48Y0aE0\nrHBxev0WFMWu6OVYo5GjmOT6u6z7kSV/A/i33h31+/dSFUhu/S5lFVOGiAJzxAob\nz5JpNTPo8dQhzG23+o7meaH/TauxQLz1MWSOlU5DSEK24OWHp8reQbUeofmmgL0e\nVYquRAxDAHiJqqiDHIyEuwmbnSOz9DJa+029EQ6OcIr+izKeqLxS51a9ZstwQCQo\nMvGcwWoxAgMBAAECggEAFhI1lcaJw8ZuQRDJwpCapYexqkNxLgQ76VKqUv92b7J0\n+7Y+iPYfSV95X8qCPYSknUNUpG49eAuvcFG89MVs5ahugDrsBk4aGrtUyuy0mZSS\nxRj9OHKGNvnejvazAcYICeYVubkHs6hRUnacZo6shjBF1zCGiwHQ+RNhBN5zuaEx\n9C9LoA0nmAlXQsJeMsYwBxYChxTT8Pg/BYrjtAU+gYScailDctARctkRRkR1HVMd\nSIPvNajtJVlM+j/9bMYMjxNB0Z6AmJGcXQAPB3lfImtgPFlGBn9/IXXwyubU9M/8\nOP/QVVlbweSN0sJxZbpvrJGfZ7OyNH6nYaal/Cv/fwKBgQDhdYS8uDgf3OISilvF\nVfMvZHVJfUV3LAJ29kywtegefowwyQEGKfwuUwrxpcl9FvhLryofnzN627VhlIIe\nPu5NhVs5wOzpobgTSRr0rAozgTklffDactM5F6pYgOyAD2NS16hoZGxefCxGkzhc\nA8UeUUT6dNnm1sPKYEICdwxhZwKBgQDQjDHs4mJPhOBhkSSi9xciiemYpxjOSA8R\nrriv54HbKBTMU/IElorLS6BalpqEdS+zthoAaN5QN9tbXvZU1q22MizxGzjqaDZr\n9FLAzTZMz0jSn8Haru49gJEAIZPDKzkv9yxuPUy1CV2+rgyrVYsTCypAi5tP9dLB\nXgk6VtcgpwKBgQDC6CVoQJnEcd++x32uiy9AuUfr0DBNZe57iVGjMp8IPb5ULnCE\nM6efJItBfGFDkqf0RenUjHykqWuUgB48p4q72Z2TwAUPtI69nWWAP3pSLFSK5OVi\n9AFGSf8po8rQqnzjESy1kptc01wzZvJCGcA/BWLsYjg+J0v7mFt4ZhJ94QKBgQCs\nolE1wdUV9G319jt4t8gr7DQ2DKTJJfdrcNIrsx3YuF43IopmZ+QvE8SDGMaCPaum\nPWlay3S0vPhVs8+APVIBT5nKYPmFeY0LYm4acgWwIasrx9mmWEaZHNNrY2A5II+v\neBIMk6vq9PzoOpX8Qszkj8qDMc34rAqxzVEgPQDKYwKBgQCISCp3pGGHEADGdRdW\nRdzBo2wCxIU5NDxwMNkQOqM0RXYnqFo464MELmlakUpMagMlJxpSV4uyk0gVXKpE\nQToQQ4K20r9s2UNC0a9zRiOWZXpXBbz/STZy+nGJ4jkm07kEayhRH/6gIHcRdGrI\nvgOl3bY0UC9aqL39DzgCxNEifQ==\n-----END PRIVATE KEY-----\n",
        }),
        projectId: firebaseConfig.projectId,
        storageBucket: firebaseConfig.storageBucket
    });
}

/*initializeFirebaseAdmin()

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
}*/