export function configureMusicKit() {
  const developerToken = process.env.NEXT_PUBLIC_MUSICKIT_DEVELOPER_TOKEN;

  return new Promise((resolve) => {
    if (window.MusicKit) {
      const music = MusicKit.configure({
        developerToken,
        app: {
          name: 'Tunion',
          build: '1.0.0'
        }
      });
      resolve(music);
    } else {
      document.addEventListener('musickitloaded', () => {
        const music = MusicKit.configure({
          developerToken,
          app: {
            name: 'Tunion',
            build: '1.0.0'
          }
        });
        resolve(music);
      });
    }
  });
}

export async function authorizeUser(music) {
  try {
    const userToken = await music.authorize();
    return userToken;
  } catch (error) {
    console.error('Authorization failed', error);
    return null;
  }
}