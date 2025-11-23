import dynamic from "next/dynamic"

export const Contact = dynamic(async () => (await import('./contact')).Contact, {
  ssr: false,
  loading: () => <p>...</p>
})
