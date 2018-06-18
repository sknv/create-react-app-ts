export interface IProfile {
  name: string
}

// Simulate a HTTP request.
export function fetchProfile(): Promise<IProfile> {
  return new Promise(resolve =>
    setTimeout(() => {
      const profile = { name: 'User Name' }
      resolve(profile)
    }, 100)
  )
}
