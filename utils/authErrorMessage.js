export default function (errorCode) {
  switch (errorCode) {
    case 'auth/user-not-found':
      return 'Yanlış e-posta!';
    case 'auth/invalid-email':
      return 'Geçersiz e-posta adresi!';
    case 'auth/invalid-password':
      return 'Geçersiz şifre!';
    case 'auth/wrong-password':
      return 'Yanlış şifre!';
    default:
      return 'Bir hata oluştu!';
  }
}
