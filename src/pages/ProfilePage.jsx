import { useEffect } from 'react';
import { auth } from '../firebase/firebase';

function ProfilePage() {
  // sukurti forma atnaujinti userio informacijai displayName photoURL phoneNumber
  const user = auth.currentUser;
  const email = user?.email;
  useEffect(() => {
    // atspausdinamas user objektas kai jis pasikeicia
    console.log('user ===', user);
  }, [email, user]);
  /* 
    import { auth } from 'firebase/app';

    // Get the current user
    const user = auth().currentUser;

    // Log the user's properties
    console.log('User ID:', user.uid);
    console.log('Display Name:', user.displayName);
    console.log('Email Address:', user.email);
    console.log('Email Verified:', user.emailVerified);
    console.log('Profile Picture URL:', user.photoURL);
    console.log('Phone Number:', user.phoneNumber);
    console.log('Identity Providers:', user.providerData);
    console.log('Metadata:', user.metadata);
    console.log('Identity Provider ID:', user.providerId);
  */

  return (
    <div className="container">
      <h1>ProfilePage</h1>
      <p>This is ProfilePage</p>
    </div>
  );
}

export default ProfilePage;
