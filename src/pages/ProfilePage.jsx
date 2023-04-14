import { useEffect } from 'react';
import { auth } from '../firebase/firebase';
import ProfileForm from '../components/auth/ProfileForm';
import { updateProfile } from 'firebase/auth';

function ProfilePage() {
  // sukurti forma atnaujinti userio informacijai displayName photoURL phoneNumber
  const user = auth.currentUser;
  const email = user?.email;
  useEffect(() => {
    // atspausdinamas user objektas kai jis pasikeicia
    console.log('user ===', user);
  }, [email, user]);
  /* 
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

  function updateFireUser(newValues) {
    updateProfile(auth.currentUser, newValues)
      .then(() => {
        // Profile updated!
        console.log('updated');
        // ...
      })
      .catch((error) => {
        // An error occurred
        console.warn('error', error);
        // ...
      });
  }

  return (
    <div className="container">
      <h1>User: {user.displayName} profile</h1>
      <p>This is ProfilePage</p>
      <ProfileForm user={user} onUpdate={updateFireUser} />
    </div>
  );
}

export default ProfilePage;
