import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyCm7beU2ecQZ6zFcCIzq2ZBjV6CDFncVgc",
	authDomain: "chatroom-d5667.firebaseapp.com",
	projectId: "chatroom-d5667",
	storageBucket: "chatroom-d5667.appspot.com",
	messagingSenderId: "624794828264",
	appId: "1:624794828264:web:eb6b1356f15d2032d6f85d"
};

const app = initializeApp( firebaseConfig );
const db = getFirestore( app );

async function loginWithGoogle () {
	try {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();

		const { user } = await signInWithPopup( auth, provider );
		return {
			uid: user.uid,
			displayName: user.displayName
		};
	}
	catch ( err ) {
		if ( err.code !== 'auth/cancelled-popup-request' )
			console.error( err );
		return null;
	}
}

async function sendMessage ( roomId, user, text ) {
	try {
		await addDoc( collection( db, 'chat-rooms', roomId, 'messages' ), {
			uid: user.uid,
			displayName: user.displayName,
			text: text.trim(),
			timestamp: serverTimestamp(),
		} );
	}
	catch ( error ) {
		console.log( error );
	}
}

function getMessages ( roomId, callback ) {
	return onSnapshot(
		query(
			collection( db, 'chat-rooms', roomId, 'messages' ),
			orderBy( 'timestamp', 'asc' )
		),
		( querySnapsot ) => {
			const messages = querySnapsot.docs.map( doc => ( {
				id: doc.id,
				...doc.data(),
			} ) );
			callback( messages );
		}
	);
}

export { loginWithGoogle, sendMessage, getMessages };