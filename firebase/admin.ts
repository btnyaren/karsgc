import {getFirestore} from "firebase-admin/firestore"
import admin from "firebase-admin"
import {firebaseConfig} from "@/firebase/config";

const initializeFirebaseAdmin = () => {
    if(admin.apps.length > 0) return admin.app()

    return admin.initializeApp({
        credential: admin.credential.cert({
            privateKey: "-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCjGMt9bks3Sj6l\\nrjr2/4Cm3D4d0Jwnu22GukJv9lLh5V36xJrRLjE5Txu+rUV+bZ3QhiZWL9XnQjbD\\nEMrLwdV8dHPyfoHodsrJ4RvYuQnHp3WmeVZGwd6+JkrK/BwFV7ILdVVw0+UD121T\\n/xGLpw/gklCYe2p8Wpl618qjo0RXTvA44F2iiQyijLpUzzmxW7d0qkbM8zZBPtUZ\\nMEgJx4wPAvYJXdridYmv546y/KY6C5LknDPXp2z8M++j3Bh+gx53dgm4Oe/na+QT\\np8dSazK0P1zJl0FF9ZtHlXaU6ee+Ia12wKF9k53IahfS0Oro3qdFXtCyLfbiTdfK\\n/COtlnS1AgMBAAECggEAIzlVqW9Km1RTl2C7p2CjHmZum+3T69jU3MYZVyjx2Yu5\\n8lDHxumdA+2L5nBxk86EyOZQHUkTf3CTdymHQt5IByr3Z6Xe1J/jSBpv8yxzakVG\\naX/HHFz+iD6o5JHyU00PTN44Z7e7vEqod/2cgnbAPRYchfIRm23Nu/Qi9ZhrSBeS\\nEo+cc3LI98NyqsFGikYUYYrmWvnGUJ3EZ7QwTMMcvZANCWy8hFyOGuVOKlAJRIxn\\n0OryZjuJjTQpIZl36MQ9SsXD5WBy3uaQCtnc1Z7GNR63PJbTFfHVmngD1K80XQes\\nHbWmXwkfbWIqcpFkHvDeoQsFBXaJuQHdeBprIoh7eQKBgQDNwnJaw+YUbyDpckX7\\n6UcTwCvpWYhZM0YLXZVNpHVGAyBbdJ+dg27E2cOLLk35uG4tDDDfJi3fDTb9iHxT\\nx66XhUH9Q6o0A0tmWzOkxPCQ31lTDbmWDx9bk6UX7oCNMQdC9QTA2tAmUA4FsKoG\\nhV90coF93mzZGqmRWnrHhtAytwKBgQDK65n62y2Br731Ttc1QLVGNA3wiN2w6nKs\\nn2pcX2ZJXLf7B3QVxwrGlS8HCLZHIzU2JQ6hZV3r+KbPfkL7sZUT5WD2zYrGEVFh\\ncYTjlXr/O8upPEfhUN194TLscAYloAVzaqjQBQ5fqKid94rdANVxqJ7HQtCmRVDi\\n9n562Hc38wKBgGNePp+678h6iqhy+X1ZAWx2aD5/cKuzaWZfwZUHkWNIaz3/qn4F\\nVV9X02nJ6PpqqTq0In4CEDEiTqZOXcyQKK8gOeg332DTHnzGGsC+I3ezhY3omPHx\\nR7GQMjDGi+qj/N/HOI5yngeCreLtmI8hpiG0kvjYjDSk/bMmwRjO8IktAoGBAI2j\\nkFJShNweAHjm9D7ekOmU0hoQXrXrn+mwSHx7tpkEmAMnu7arvXDJlw7Q3PKgt7a4\\nfRLY/4sDf+QbXMP0u3ssw9bht7jzQ5vBsiFtKHJZmZniUsYKPOBtva7drty6arOa\\nQoUY0mShBDlnHU2QFGyGZ3XsxFkazw/tQHGdAPJTAoGAf4fL4+MOixvUwPrKIRWU\\nXl0nrtPMkoHzurA0nQB/Bx/q2OkrAw+xdYlyz8gT6446eNmJJJLShTTQAphQ+xCl\\noxsIGVOYpiKUYjj4RswIS/+ZwIqlfryFHWbAgxmm3dHoc4UI9/685idqCcasAcov\\n84USiFDNX4EHOBx/3Rw8Cs8=\\n-----END PRIVATE KEY-----\\n".replace(/\\n/g, "\n"),
            projectId: "ialgc23",
            clientEmail: "firebase-adminsdk-cywr7@ialgc23.iam.gserviceaccount.com"
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